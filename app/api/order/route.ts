import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Supabase client (server-side safe usage)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Resend email client
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, city, address, product, price, quantity } = body;
    const { count } = await supabase
  .from("orders")
  .select("*", { count: "exact", head: true });

const orderNo = (count ?? 0) + 1;

const orderId = `AK-ROOH-${String(orderNo).padStart(6, "0")}`;

    console.log("Order received:", body);

    // 1. SAVE ORDER IN SUPABASE
    const { data, error } = await supabase
  .from("orders")
  .insert([
    {
      order_no: orderId,
      name,
      phone,
      city,
      address,
      product,
      price,
      quantity,
      status: "Pending",
    },
  ])
  .select()
  .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { success: false, message: "Database error" },
        { status: 500 }
      );
    }

    // 2. SEND EMAIL VIA RESEND
    await resend.emails.send({
      from: "AUKSAF <onboarding@resend.dev>",
      to: "anwarsanwar30@gmail.com",
      subject: "New Order Received - AUKSAF",
      html: `
        <h2>New Order Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Product:</b> ${product}</p>
        <p><b>Price:</b> Rs ${price}</p>
        <p><b>Quantity:</b> ${quantity}</p>
        <hr/>
        <p><b>Order ID:</b> ${orderId}</p>
      `,
    });

    // 3. RETURN RESPONSE TO FRONTEND
   return NextResponse.json({
  success: true,
  orderId,
  orderNo,
});

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}