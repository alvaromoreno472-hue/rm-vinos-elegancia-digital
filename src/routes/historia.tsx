import { createFileRoute } from "@tanstack/react-router";
import cellarImg from "@/assets/cellar.jpg";
import grapesImg from "@/assets/grapes.jpg";
import heroImg from "@/assets/hero-vineyard.jpg";

export const Route = createFileRoute("/historia")({
  head: () => ({
    meta: [
      { title: "Historia · Ricardo Moreno Vinos con Historia" },
      { name: "description", content: "Tres generaciones de tradición vinícola familiar en La Rioja. Descubre nuestra historia, filosofía y proceso de elaboración." },
      { property: "og:title", content: "Nuestra Historia · RM Vinos" },
      { property: "og:description", content: "Tres generaciones de tradición vinícola familiar." },
      { property: "og:url", content: "/historia" },
    ],
    links: [{ rel: "canonical", href: "/historia" }],
  }),
  component: Historia,
});

const TIMELINE = [
  { year: "1952", title: "Los orígenes", body: "El abuelo Ricardo planta las primeras cepas de Tempranillo en las laderas familiares. Nace una vocación." },
  { year: "1978", title: "La bodega familiar", body: "Se construye la primera bodega. Comienza la elaboración propia con vendimia manual y crianza en roble." },
  { year: "2001", title: "Nueva generación", body: "La segunda generación toma el relevo y moderniza los procesos sin renunciar a la tradición ni al carácter del terruño." },
  { year: "2018", title: "Vinos con Historia", body: "Se funda RM Vinos con Historia, S.L. con una filosofía clara: cada botella cuenta la historia de la tierra que la vio nacer." },
  { year: "Hoy", title: "El futuro", body: "Trabajamos con prácticas sostenibles, respetamos los ciclos de la naturaleza y elaboramos vinos honestos para las próximas generaciones." },
];

function Historia() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-wine-deep text-cream">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-wine-deep/70 to-wine-deep" />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center md:py-40">
          <p className="eyebrow text-gold">Nuestra historia</p>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-7xl">Tres generaciones,<br />una misma pasión</h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80">
            Desde 1952, nuestra familia ha dedicado su vida a la tierra, al viñedo y al arte de elaborar vinos que emocionan.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <div className="mb-16 text-center">
          <p className="eyebrow">Trayectoria</p>
          <h2 className="mt-4 font-display text-4xl text-wine-deep">Un camino de vendimias</h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
        </div>
        <ol className="relative border-l border-gold/40 pl-8 md:pl-12">
          {TIMELINE.map((item) => (
            <li key={item.year} className="relative mb-14 last:mb-0">
              <span className="absolute -left-[41px] md:-left-[49px] flex h-4 w-4 items-center justify-center rounded-full bg-gold ring-4 ring-cream" aria-hidden />
              <p className="font-display text-3xl text-wine">{item.year}</p>
              <h3 className="mt-1 font-display text-2xl text-wine-deep">{item.title}</h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Filosofía split */}
      <section className="bg-wine text-cream">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:py-28">
            <p className="eyebrow text-gold">Filosofía</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">El viñedo manda</h2>
            <div className="mt-5 h-px w-16 bg-gold" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-cream/80">
              <p>Creemos que un gran vino nace en el viñedo. Por eso trabajamos con prácticas respetuosas, tratamientos mínimos y una selección exhaustiva de la uva.</p>
              <p>Vendimiamos siempre a mano y elaboramos en pequeñas partidas. Cada añada expresa el carácter único del año, sin homogeneidad ni artificios.</p>
            </div>
          </div>
          <div className="relative aspect-[4/5] lg:aspect-auto">
            <img src={grapesImg} alt="Uvas en la vendimia" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1200} height={1500} />
          </div>
        </div>
      </section>

      {/* Bodega */}
      <section className="bg-cream-warm">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/5] lg:order-1 lg:aspect-auto">
            <img src={cellarImg} alt="Bodega de crianza" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1600} height={1067} />
          </div>
          <div className="order-1 flex flex-col justify-center px-8 py-20 text-wine-deep md:px-16 lg:order-2 lg:py-28">
            <p className="eyebrow">La bodega</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Tiempo y madera</h2>
            <div className="mt-5 h-px w-16 bg-gold" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>Nuestras crianzas descansan en barricas de roble francés y americano, en salas de temperatura y humedad controladas. El tiempo hace el resto.</p>
              <p>Cada vino sigue su propio ritmo. Escuchamos, catamos y esperamos hasta que la botella nos dice que está lista para descorcharse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cita fundador */}
      <section className="border-t border-border/60 bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="font-display text-3xl leading-relaxed text-wine-deep md:text-4xl">
            «Un vino no se hace, se cuida. Nosotros solo acompañamos a la uva en su camino a convertirse en memoria.»
          </p>
          <p className="mt-8 eyebrow">Ricardo Moreno · Fundador</p>
        </div>
      </section>
    </>
  );
}