import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const orderId = body.orderId?.trim().toUpperCase();
    const rating = body.rating;
    const review = body.review?.trim();

    if (!orderId || !rating || !review) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        { status: 400 }
      );
    }

    console.log("Searching Order:", orderId);

    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("order_no,name,city")
      .eq("order_no", orderId)
      .maybeSingle();

    console.log("Order Result:", order);
    console.log("Order Error:", orderError);

    if (!order) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Order ID.",
        },
        { status: 404 }
      );
    }

    const { data: existing } = await supabase
      .from("reviews")
      .select("id")
      .eq("order_id", orderId)
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message:
            "A review has already been submitted for this order.",
        },
        { status: 409 }
      );
    }

    const { error: insertError } = await supabase
      .from("reviews")
      .insert([
        {
          order_id: order.order_no,
          customer_name: order.name,
          city: order.city,
          rating,
          review,
          status: "Pending",
          approved: false,
        },
      ]);

    if (insertError) {
      console.error(insertError);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to save review.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your review has been received and is awaiting approval.",
    });

  } catch (err) {

    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}