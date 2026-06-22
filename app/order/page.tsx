"use client";

import { useState } from "react";

export default function OrderPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const product = "ROOH - The Aqua Elixir (50ML)";
  const price = 2499;

  const adminWhatsApp = "923024255245";

  // ----------------------------
  // PHONE NORMALIZATION (PAKISTAN)
  // ----------------------------
  const formatPhone = (input: string) => {
    let num = input.replace(/\D/g, "");

    // 03XXXXXXXXX → 923XXXXXXXXX
    if (num.startsWith("0")) {
      num = "92" + num.substring(1);
    }

    // 3XXXXXXXXX → 923XXXXXXXXX
    if (num.length === 10 && num.startsWith("3")) {
      num = "92" + num;
    }

    return num;
  };

  const handleWhatsApp = (orderIdValue: string, formattedPhone: string) => {
  const adminMessage = `
🚨 NEW AUKSAF ORDER

Order ID: ${orderIdValue}
Product: ${product}
Price: Rs. ${price}

Customer:
${name}
${phone}
${city}
${address}
`;

  const customerMessage = `
✨ AUKSAF — Launch Edition 2026

Dear ${name},

Your order has been received successfully.

Order ID: ${orderIdValue}
Product: ROOH — Collector’s Edition

⚠️ ACTION REQUIRED:
Please confirm your order by replying:
"YES, CONFIRM ORDER"

Once you confirm, our team will proceed with dispatch and contact you with payment & delivery details.

Launch Edition Notice:
Limited batch of ~25 bottles (First Come, First Served)

Thank you for choosing AUKSAF.
`;

  const adminURL = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(adminMessage)}`;
  const customerURL = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(customerMessage)}`;

  // STEP 1: Open admin WhatsApp
  window.open(adminURL, "_blank");

  // STEP 2: After delay, open customer WhatsApp (same tab fallback safe)
  setTimeout(() => {
    window.location.href = customerURL;
  }, 1200);
};

  const handleOrder = async () => {
    if (!name || !phone || !address || !city) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      setSuccess(false);

      const formattedPhone = formatPhone(phone);

      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone: formattedPhone,
          city,
          address,
          product,
          price,
          quantity: 1,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setOrderId(data.orderId);

        handleWhatsApp(data.orderId, formattedPhone);

        setName("");
        setPhone("");
        setCity("");
        setAddress("");
      } else {
        alert("Failed to submit order. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl border border-white/10 rounded-[2rem] p-8 md:p-10 bg-white/[0.03] backdrop-blur-xl relative">

        <div className="absolute top-6 right-6">
          <a
            href="/"
            className="text-zinc-500 hover:text-white transition uppercase tracking-[0.18em] text-xs"
          >
            Close ✕
          </a>
        </div>

        <h1 className="text-3xl md:text-4xl tracking-[0.25em] text-center">
          Reserve Your Bottle
        </h1>

        <p className="text-zinc-400 text-sm text-center mt-3 mb-8 tracking-[0.08em]">
          ROOH — The Aqua Elixir • Signature Launch Edition
        </p>

        {success && (
          <div className="mb-6 p-4 rounded-2xl border border-green-500/30 bg-green-500/10 text-green-300 text-center text-sm">
            🎉 Thank you for your order.
            <br /><br />
            Our team will contact you shortly via WhatsApp.
            <br /><br />
            <span className="text-white/70">Order ID: {orderId}</span>
          </div>
        )}

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Full Name *"
            className="w-full p-4 bg-black border border-white/10 rounded-2xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="03XXXXXXXXX"
            className="w-full p-4 bg-black border border-white/10 rounded-2xl"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="City *"
            className="w-full p-4 bg-black border border-white/10 rounded-2xl"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <textarea
            placeholder="Full Address *"
            className="w-full p-4 bg-black border border-white/10 rounded-2xl"
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button
            onClick={handleOrder}
            disabled={loading}
            className="w-full bg-white text-black py-4 rounded-2xl uppercase"
          >
            {loading ? "Processing..." : "Reserve My Bottle"}
          </button>

        </div>
      </div>
    </div>
  );
}