import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

// ✅ 获取单个 Gallery (GET)
export async function GET(request, { params }) {
  try {
    const galleryRef = doc(db, "galleries", params.galleryId);
    const gallerySnap = await getDoc(galleryRef);

    if (!gallerySnap.exists()) {
      return NextResponse.json({ error: "Gallery not found" }, { status: 404 });
    }

    return NextResponse.json({ galleryId: params.galleryId, ...gallerySnap.data() }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    const { name, description, artworks } = await request.json();
    const galleryRef = doc(db, "galleries", params.galleryId);

    await updateDoc(galleryRef, { 
      name, 
      description, 
      artworks, 
      updatedAt: new Date() 
    });

    return NextResponse.json({ message: "Gallery updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await deleteDoc(doc(db, "galleries", params.galleryId));
    return NextResponse.json({ message: "Gallery deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
