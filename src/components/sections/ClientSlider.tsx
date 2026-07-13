
const LOGO_COUNT = 10

// Doubled for seamless infinite loop
const logos = Array.from({ length: LOGO_COUNT * 2 }, (_, i) => i)

const logoNames = [
  'Vinhomes', 'Masan Group', 'FPT Corp', 'VinFast',
  'Techcombank', 'Vinamilk', 'Sacombank', 'TH True Milk',
  'Nova Group', 'PNJ',
]

export default function ClientSlider() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">
          Trusted by 1,000+ businesses across Vietnam
        </p>
      </div>

      {/* Marquee wrapper — hover pauses all children */}
      <div className="relative group">

        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {logos.map((_, i) => {
            const name = logoNames[i % logoNames.length]
            return (
              <div
                key={i}
                className="flex-shrink-0 mx-4 w-36 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center"
              >
                <span className="text-slate-400 text-xs font-semibold tracking-wide uppercase">
                  {name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
