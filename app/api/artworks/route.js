import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

// 创建 Artwork
export async function POST(request) {
  try {
    const data = await request.json();
    const docRef = await addDoc(collection(db, "artworks"), { ...data, createdAt: new Date() });
    return NextResponse.json({ artworkId: docRef.id, message: "Artwork created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 获取所有 Artworks
export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "artworks"));
    const artworks = snapshot.docs.map(doc => ({ artworkId: doc.id, ...doc.data() }));
    return NextResponse.json(artworks, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
