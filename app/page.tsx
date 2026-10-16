import Link from "next/link";

const tools = [
  {
    href: "/calculadora",
    title: "Calculadora de Parcelas",
    description: "Simule juros, parcelas e o valor líquido recebido via Guru + Pagar.me",
    icon: (
      <svg className="w-6 h-6 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: "bg-gold/10 group-hover:bg-gold/20",
    border: "hover:border-line-active",
    badge: "text-gold-light bg-green-50",
  },
  {
    href: "/calculadora-ton",
    title: "Calculadora Maquineta TON",
    description: "Simule taxas da TON por plano (Super, Turbo, Max) em Pix, débito e crédito parcelado",
    icon: (
      <svg className="w-6 h-6 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    iconBg: "bg-gold/10 group-hover:bg-gold/20",
    border: "hover:border-line-active",
    badge: "text-gold-light bg-amber-50",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col min-h-[calc(100vh-3.5rem)]">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="eyebrow justify-center mb-4">Time Comercial</div>
        <h1 className="page-title text-3xl sm:text-4xl mb-3">Calculadora Comercial</h1>
        <p className="text-base text-ink-soft mb-6">Ferramentas para agilizar o dia a dia do time comercial</p>
        <div className="inline-block border border-line-active bg-surface px-6 py-3 rounded-xl">
          <p className="font-ui text-base font-bold uppercase tracking-wider text-gold-pale">Keep Calm And Bora Vender 🔥</p>
          <p className="text-sm text-ink-soft mt-0.5">Nosso time é foda!</p>
        </div>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="group">
            <div className={`bg-surface rounded-xl border border-line p-6 hover:-translate-y-0.5 transition-all duration-200 ${tool.border}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${tool.iconBg}`}>
                {tool.icon}
              </div>
              <h2 className="font-display text-lg font-bold uppercase tracking-tight text-ink mb-1">{tool.title}</h2>
              <p className="text-sm text-ink-soft">{tool.description}</p>
              <span className={`inline-block mt-4 text-xs font-medium px-2 py-1 rounded-full ${tool.badge}`}>
                Disponível
              </span>
            </div>
          </Link>
        ))}

        <div className="bg-surface rounded-xl border border-dashed border-line p-6 opacity-50 cursor-not-allowed">
          <div className="w-12 h-12 bg-surface-3 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h2 className="font-display text-lg font-bold uppercase tracking-tight text-ink-muted mb-1">Em breve</h2>
          <p className="text-sm text-ink-muted">Novas ferramentas serão adicionadas aqui</p>
        </div>
      </div>
    </div>
  );
}
