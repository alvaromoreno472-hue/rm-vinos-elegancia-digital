import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-vineyard.jpg";
import grapesImg from "@/assets/grapes.jpg";
import { WINES, FEATURED_SLUGS } from "@/lib/wines";
import { WineCard } from "@/components/wine-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ricardo Moreno · Vinos con Historia | Bodega familiar española" },
      { name: "description", content: "Vinos elaborados con tradición en el corazón de La Rioja. Descubre nuestra colección de tintos, blancos, rosados y reservas." },
      { property: "og:title", content: "Ricardo Moreno · Vinos con Historia" },
      { property: "og:description", content: "Bodega familiar española · Vinos con carácter y tradición." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const featured = FEATURED_SLUGS.map((slug) => WINES.find((w) => w.slug === slug)!).filter(Boolean);
  return (
    <>
      <section className="relative isolate overflow-hidden bg-wine-deep text-cream">
        <img
          src={heroImg}
          alt="Viñedos al atardecer"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wine-deep/80 via-wine-deep/50 to-wine-deep" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
          <p className="eyebrow text-gold">Bodega familiar · La Rioja</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
            Cada botella,<br />
            <em className="text-gold not-italic italic">una historia</em> descorchada
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
            Elaboramos vinos con carácter, respeto por la tierra y una tradición transmitida generación tras generación.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/historia"
              className="inline-flex items-center justify-center gap-2 border border-gold bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.24em] text-wine-deep transition-colors hover:bg-gold-soft"
            >
              Descubre nuestra historia
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/vinos"
              className="inline-flex items-center justify-center gap-2 border border-cream/40 px-8 py-4 text-xs font-medium uppercase tracking-[0.24em] text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Ver nuestros vinos
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-cream-warm">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="eyebrow">Vinos con Historia</p>
          <p className="mt-8 font-display text-3xl leading-relaxed text-wine-deep md:text-4xl">
            «El vino es la memoria líquida de la tierra que lo vio nacer. Nosotros solo somos sus guardianes.»
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.24em] text-muted-foreground">— Ricardo Moreno, fundador</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="eyebrow">Selección</p>
          <h2 className="mt-4 font-display text-4xl text-wine-deep md:text-5xl">Nuestros vinos destacados</h2>
          <div className="mt-5 h-px w-16 bg-gold" />
        </div>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((wine) => (
            <WineCard key={wine.slug} wine={wine} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/vinos"
            className="inline-flex items-center gap-2 border-b border-wine pb-1 text-xs font-medium uppercase tracking-[0.24em] text-wine hover:border-gold hover:text-gold"
          >
            Ver la colección completa
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <section className="bg-wine text-cream">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
          <div className="relative aspect-[4/5] lg:aspect-auto">
            <img
              src={grapesImg}
              alt="Racimo de uvas maduras"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={1500}
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:py-24">
            <p className="eyebrow text-gold">Del viñedo a la copa</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Tradición que se cultiva a mano
            </h2>
            <div className="mt-5 h-px w-16 bg-gold" />
            <p className="mt-8 text-base leading-relaxed text-cream/80">
              Vendimiamos a mano, seleccionando racimo a racimo, y elaboramos en pequeñas partidas para preservar el carácter único de cada añada. Nuestros viñedos, cuidados con prácticas sostenibles, dan vinos honestos, elegantes y con alma.
            </p>
            <Link
              to="/historia"
              className="mt-10 inline-flex w-fit items-center gap-2 border border-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-wine-deep"
            >
              Nuestro proceso
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 text-center">
          <p className="eyebrow">Reconocimientos</p>
          <h2 className="mt-4 font-display text-4xl text-wine-deep">Lo que dicen de nosotros</h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { text: "Un tinto elegante, con una crianza medida y un final memorable. Rioja en su expresión más honesta.", author: "Guía Peñín", meta: "92 puntos · Legado Reserva" },
            { text: "Bodega familiar comprometida con el terruño. Sus vinos rebosan carácter y personalidad.", author: "Vinos y Restaurantes", meta: "Bodega recomendada" },
            { text: "Cada añada mejora la anterior. Trabajo minucioso desde el viñedo hasta la copa.", author: "Sarah Jane Evans MW", meta: "Master of Wine" },
          ].map((t) => (
            <figure key={t.author} className="border-t border-gold/40 pt-8">
              <blockquote className="font-display text-xl leading-relaxed text-wine-deep">
                «{t.text}»
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-medium text-wine">{t.author}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-cream-warm">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center">
          <Instagram className="h-10 w-10 text-gold" strokeWidth={1.5} />
          <p className="eyebrow mt-6">Síguenos en Instagram</p>
          <h2 className="mt-4 font-display text-4xl text-wine-deep md:text-5xl">@rmvinosconhistoria</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Vive con nosotros la vendimia, los rincones de la bodega y todo lo que ocurre entre cepa y cepa.
          </p>
          <a
            href="https://instagram.com/rmvinosconhistoria"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 border border-wine px-8 py-4 text-xs font-medium uppercase tracking-[0.24em] text-wine transition-colors hover:bg-wine hover:text-cream"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
            Seguir en Instagram
          </a>
        </div>
      </section>
    </>
  );
}