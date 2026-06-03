import SiteHeader from "@/components/SiteHeader";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">

<SiteHeader />

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl tracking-[0.18em] mb-12">
          Privacy Policy
        </h1>

        <div className="space-y-10 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-2xl text-white mb-4">
              1. Information We Collect
            </h2>

            <p>
              When placing an order through AUKSAF, we may collect:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
              <li>Name</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>City</li>
              <li>Order details</li>
            </ul>

            <p className="mt-4">
              We may also collect anonymous website analytics data to improve
              website performance and customer experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4">
              2. How We Use Information
            </h2>

            <p>
              Customer information is used only for:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
              <li>Order processing</li>
              <li>Delivery coordination</li>
              <li>Customer support</li>
              <li>Improving website experience</li>
            </ul>

            <p className="mt-4">
              AUKSAF does not sell customer information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4">
              3. Data Protection
            </h2>

            <p>
              We take reasonable measures to protect customer information from
              unauthorized access, misuse, or disclosure.
            </p>

            <p className="mt-4">
              However, no online platform can guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4">
              4. Third-Party Services
            </h2>

            <p>
              AUKSAF may use trusted third-party services for:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2 text-zinc-400">
              <li>Delivery services</li>
              <li>Analytics</li>
              <li>Communication systems</li>
              <li>Payment processing</li>
            </ul>

            <p className="mt-4">
              These services only receive information necessary for order
              fulfillment and operational purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4">
              5. Customer Consent
            </h2>

            <p>
              By using our website, you agree to the collection and use of
              information described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-white mb-4">
              6. Policy Updates
            </h2>

            <p>
              AUKSAF reserves the right to update this Privacy Policy whenever
              necessary. Updated versions will always be published on the
              website.
            </p>
          </section>

        </div>

      </div>

    </div>
  );
}