import Image from "next/image";

const ANDROID_DOWNLOAD_URL =
  "https://github.com/lexycon002/ikdrive/releases/latest/download/IKDrive-v1.0.0.apk";

const steps = [
  ["01", "Choose your seat", "View the route and select the seat that works for you."],
  ["02", "Reserve your trip", "Confirm your journey in a few simple taps."],
  ["03", "Get your boarding pass", "Keep your digital pass ready on your phone."],
  ["04", "Scan your QR code", "Check in quickly when you board the bus."],
];

const features = [
  ["Easy Seat Reservation", "Choose and reserve your preferred seat without the queues."],
  ["Digital Boarding Pass", "Access your trip details and boarding pass from your phone."],
  ["QR Code Check-In", "Board confidently with a fast, secure QR code scan."],
  ["Real-Time Seat Availability", "See current seat availability before you reserve."],
  ["Secure Authentication", "Your account and reservation details stay protected."],
  ["Staff-Only Access", "A dedicated experience for authorized staff journeys."],
];

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f9fc] text-[#10213c]">
      <header className="relative z-10 border-b border-[#dfe7f1] bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="IKDrive home">
            <Image src="/ikDrive.png" alt="IKDrive logo" width={44} height={44} className="h-11 w-11 rounded-xl" priority />
            <span className="text-xl font-bold tracking-[-0.04em] text-[#0B2A5B]">IKDrive</span>
          </a>
          <a href="#download" className="hidden items-center gap-2 text-sm font-semibold text-[#0B2A5B] transition-colors hover:text-[#174b91] sm:flex">
            Get the app <ArrowIcon />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative border-b border-[#dfe7f1] bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cbd9ea] bg-[#f3f7fc] px-4 py-2 text-sm font-semibold text-[#174b91]">
                <span className="h-2 w-2 rounded-full bg-[#2c8a62]" /> Built for staff journeys
              </p>
              <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-[-0.055em] text-[#0B2A5B] sm:text-6xl lg:text-7xl">
                Reserve your staff bus seat. <span className="text-[#3476c5]">Ride with confidence.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#53657d]">
                Reserve your staff bus seat, get your boarding pass, and check in with a secure QR code, all from your phone.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={ANDROID_DOWNLOAD_URL} className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#0B2A5B] px-6 py-4 font-semibold text-white shadow-lg shadow-[#0B2A5B]/15 transition-transform hover:-translate-y-0.5 hover:bg-[#123b79]">
                  <DownloadIcon /> Download for Android
                </a>
                <span className="inline-flex items-center justify-center rounded-xl border border-[#cbd9ea] bg-[#f8fafc] px-6 py-4 font-semibold text-[#718198]" aria-label="iOS app coming soon">
                  iOS Coming Soon
                </span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:mr-0">
              <div className="absolute -inset-8 rounded-[3rem] bg-[#e7f0fa]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#d6e2f0] bg-[#eef4fa] p-3 shadow-2xl shadow-[#0B2A5B]/20 sm:p-5">
                <Image src="/ikdrive-landing.png" alt="IKDrive Staff Shuttle mobile app Home screen" width={354} height={720} className="mx-auto h-auto max-h-[680px] w-auto max-w-full object-contain" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#dfe7f1] bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10 lg:py-24"><div>
            <p className="section-kicker">Stay ready to ride</p>
            <h2 className="section-heading">Your reservation, right in the app.</h2>
            <p className="mt-5 max-w-md leading-7 text-[#61728a]">View your current reservation, boarding pass, and QR check-in details from IKDrive.</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl"><p className="section-kicker">Simple by design</p><h2 className="section-heading">From reservation to boarding, without the guesswork.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, description]) => <article key={number} className="rounded-2xl border border-[#dfe7f1] bg-white p-6 shadow-sm"><span className="text-sm font-bold text-[#3476c5]">{number}</span><h3 className="mt-10 text-xl font-bold text-[#0B2A5B]">{title}</h3><p className="mt-3 leading-7 text-[#61728a]">{description}</p></article>)}
          </div>
        </section>

        <section className="border-y border-[#dfe7f1] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="max-w-2xl"><p className="section-kicker">Everything in one place</p><h2 className="section-heading">A smoother commute starts with IKDrive.</h2></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{features.map(([title, description], index) => <article key={title} className="rounded-2xl border border-[#dfe7f1] bg-[#f9fbfd] p-6"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7f0fa] text-lg font-bold text-[#0B2A5B]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-6 text-lg font-bold text-[#0B2A5B]">{title}</h3><p className="mt-2 leading-7 text-[#61728a]">{description}</p></article>)}</div></div>
        </section>

        <section id="download" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="overflow-hidden rounded-[2rem] bg-[#0B2A5B] px-7 py-12 text-white shadow-xl shadow-[#0B2A5B]/15 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a8c9ec]">Your commute, in your hands</p><h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Ready for a simpler staff journey?</h2><p className="mt-4 max-w-xl leading-7 text-blue-100">Download IKDrive to reserve your seat and keep your boarding pass close at hand.</p></div><div className="mt-9 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col"><a href={ANDROID_DOWNLOAD_URL} className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-[#0B2A5B] transition-colors hover:bg-[#edf5fd]"><DownloadIcon /> Android · Available now</a><span className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-4 font-semibold text-blue-100" aria-label="iOS app coming soon">iOS · Coming soon</span></div></div></section>
      </main>

      <footer className="border-t border-[#dfe7f1] bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-10"><div><p className="text-lg font-bold text-[#0B2A5B]">IKDrive</p><p className="mt-1 text-sm text-[#61728a]">Staff bus reservations, made simple.</p></div><p className="text-sm text-[#718198]">© 2026 IKDrive. All rights reserved.</p></div></footer>
    </div>
  );
}
