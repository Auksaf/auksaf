"use client";

import { useState } from "react";

export default function StatusSelect({
  id,
  currentStatus,
}: {
  id: string;
  currentStatus: string;
}) {
  const [status, setStatus] = useState(currentStatus);

  async function updateStatus(newStatus: string) {
    setStatus(newStatus);

    await fetch("/api/update-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status: newStatus }),
    });
  }

  return (
    <select
      value={status}
      onChange={(e) => updateStatus(e.target.value)}
      className="bg-black border border-white/20 text-white px-2 py-1 rounded"
    >
      <option>Pending</option>
      <option>Confirmed</option>
      <option>Packed</option>
      <option>Dispatched</option>
      <option>Delivered</option>
      <option>Cancelled</option>
      <option>Returned</option>
      <option>Failed Delivery</option>
    </select>
  );
}