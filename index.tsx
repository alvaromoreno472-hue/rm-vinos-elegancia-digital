import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · RM Vinos con Historia" },
      {
        name: "description",
        content:
          "Ponte en contacto con nosotros. Visitas guiadas, catas, pedidos y colaboraciones. La Rioja, España.",
      },
      { property: "og:title", content: "Contacto · RM Vinos" },
      { property: "og:description", content: "Ponte en contacto con la bodega." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

const schema = z.object({
  name: z.string().trim().min(2, "Introduce tu nombre").max(80),
  email: z.string().trim().email("Email no válido").max(160),
  message: z.string().trim().min(10, "Cuéntanos un poco más").max(1500),
});

function Contacto() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      setStatus("err");
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <>
      <section className="border-b border-border/60 bg-cream-warm">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-28">
          <p className="eyebrow">Contacto</p>
          <h1 className="mt-4 font-display text-5xl text-wine-deep md:text-6xl">Escríbenos</h1>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Visitas guiadas, catas, pedidos personalizados o cualquier consulta: estamos a tu
            disposición.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs uppercase tracking-[0.22em] text-wine"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                required
                maxLength={80}
                className="w-full border border-border bg-transparent px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-wine"
              />
              {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs uppercase tracking-[0.22em] text-wine"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={160}
                className="w-full border border-border bg-transparent px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-wine"
              />
              {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs uppercase tracking-[0.22em] text-wine"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                maxLength={1500}
                className="w-full resize-none border border-border bg-transparent px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-wine"
              />
              {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="border border-wine bg-wine px-8 py-4 text-xs font-medium uppercase tracking-[0.24em] text-cream transition-colors hover:bg-wine-deep"
            >
              Enviar mensaje
            </button>
            {status === "ok" && (
              <p className="text-sm text-wine">
                Gracias por escribirnos. Te responderemos lo antes posible.
              </p>
            )}
          </form>

          <aside className="space-y-8">
            <div>
              <p className="eyebrow">Datos de contacto</p>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <span className="text-foreground/85">
                    Calle Ferial, 15, 2º A
                    <br />
                    19002 Guadalajara, España
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <a href="tel:+34605990031" className="text-foreground/85 hover:text-wine">
                    +34 605 99 00 31
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <a
                    href="mailto:rmoreno@losvinosconhistoria.com"
                    className="text-foreground/85 hover:text-wine"
                  >
                    rmoreno@losvinosconhistoria.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <a
                    href="https://instagram.com/rmvinosconhistoria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/85 hover:text-wine"
                  >
                    @rmvinosconhistoria
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow">Horario</p>
              <p className="mt-4 text-sm text-foreground/85">
                Lunes a viernes · 10:00 – 18:00
                <br />
                Visitas guiadas con cita previa
              </p>
            </div>
          </aside>
        </div>

        {/* Map */}
        <div className="mt-20 aspect-[16/9] w-full overflow-hidden border border-border">
          <iframe
            title="Ubicación de la bodega"
            src="https://www.google.com/maps?q=La+Rioja+Spain+winery&output=embed"
            loading="lazy"
            className="h-full w-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
