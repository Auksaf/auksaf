import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Order received:", body);

    const { name, phone, city, address, product, price, quantity } = body;

    const orderId = `AUK-${Date.now().toString().slice(-6)}`;

    const response = await resend.emails.send({
      from: "AUKSAF <onboarding@resend.dev>",
      to: "anwarsanwar30@gmail.com",
      subject: `New Order Received - ${orderId}`,
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>🧴 AUKSAF NEW ORDER</h2>

          <p><strong>Order ID:</strong> ${orderId}</p>
          <hr />

          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Price:</strong> Rs. ${price}</p>
          <p><strong>Quantity:</strong> ${quantity || 1}</p>

          <hr />

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Address:</strong> ${address}</p>

          <hr />

          <p style="color: #888;">
            ⚡ This order was placed from AUKSAF website
          </p>
        </div>
      `,
    });
    console.log("Resend response:", response);

    return NextResponse.json({
      success: true,
      orderId,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to process order",
      },
      { status: 500 }
    );
  }
}