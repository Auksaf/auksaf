"use client";

import { useState } from "react";

export default function OrderPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [txId, setTxId] = useState("");

  const product = "ROOH - The Aqua Elixir (50ML)";
  const price = 2499;
  const deliveryFee = 250;

  const whatsappNumber = "923024255245";

  const handleOrder = () => {
    if (!name || !phone || !address || !city) {
      alert("Please fill all required fields");
      return;
    }

    const orderCode = `AUK-${Date.now().toString().slice(-6)}`;

    const message = `
🧴 AUKSAF ORDER CONFIRMATION

🆔 Order Code: ${orderCode}

📦 Product: ${product}
💰 Price: Rs. ${price}

🚚 Delivery Fee (Advance Required): Rs. ${deliveryFee}
⚠️ Order will only be processed after delivery fee payment confirmation

👤 Name: ${name}
📱 Phone: ${phone}
🏙 City: ${city}
🏠 Address: ${address}

💳 Payment (Delivery Fee):
JazzCash
Transaction ID: ${txId || "Not provided"}
(Attach screenshot of payment)

📌 Note:
Please confirm availability before dispatch.
Thank you for choosing AUKSAF.
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-xl border border-white/10 rounded-2xl p-6 bg-white/[0.03] backdrop-blur-xl">

        <h1 className="text-3xl tracking-[0.25em] mb-2 text-center">
          PLACE YOUR ORDER
        </h1>

        <p className="text-zinc-400 text-sm text-center mb-8">
          ROOH - 50ML | Launch Price Rs. 2499
        </p>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name *"
            className="w-full p-3 bg-black border border-white/10 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number *"
            className="w-full p-3 bg-black border border-white/10 rounded-lg"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="City *"
            className="w-full p-3 bg-black border border-white/10 rounded-lg"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <textarea
            placeholder="Full Address *"
            className="w-full p-3 bg-black border border-white/10 rounded-lg"
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="text"
            placeholder="JazzCash / Easypaisa Transaction ID (optional)"
            className="w-full p-3 bg-black border border-white/10 rounded-lg"
            value={txId}
            onChange={(e) => setTxId(e.target.value)}
          />

          <button
            onClick={handleOrder}
            className="w-full bg-white text-black py-3 rounded-lg uppercase tracking-[0.2em] hover:bg-zinc-200 transition"
          >
            Send Order on WhatsApp
          </button>

          <p className="text-xs text-zinc-500 text-center mt-4 leading-relaxed">
            ⚠️ Order will only be processed after delivery fee confirmation via JazzCash <br />
            🚚 Remaining amount will be Cash on Delivery (Pakistan only)
          </p>

        </div>

      </div>

    </div>
  );
}