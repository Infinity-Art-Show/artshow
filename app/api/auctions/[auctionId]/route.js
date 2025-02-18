import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

// 获取单个 Auction
export async function GET(request, context) {
  try {
    const { params } = context;
    const auctionId = params.auctionId;

    if (!auctionId) {
      return NextResponse.json({ error: "Missing auctionId" }, { status: 400 });
    }

    const auctionRef = doc(db, "auctions", auctionId);
    const auctionSnap = await getDoc(auctionRef);

    if (!auctionSnap.exists()) {
      return NextResponse.json({ error: "Auction not found" }, { status: 404 });
    }

    return NextResponse.json(auctionSnap.data(), { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 更新 Auction
export async function PATCH(request, context) {
  try {
    const { params } = context;
    const auctionId = params.auctionId;

    if (!auctionId) {
      return NextResponse.json({ error: "Missing auctionId" }, { status: 400 });
    }

    const data = await request.json();
    const auctionRef = doc(db, "auctions", auctionId);

    await updateDoc(auctionRef, { ...data, updatedAt: new Date() });

    return NextResponse.json({ message: "Auction updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 删除 Auction
export async function DELETE(request, context) {
  try {
    const { params } = context;
    const auctionId = params.auctionId;

    if (!auctionId) {
      return NextResponse.json({ error: "Missing auctionId" }, { status: 400 });
    }

    await deleteDoc(doc(db, "auctions", auctionId));
    return NextResponse.json({ message: "Auction deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
