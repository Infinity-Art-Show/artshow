import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import bcrypt from "bcrypt";

export async function POST(req, { params }) {
  try {
    const { pathname } = req.nextUrl;
    const userId = pathname.split('/').slice(-2, -1)[0]; // 获取 userId

    if (!userId) {
      return new Response(JSON.stringify({ error: "缺少 userId" }), { status: 400 });
    }

    const { oldPassword, newPassword } = await req.json();
    
    // 获取用户数据
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      return new Response(JSON.stringify({ error: "用户不存在" }), { status: 4055 });
    }

    const userData = userSnap.data();

    // 验证旧密码
    const isValidPassword = await bcrypt.compare(oldPassword, userData.password);
    if (!isValidPassword) {
      return new Response(JSON.stringify({ error: "旧密码错误" }), { status: 401 });
    }

    // 加密新密码
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 更新密码
    await updateDoc(userRef, { password: hashedPassword });

    return new Response(JSON.stringify({ message: "密码修改成功" }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
