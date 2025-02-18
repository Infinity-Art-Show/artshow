import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const docRef = await addDoc(collection(db, "stories"), { ...data, createdAt: new Date(), updatedAt: new Date() });
    return NextResponse.json({ storyId: docRef.id, message: "Story created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "stories"));
    const stories = snapshot.docs.map(doc => ({ storyId: doc.id, ...doc.data() }));
    return NextResponse.json(stories, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
