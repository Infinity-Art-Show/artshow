import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { artistId, buyerId, artworkId, deliveryMethod, price, transactionId } = await request.json();
    
    const docRef = await addDoc(collection(db, "deliveries"), {
      artistId,
      buyerId,
      artworkId,
      deliveryMethod,
      price,
      transactionId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ message: "Delivery created", deliveryId: docRef.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "deliveries"));
    const deliveries = snapshot.docs.map(doc => ({ deliveryId: doc.id, ...doc.data() }));

    return NextResponse.json(deliveries, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
