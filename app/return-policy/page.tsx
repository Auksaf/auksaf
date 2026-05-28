export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl tracking-[0.18em] mb-12">
          Return & Refund Policy
        </h1>

        <div className="space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl text-white mb-4">
              1. Eligible Returns
            </h2>

            <p>
              At AUKSAF, customer satisfaction and product quality are extremely
              important to us. Returns or replacements may be accepted only if:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
              <li>The product arrives damaged</li>
              <li>The wrong item is delivered</li>
              <li>The package is leaking upon arrival</li>
              <li>The delivered product differs significantly from the order</li>
            </ul>

            <p className="mt-4">
              Customers must report such issues within 24 hours of receiving
              the order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4">
              2. Non-Returnable Items
            </h2>

            <p>
              Due to hygiene and product integrity reasons, the following are
              not eligible for return or refund:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
              <li>Opened perfume bottles</li>
              <li>Used products</li>
              <li>Fragrances disliked after use</li>
              <li>Products damaged after delivery</li>
              <li>Change-of-mind purchases</li>
            </ul>

            <p className="mt-4">
              Fragrance preferences vary from person to person. Therefore,
              scent dissatisfaction alone does not qualify for return.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4">
              3. Return Verification
            </h2>

            <p>
              To process a return request, customers may be asked to provide:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
              <li>Clear photos of the product</li>
              <li>Packaging images</li>
              <li>Order details</li>
              <li>Proof of damage or leakage</li>
            </ul>

            <p className="mt-4">
              AUKSAF reserves the right to reject claims that appear misleading,
              abusive, or fraudulent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4">
              4. Refund Process
            </h2>

            <p>
              If a refund or replacement request is approved, customers may
              receive:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
              <li>A replacement product</li>
              <li>OR a refund through an agreed payment method</li>
            </ul>

            <p className="mt-4">
              Refund timelines may vary depending on verification and payment
              provider processing times.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4">
              5. Delivery Charges
            </h2>

            <p>
              Delivery charges are generally non-refundable unless the issue
              occurred due to an error from AUKSAF.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4">
              6. Order Cancellation
            </h2>

            <p>
              Orders may only be cancelled before dispatch. Once an order has
              been shipped, cancellation requests may no longer be accepted.
            </p>
          </section>

        </div>

      </div>

    </div>
  );
}