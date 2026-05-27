import './style.css'

const cards = ['Alpha', 'Beta', 'Gamma', 'Delta']

export default function ExamplePage() {
  return (
    <main className="app-shell">
      <div className="space-background" />

      <section className="relative z-10 mx-auto max-w-7xl">
        <nav className="flex flex-wrap items-center gap-4 px-5 py-4">
          <h1 className="text-2xl font-black tracking-tight text-sky-200">
            Cosmic Dashboard
          </h1>
          <button className="ml-auto rounded-full border border-white bg-black px-4 py-2 font-black text-white hover:bg-white hover:text-zinc-950">
            Action
          </button>
        </nav>

        <div className="grid gap-8 px-5 py-10 md:grid-cols-[1fr_360px]">
          <div>
            <h2 className="max-w-3xl text-5xl font-black leading-none tracking-tight sm:text-6xl">
              Build a quiet interface over moving stars.
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/70">
              Use white typography, black surfaces, pale-blue accents, and slow irregular star drift.
            </p>
          </div>

          <aside className="card-stack">
            {cards.map((card, index) => (
              <article className="stack-card" key={card}>
                <div className="mb-5 flex justify-between text-[10px] font-black uppercase tracking-[0.24em] text-white/50">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-4xl font-black leading-none">{card}</h3>
                <div className="card-details">
                  <p>Hidden details appear when the stack is hovered.</p>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </section>
    </main>
  )
}
