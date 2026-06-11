import Link from "next/link";

export default function NotFound() {
  return (
<div className="min-h-screen flex flex-col" style={{ fontFamily: "'Outfit', sans-serif", background: "linear-gradient(180deg, #060913 0%, #08101d 48%, #060a12 100%)" }}>
  <div className="fixed pointer-events-none" style={{ top: "-180px", left: "-120px", width: "560px", height: "560px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,.46) 0%, rgba(30,64,175,.24) 42%, transparent 72%)", filter: "blur(90px)" }} />
  <div className="fixed pointer-events-none" style={{ bottom: "-160px", right: "-90px", width: "460px", height: "460px", borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,.34) 0%, rgba(3,105,161,.18) 45%, transparent 72%)", filter: "blur(90px)" }} />
  <div className="fixed pointer-events-none" style={{ top: "20%", left: "50%", transform: "translateX(-50%)", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,.16) 0%, transparent 72%)", filter: "blur(80px)" }} />
  <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(96,165,250,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.09) 1px,transparent 1px),linear-gradient(rgba(96,165,250,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.03) 1px,transparent 1px)", backgroundSize: "56px 56px,56px 56px,14px 14px,14px 14px", WebkitMaskImage: "radial-gradient(circle at center,black 72%,transparent 100%)", maskImage: "radial-gradient(circle at center,black 72%,transparent 100%)" }} />      {/* Orb glows — mirrors Hero.tsx */}
      <div className="fixed pointer-events-none" style={{
        top: "-160px", left: "-100px",
        width: "520px", height: "520px", borderRadius: "50%",
        background: "radial-gradient(circle,#1d4ed833 0%,#1e3a8a22 50%,transparent 70%)",
        filter: "blur(80px)",
      }} />
      <div className="fixed pointer-events-none" style={{
        bottom: "-140px", right: "-80px",
        width: "420px", height: "420px", borderRadius: "50%",
        background: "radial-gradient(circle,#0369a133 0%,#0c4a6e22 50%,transparent 70%)",
        filter: "blur(80px)",
      }} />
      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(96,165,250,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.04) 1px,transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <main className="flex-1 flex items-center justify-center relative z-10">
        <div className="text-center px-4">
          {/* 404 with hero gradient */}
          <p
            className="font-bold text-8xl mb-4"
            style={{
              background: "linear-gradient(135deg,#4cc9f0 0%,#4ea8de 35%,#3b82f6 65%,#2563eb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 900,
              letterSpacing: "-.02em",
            }}
          >
            404
          </p>
          <h1 className="text-3xl font-bold text-white mb-3" style={{ fontWeight: 900 }}>
            Article Not Found
          </h1>
          <p className="mb-8 max-w-md mx-auto text-sm leading-relaxed" style={{ color: "rgba(140,160,185,.7)" }}>
            The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/blog"
            className="inline-block px-8 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
              boxShadow: "0 8px 24px rgba(37,99,235,.35)",
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    </div>
  );
}