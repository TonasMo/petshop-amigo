import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "🛁",
    title: "Banho & Tosa",
    description:
      "Higiene completa com produtos hipoalergênicos e tosadores especializados em cada raça.",
  },
  {
    icon: "🩺",
    title: "Consulta Veterinária",
    description:
      "Equipe veterinária disponível para check-ups, vacinação e emergências.",
  },
  {
    icon: "🏨",
    title: "Hotel para Pets",
    description:
      "Hospedagem confortável e monitorada para quando você precisar viajar.",
  },
  {
    icon: "🦴",
    title: "Loja & Acessórios",
    description:
      "Ração, brinquedos e acessórios das melhores marcas para todos os portes.",
  },
];

const stats = [
  { value: "12+", label: "Anos de experiência" },
  { value: "8.000+", label: "Pets atendidos" },
  { value: "15", label: "Profissionais especializados" },
  { value: "4.9/5", label: "Avaliação dos clientes" },
];

const testimonials = [
  {
    quote:
      "O Thor sempre volta feliz do banho e tosa. Equipe super atenciosa e cuidadosa com ele.",
    author: "Marina Silva",
    pet: "tutora do Thor 🐕",
  },
  {
    quote:
      "Levei a Mimi para o hotel em uma viagem e recebi fotos diárias. Não tive uma preocupação sequer.",
    author: "Carlos Andrade",
    pet: "tutor da Mimi 🐈",
  },
  {
    quote:
      "Atendimento veterinário rápido em uma emergência no fim de semana. Salvaram meu Bidu.",
    author: "Fernanda Costa",
    pet: "tutora do Bidu 🐕",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/[.06] bg-white/80 backdrop-blur dark:border-white/[.08] dark:bg-black/80">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <span className="flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            <span aria-hidden>🐾</span> PetShop Amigo
          </span>
          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
            <a href="#servicos" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Sobre
            </a>
            <a href="#depoimentos" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Depoimentos
            </a>
            <a href="#localizacao" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Localização
            </a>
            <a href="#contato" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Contato
            </a>
          </nav>
          <Link
            href="#contato"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Agende agora
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-black">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-24 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-400">
              🐾 Cuidado e carinho para o seu melhor amigo
            </span>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
              Seu pet merece o melhor cuidado
            </h1>
            <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Banho, tosa, atendimento veterinário, hotel e uma loja completa —
              tudo em um só lugar, com quem trata seu pet como parte da
              família.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contato"
                className="flex h-12 items-center justify-center rounded-full bg-orange-500 px-8 text-base font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Agendar horário
              </Link>
              <a
                href="#servicos"
                className="flex h-12 items-center justify-center rounded-full border border-black/[.08] px-8 text-base font-semibold text-zinc-900 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-white/[.06]"
              >
                Ver serviços
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <span className="text-amber-500">★★★★★</span>
              4.9/5 com base em mais de 1.200 avaliações
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-black/[.06] bg-zinc-50 dark:border-white/[.08] dark:bg-zinc-950">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 py-12 text-center sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                  {stat.value}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Nossos serviços
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Tudo o que seu pet precisa, com uma equipe apaixonada por
              animais.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col gap-3 rounded-2xl border border-black/[.06] p-6 transition-shadow hover:shadow-lg dark:border-white/[.08]"
              >
                <span className="text-4xl" aria-hidden>
                  {service.icon}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {service.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section
          id="sobre"
          className="border-t border-black/[.06] bg-zinc-50 dark:border-white/[.08] dark:bg-zinc-950"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Por que escolher a PetShop Amigo?
              </h2>
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Há mais de 12 anos cuidando de cães, gatos e outros pets com
                estrutura própria, profissionais certificados e muito amor
                pelos animais.
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-zinc-700 dark:text-zinc-300">
                <li className="flex items-center gap-3">
                  <span className="text-orange-500">✓</span> Profissionais
                  certificados e experientes
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500">✓</span> Produtos e
                  equipamentos de alta qualidade
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500">✓</span> Atendimento
                  humanizado, do seu jeito
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500">✓</span> Estrutura segura
                  e monitorada
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-3xl bg-gradient-to-br from-orange-200 to-amber-100 p-4 dark:from-orange-500/20 dark:to-amber-500/10">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80"
                  alt="Cão feliz cuidado pela PetShop Amigo"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80"
                  alt="Gato feliz cuidado pela PetShop Amigo"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              O que os tutores dizem
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="flex flex-col gap-4 rounded-2xl border border-black/[.06] p-6 dark:border-white/[.08]"
              >
                <span className="text-amber-500">★★★★★</span>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {testimonial.pet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Localização */}
        <section
          id="localizacao"
          className="border-t border-black/[.06] bg-zinc-50 dark:border-white/[.08] dark:bg-zinc-950"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Onde estamos
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Venha nos visitar. Estamos localizados no coração de Lisboa.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-black/[.06] shadow-lg dark:border-white/[.08]">
              <iframe
                title="Localização da PetShop Amigo no Google Maps"
                src="https://www.google.com/maps?q=Rua+dos+Animais,+123,+Lisboa&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
              📍 Rua dos Animais, 123 — Lisboa
            </p>
          </div>
        </section>

        {/* CTA */}
        <section id="contato" className="mx-auto w-full max-w-6xl px-6 pb-24">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-orange-500 px-6 py-16 text-center">
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto para dar ao seu pet o cuidado que ele merece?
            </h2>
            <p className="max-w-lg text-orange-50">
              Agende um horário e conheça de perto a nossa estrutura.
            </p>
            <a
              href="tel:+351960000000"
              className="flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-orange-600 transition-colors hover:bg-orange-50"
            >
              📞 +351 960 000 000
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/[.06] dark:border-white/[.08]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50">
            <span aria-hidden>🐾</span> PetShop Amigo
          </span>
          <p>Rua dos Animais, 123 — Lisboa</p>
          <p>&copy; {new Date().getFullYear()} PetShop Amigo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
