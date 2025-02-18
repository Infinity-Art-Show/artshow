import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, description, artworks } = await request.json();

    const docRef = await addDoc(collection(db, "galleries"), {
      name,
      description,
      artworks: artworks || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ message: "Gallery created", galleryId: docRef.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "galleries"));
    const galleries = snapshot.docs.map(doc => ({ galleryId: doc.id, ...doc.data() }));

    return NextResponse.json(galleries, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
