import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminDb } from '@/lib/firebase-admin';

export const POST = async () => {
  try {
    const cookieStore = cookies();
    const sessionId = await cookieStore.get('sessionId'); 

    if (!sessionId) {
      return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
    }

    // 删除 session
    await adminDb.collection('sessions').doc(sessionId.value).delete();

    // 清除 Cookie
    const response = NextResponse.json({ message: 'Logged out successfully' });
    response.cookies.set('sessionId', '', { maxAge: 0 });

    return response;

  } catch (error) {
    return NextResponse.json({ error: error.message || 'Logout failed' }, { status: 500 });
  }
};
