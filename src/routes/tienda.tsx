import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { WINES } from "@/lib/wines";

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: "Tienda · Comprar vino online · RM Vinos" },
      { name: "description", content: "Compra online nuestros vinos con envío a toda España. Colección de tintos, blancos, rosados y reservas de la D.O.Ca. Rioja." },
      { property: "og:title", content: "Tienda · RM Vinos" },
      { property: "og:description", content: "Compra online con envío a toda España." },
      { property: "og:url", content: "/tienda" },
    ],
    links: [{ rel: "canonical", href: "/tienda" }],
  }),
  component: Tienda,
});

function Tienda() {
  return (
    <>
      <section className="border-b border-border/60 bg-cream-warm">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-28">
          <p className="eyebrow">Tienda online</p>
          <h1 className="mt-4 font-display text-5xl text-wine-deep md:text-6xl">Compra online</h1>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Envío a toda España en 24/48h. Gastos gratuitos a partir de 60€.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-center justify-between border-b border-border pb-4">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{WINES.length} productos</p>
          <button type="button" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-wine">
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            Carrito (0)
          </button>
        </div>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {WINES.map((wine) => (
            <article key={wine.slug} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-wine-deep">
                <img
                  src={wine.image}
                  alt={`Botella ${wine.name}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={900}
                  height={1200}
                />
                <span className="absolute left-4 top-4 bg-gold px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-wine-deep">
                  {wine.category}
                </span>
              </div>
              <div className="mt-5 flex flex-1 flex-col text-center">
                <span className="eyebrow">{wine.do}</span>
                <h3 className="mt-2 font-display text-2xl text-wine-deep">
                  {wine.name} · {wine.vintage}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{wine.grape}</p>
                <p className="mt-3 font-display text-xl text-wine">{wine.price.toFixed(2)} €</p>
                <button
                  type="button"
                  className="mt-5 border border-wine bg-wine px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-cream transition-colors hover:bg-wine-deep"
                >
                  Añadir al carrito
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border border-dashed border-gold/60 bg-cream-warm/60 p-8 text-center">
          <p className="eyebrow">Próximamente</p>
          <p className="mt-3 text-sm text-muted-foreground">
            El carrito, el checkout con pagos y los emails de confirmación se activarán al conectar la tienda con Lovable Cloud y Stripe. Este catálogo ya está listo para hacerse funcional.
          </p>
        </div>
      </section>
    </>
  );
}