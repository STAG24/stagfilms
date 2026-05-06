export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-10 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="STAGFILMS"
          className="w-7 h-7 object-contain opacity-40"
        />
        <span className="font-['Barlow_Condensed'] font-extrabold text-[1rem] tracking-[0.2em] text-gray-700">
          STAGFILMS
        </span>
      </div>
      <div className="font-mono text-[0.58rem] tracking-[0.12em] text-gray-700">
        © 2026 STAGFILMS · Yogyakarta · All Rights Reserved
      </div>
    </footer>
  )
}
