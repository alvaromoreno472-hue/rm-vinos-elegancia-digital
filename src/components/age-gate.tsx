import { useEffect, useState } from "react";
import logoAsset from "@/assets/rm-logo.png.asset.json";

const STORAGE_KEY = "rm-vinos-age-verified";

export function AgeGate() {
  const [hydrated, setHydrated] = useState(false);
  const [verified, setVerified] = useState(true);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      setVerified(sessionStorage.getItem(STORAGE_KEY) === "yes");
    } catch {
      setVerified(false);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.body.style.overflow = verified && !denied ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hydrated, verified, denied]);

  if (!hydrated || verified) return null;

  function accept() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "yes");
    } catch {
      /* ignore */
    }
    setVerified(true);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-wine-deep/95 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-sm border border-gold/30 bg-wine text-cream shadow-2xl">
        <div className="border-b border-gold/20 px-8 pt-10 pb-6 text-center">
          <img
            src={logoAsset.url}
            alt="Ricardo Moreno Vinos con Historia"
            className="mx-auto h-20 w-auto object-contain"
            width={480}
            height={320}
          />
        </div>
        <div className="px-8 py-8 text-center">
          {denied ? (
            <>
              <h2 id="age-gate-title" className="font-display text-3xl">
                Lo sentimos
              </h2>
              <div className="mx-auto mt-3 h-px w-12 bg-gold" />
              <p className="mt-5 text-sm leading-relaxed text-cream/80">
                Debes ser mayor de edad para acceder a este sitio. La venta de bebidas alcohólicas está restringida a personas mayores de 18 años.
              </p>
            </>
          ) : (
            <>
              <p className="eyebrow text-gold">Verificación de edad</p>
              <h2 id="age-gate-title" className="mt-4 font-display text-3xl leading-tight">
                ¿Eres mayor de 18 años?
              </h2>
              <div className="mx-auto mt-4 h-px w-12 bg-gold" />
              <p className="mt-6 text-sm leading-relaxed text-cream/80">
                Para acceder a nuestro sitio es necesario que confirmes tu mayoría de edad. El consumo de alcohol está prohibido a menores de 18 años.
              </p>
              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
                <button
                  onClick={() => setDenied(true)}
                  className="inline-flex items-center justify-center rounded-none border border-gold/40 px-6 py-3 text-sm uppercase tracking-[0.2em] text-cream/80 transition-colors hover:bg-cream/5"
                >
                  Soy menor
                </button>
                <button
                  onClick={accept}
                  className="inline-flex items-center justify-center rounded-none bg-gold px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-wine-deep transition-colors hover:bg-gold-soft"
                >
                  Sí, entrar
                </button>
              </div>
              <p className="mt-6 text-[0.65rem] uppercase tracking-[0.25em] text-cream/40">
                Bebe con moderación · Es tu responsabilidad
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}