export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f3f0e7] text-[#1f1f1a] relative">

      {/* SOFT BACKGROUND ATMOSPHERE (LIGHT MODE ONLY) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-yellow-100/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-green-200/20 blur-3xl rounded-full" />
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-amber-100/10 blur-3xl rounded-full" />
      </div>

      {/* SIMPLE PORTFOLIO HEADER */}
      <header className="relative z-10 border-b border-[#e7e1d2] px-6 py-5 bg-[#f6f3ea]/80 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          <div>
            <h1 className="text-lg tracking-[0.3em] uppercase">
              Portfolio
            </h1>
            <p className="text-xs text-[#6b6b6b] mt-1">
              Digital Systems & Business Solutions
            </p>
          </div>

          <a
            href="/"
            className="text-sm text-[#6b6b6b] hover:text-[#1f1f1a] transition"
          >
            ← Back to AUKSAF
          </a>

        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="relative z-10">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#e7e1d2] px-6 py-10 mt-20">
        <div className="max-w-6xl mx-auto text-center text-[#6b6b6b] text-sm">
          Built with Next.js • Portfolio Showcase System
        </div>
      </footer>

    </div>
  );
}