import { adminDb, adminAuth } from '@/lib/firebase-admin';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { customAlphabet } from 'nanoid';
import validator from 'validator';


const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export async function POST(request) {
  try {
    const { username, email, password, profileDetails } = await request.json();

    // 1. 参数校验
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: '所有字段必填' },
        { status: 400 }
      );
    }

    // 2. 邮箱格式验证
    if (!validator.isEmail(email)) { 
      return NextResponse.json(
        { error: '邮箱格式不正确' },
        { status: 400 }
      );
    }

    // 3. 检查邮箱是否已注册
    const emailSnapshot = await adminDb.collection('users')
      .where('email', '==', email)
      .get();
      
    if (!emailSnapshot.empty) {
      return NextResponse.json(
        { error: '邮箱已注册' },
        { status: 409 }
      );
    }

    // 4. 检查用户名唯一性
    const usernameSnapshot = await adminDb.collection('users')
      .where('username', '==', username)
      .get();
      
    if (!usernameSnapshot.empty) {
      return NextResponse.json(
        { error: '用户名已存在' },
        { status: 409 }
      );
    }

    // 5. 生成 userId（IAS前缀 + 8位随机码）
    const generateUserId = () => {
      const nanoid = customAlphabet('0123456789', 8);
      return `IAS${nanoid()}`;
    };
    let userId;
    let isUnique = false;
    
    // 确保 userId 唯一性
    while (!isUnique) {
      userId = generateUserId();
      const docSnapshot = await adminDb.collection('users').doc(userId).get();
      if (!docSnapshot.exists) isUnique = true;
    }

    // 6. 密码哈希处理
    const hashedPassword = await bcrypt.hash(password, 10);

    // 7. 创建 Firebase 认证用户
    const userRecord = await adminAuth.createUser({
      email,
      password: hashedPassword,
      displayName: username
    });

    // 8. 创建 Firestore 用户文档
    const currentDate = new Date();
    const userData = {
      userId,
      username,
      email,
      password: hashedPassword,
      profileDetails,
      createdAt: formatDate(currentDate),
      updatedAt: formatDate(currentDate) 
    };

    await adminDb.collection('users').doc(userId).set(userData);

    return NextResponse.json({
      message: '注册成功',
      userId,
      verificationSent: true
    }, { status: 201 });

  } catch (error) {
    console.error('注册错误:', error);
    return NextResponse.json(
      { error: error.message || '注册失败' },
      { status: 500 }
    );
  }
}