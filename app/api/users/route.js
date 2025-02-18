import { db } from "@/lib/firebase";
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";

export async function GET() {
  try {
    const usersSnapshot = await getDocs(collection(db, "users"));
    const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { username, email } = await req.json();

    if (!username || !email) {
      return new Response(JSON.stringify({ error: "用户名和邮箱必填" }), { status: 400 });
    }

    const newUser = await addDoc(collection(db, "users"), {
      username,
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "用户创建成功", id: newUser.id }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
