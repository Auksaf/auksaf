import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="w-full bg-black text-white border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo / Home */}
        <Link href="/" className="text-xl font-bold">
          🏠 AUKSAF
        </Link>

        {/* Navigation */}
        <nav className="flex gap-4 text-sm">

          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>

          <Link href="/return-policy" className="hover:text-gray-300">
            Return Policy
          </Link>

          <Link href="/terms" className="hover:text-gray-300">
            Terms
          </Link>

        </nav>

      </div>
    </header>
  );
}