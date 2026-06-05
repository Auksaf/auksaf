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

  const handleOrder = async () => {
    if (!name || !phone || !address || !city) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      setSuccess(false);

      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
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

        {/* CLOSE BUTTON */}
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

        {/* SUCCESS MESSAGE */}
        {success && (
  <div className="mb-6 p-4 rounded-2xl border border-green-500/30 bg-green-500/10 text-green-300 text-center text-sm">
    🎉 Thank you for your order.

    <br />
    <br />

    Our team will contact you shortly via WhatsApp with payment instructions to confirm dispatch.

    <br />
    <br />

    <span className="text-white/70">
      Your Order ID: {orderId}
    </span>
  </div>
)}

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

          <button
            onClick={handleOrder}
            disabled={loading}
            className="w-full bg-white text-black py-4 rounded-2xl uppercase tracking-[0.22em] hover:bg-zinc-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Reserving Your Bottle..." : "Reserve My Bottle"}
          </button>

          <p className="text-center text-xs text-[#c6a972] tracking-[0.18em] uppercase mt-3">
  Limited launch batch currently available.
</p>

          <div className="pt-4 text-center space-y-3">

  <p className="text-zinc-400 text-sm leading-relaxed">
    To ensure smooth delivery and avoid fraudulent orders,
    delivery charges are collected in advance.
  </p>

  <p className="text-[#c6a972] text-sm leading-relaxed">
    Remaining amount is payable on delivery.
  </p>

  <p className="text-xs text-zinc-600">
    Nationwide delivery across Pakistan • Confirmation via WhatsApp before dispatch
  </p>

</div>

        </div>

      </div>

    </div>
  );
}