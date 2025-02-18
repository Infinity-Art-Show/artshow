import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

// 创建 Auction
export async function POST(request) {
  try {
    const data = await request.json();
    const docRef = await addDoc(collection(db, "auctions"), {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ auctionId: docRef.id, message: "Auction created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 获取所有 Auctions
export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "auctions"));
    const auctions = snapshot.docs.map((doc) => ({
      auctionId: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(auctions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
