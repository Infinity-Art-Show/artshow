import { adminDb } from '@/lib/firebase-admin';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

export const POST = async (request) => {
  try {
    const { email, password } = await request.json();
    const snapshot = await adminDb.collection('users').where('email', '==', email).get();

    if (snapshot.empty) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userDoc = snapshot.docs[0];
    const userData = userDoc.data();
    const isValidPassword = await bcrypt.compare(password, userData.password);

    if (!isValidPassword) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // 生成 session 
    const sessionId = `session_${userData.userId}_${Date.now()}`;

    // 存储 session 
    await adminDb.collection('sessions').doc(sessionId).set({
      userId: userData.userId,
      createdAt: new Date(),
    });

    const response = NextResponse.json({
      message: 'Login successful',
      userId: userData.userId,
    });

    response.cookies.set('sessionId', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, 
    });

    return response;

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: error.message || 'Login failed' }, { status: 500 });
  }
};
