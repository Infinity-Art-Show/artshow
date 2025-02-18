import { db } from "@/lib/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export async function PATCH(req, { params }) {
  try {
    const { pathname } = req.nextUrl;
    const userId = pathname.split('/').pop();

    if (!userId) {
      return new Response(JSON.stringify({ error: "缺少 userId" }), { status: 400 });
    }

    const updateData = await req.json();

    // 获取用户数据，确保用户存在
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      return new Response(JSON.stringify({ error: "用户不存在" }), { status: 404 });
    }

    // 更新用户数据（支持部分字段更新）
    await updateDoc(userRef, {
      ...updateData, // 允许部分更新
      updatedAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "用户信息更新成功" }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
