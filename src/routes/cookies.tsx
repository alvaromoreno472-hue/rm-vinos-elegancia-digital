import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies · RM Vinos con Historia" },
      {
        name: "description",
        content:
          "Información sobre el uso de cookies en el sitio web de RM Vinos con Historia, S.L.",
      },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <p className="eyebrow">Cookies</p>
      <h1 className="mt-4 font-display text-4xl text-wine-deep md:text-5xl">Política de cookies</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-foreground/85">
        <p>
          Este sitio utiliza únicamente cookies técnicas necesarias para su funcionamiento y para
          recordar tu verificación de mayoría de edad durante la sesión. No utilizamos cookies de
          análisis ni publicitarias sin tu consentimiento expreso.
        </p>
        <p>
          Puedes configurar tu navegador para bloquear o eliminar las cookies en cualquier momento.
        </p>
      </div>
    </div>
  ),
});
