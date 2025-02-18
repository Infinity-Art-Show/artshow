import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { buyerId, artistId, artworkId, amount, paymentMethod, status } = await request.json();
    const docRef = await addDoc(collection(db, "transactions"), {
      buyerId,
      artistId,
      artworkId,
      amount,
      paymentMethod,
      status,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ message: "Transaction created", transactionId: docRef.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "transactions"));
    const transactions = snapshot.docs.map(doc => ({ transactionId: doc.id, ...doc.data() }));

    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
