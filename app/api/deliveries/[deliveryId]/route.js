import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
  try {
    const deliveryRef = doc(db, "deliveries", params.deliveryId);
    const deliverySnap = await getDoc(deliveryRef);

    if (!deliverySnap.exists()) {
      return NextResponse.json({ error: "Delivery not found" }, { status: 404 });
    }

    return NextResponse.json(deliverySnap.data(), { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    const { deliveryMethod, price } = await request.json();
    const deliveryRef = doc(db, "deliveries", params.deliveryId);

    await updateDoc(deliveryRef, { deliveryMethod, price, updatedAt: new Date() });

    return NextResponse.json({ message: "Delivery updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await deleteDoc(doc(db, "deliveries", params.deliveryId));
    return NextResponse.json({ message: "Delivery deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
