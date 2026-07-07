import { createFileRoute } from "@tanstack/react-router";
import cellarImg from "@/assets/cellar.jpg";
import grapesImg from "@/assets/grapes.jpg";
import heroImg from "@/assets/hero-vineyard.jpg";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Historia · Ricardo Moreno Vinos con Historia" },
      {
        name: "description",
        content:
          "Conoce la historia de Ricardo Moreno, Vinos Con Historia, S.L.: una empresa de Guadalajara nacida en 2025 con la pasión de acercar vinos con carácter a bares, tiendas y hogares.",
      },
      { property: "og:title", content: "Nuestra Historia · RM Vinos" },
      { property: "og:description", content: "Una empresa joven con pasión por el buen vino." },
      { property: "og:url", content: "/historia" },
    ],
    links: [{ rel: "canonical", href: "/historia" }],
  }),
  component: Historia,
});

const TIMELINE = [
  {
    year: "Marzo 2025",
    title: "Nace el proyecto",
    body: "Ricardo Moreno funda Ricardo Moreno, Vinos Con Historia, S.L. en Guadalajara, con una idea clara: acercar vinos con carácter a quienes saben apreciarlos.",
  },
  {
    year: "2025",
    title: "Selección de bodegas",
    body: "Empezamos a trabajar codo con codo con pequeños productores de distintas regiones de España, eligiendo cada referencia con cuidado y criterio propio.",
  },
  {
    year: "2025",
    title: "Distribución mayorista",
    body: "Iniciamos la distribución a bares, restaurantes y comercios, ganándonos la confianza de nuestros primeros clientes gracias al trato cercano y la calidad del catálogo.",
  },
  {
    year: "2026",
    title: "Venta directa online",
    body: "Abrimos esta tienda online para que cualquier persona pueda descubrir y comprar nuestra selección de vinos directamente, sin intermediarios.",
  },
  {
    year: "Hoy",
    title: "Hacia dónde vamos",
    body: "Seguimos creciendo: ampliamos catálogo, sumamos nuevas bodegas y cuidamos cada pedido como si fuera el primero.",
  },
];

function Historia() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-wine-deep text-cream">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wine-deep/70 to-wine-deep" />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center md:py-40">
          <p className="eyebrow text-gold">Nuestra historia</p>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-7xl">
            Una historia reciente,
            <br />
            una pasión de siempre
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80">
            Desde Guadalajara, seleccionamos y distribuimos vinos con carácter, acercando pequeñas
            bodegas españolas a bares, tiendas y hogares.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <div className="mb-16 text-center">
          <p className="eyebrow">Trayectoria</p>
          <h2 className="mt-4 font-display text-4xl text-wine-deep">Nuestro camino, paso a paso</h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
        </div>
        <ol className="relative border-l border-gold/40 pl-8 md:pl-12">
          {TIMELINE.map((item) => (
            <li key={item.year} className="relative mb-14 last:mb-0">
              <span
                className="absolute -left-[41px] md:-left-[49px] flex h-4 w-4 items-center justify-center rounded-full bg-gold ring-4 ring-cream"
                aria-hidden
              />
              <p className="font-display text-3xl text-wine">{item.year}</p>
              <h3 className="mt-1 font-display text-2xl text-wine-deep">{item.title}</h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Filosofía split */}
      <section className="bg-wine text-cream">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:py-28">
            <p className="eyebrow text-gold">Filosofía</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Elegimos con criterio</h2>
            <div className="mt-5 h-px w-16 bg-gold" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-cream/80">
              <p>
                No elaboramos vino: lo seleccionamos. Visitamos bodegas, catamos cada referencia y
                elegimos solo aquellas que tienen algo que contar.
              </p>
              <p>
                Trabajamos con pequeños y medianos productores de distintas regiones de España,
                priorizando la calidad y la autenticidad frente al volumen.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] lg:aspect-auto">
            <img
              src={grapesImg}
              alt="Selección de uva en la vendimia"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={1500}
            />
          </div>
        </div>
      </section>

      {/* Bodega */}
      <section className="bg-cream-warm">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/5] lg:order-1 lg:aspect-auto">
            <img
              src={cellarImg}
              alt="Almacén de vinos con temperatura controlada"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1067}
            />
          </div>
          <div className="order-1 flex flex-col justify-center px-8 py-20 text-wine-deep md:px-16 lg:order-2 lg:py-28">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Cuidado en cada paso</h2>
            <div className="mt-5 h-px w-16 bg-gold" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Almacenamos y transportamos cada botella en condiciones controladas de temperatura y
                humedad, para que llegue a tu mesa en las mismas condiciones que salió de la bodega.
              </p>
              <p>
                Ya seas un bar, una tienda o un particular, cuidamos cada pedido con la misma
                atención al detalle, desde la primera botella hasta la última.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cita fundador */}
      <section className="border-t border-border/60 bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="font-display text-3xl leading-relaxed text-wine-deep md:text-4xl">
            «No hacemos el vino, pero elegimos cada botella como si lo hubiéramos hecho nosotros.
            Esa es nuestra responsabilidad con quien confía en nosotros.»
          </p>
          <p className="mt-8 eyebrow">Ricardo Moreno · Fundador</p>
        </div>
      </section>
    </>
  );
}

