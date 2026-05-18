"use client";

import { useState } from "react";

export default function OrderPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const product = "ROOH - The Aqua Elixir (50ML)";
  const price = 2499;

  const whatsappNumber = "923024255245";

  const handleOrder = () => {
    if (!name || !phone || !address || !city) {
      alert("Please fill all required fields");
      return;
    }

    const orderCode = `AUK-${Date.now().toString().slice(-6)}`;

    const message = `
🧴 AUKSAF ORDER REQUEST

🆔 Order Code: ${orderCode}

📦 Product: ${product}
💰 Price: Rs. ${price}

👤 Name: ${name}
📱 Phone: ${phone}
🏙 City: ${city}
🏠 Address: ${address}

💳 Payment Preference:
${paymentMethod}

Thank you for choosing AUKSAF.
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const handleJazzCashRequest = () => {
    const message = `
Hi AUKSAF,

I would like to pay for my ROOH order via JazzCash.
Please share payment details.
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-xl border border-white/10 rounded-[2rem] p-8 md:p-10 bg-white/[0.03] backdrop-blur-xl">

        <h1 className="text-3xl md:text-4xl tracking-[0.25em] text-center">
          PLACE YOUR ORDER
        </h1>

        <p className="text-zinc-400 text-sm text-center mt-3 mb-10 tracking-[0.08em]">
          ROOH — The Aqua Elixir | 50ML
        </p>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Full Name *"
            className="w-full p-4 bg-black border border-white/10 rounded-2xl outline-none focus:border-[#c6a972]/40 transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number *"
            className="w-full p-4 bg-black border border-white/10 rounded-2xl outline-none focus:border-[#c6a972]/40 transition"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="City *"
            className="w-full p-4 bg-black border border-white/10 rounded-2xl outline-none focus:border-[#c6a972]/40 transition"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <textarea
            placeholder="Full Address *"
            className="w-full p-4 bg-black border border-white/10 rounded-2xl outline-none focus:border-[#c6a972]/40 transition"
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="space-y-3 pt-2">

            <p className="text-sm uppercase tracking-[0.18em] text-zinc-400">
              Payment Preference
            </p>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-4 bg-black border border-white/10 rounded-2xl outline-none focus:border-[#c6a972]/40 transition"
            >
              <option>Cash on Delivery</option>
              <option>JazzCash</option>
            </select>

          </div>

          <button
            onClick={handleOrder}
            className="w-full bg-white text-black py-4 rounded-2xl uppercase tracking-[0.22em] hover:bg-zinc-200 transition mt-4"
          >
            Order via WhatsApp
          </button>

          <button
            onClick={handleJazzCashRequest}
            className="w-full border border-[#c6a972]/30 hover:border-[#c6a972] text-[#c6a972] py-4 rounded-2xl uppercase tracking-[0.22em] transition"
          >
            Request JazzCash Details
          </button>

          <div className="pt-4 text-center space-y-2">

            <p className="text-zinc-400 text-sm leading-relaxed">
              Choose Cash on Delivery or request JazzCash payment details directly on WhatsApp.
            </p>

            <p className="text-xs text-zinc-600">
              Pakistan nationwide delivery available.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}