import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

// 获取单个 Artwork
export async function GET(request, { params }) {
  try {
    const artworkRef = doc(db, "artworks", params.artworkId);
    const artworkSnap = await getDoc(artworkRef);

    if (!artworkSnap.exists()) {
      return NextResponse.json({ error: "Artwork not found" }, { status: 404 });
    }

    return NextResponse.json(artworkSnap.data(), { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 更新 Artwork
export async function PATCH(request, { params }) {
  try {
    const data = await request.json();
    const artworkRef = doc(db, "artworks", params.artworkId);

    await updateDoc(artworkRef, { ...data, updatedAt: new Date() });

    return NextResponse.json({ message: "Artwork updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 删除 Artwork
export async function DELETE(request, { params }) {
  try {
    await deleteDoc(doc(db, "artworks", params.artworkId));
    return NextResponse.json({ message: "Artwork deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
