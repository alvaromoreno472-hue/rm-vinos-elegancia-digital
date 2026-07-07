import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, ShoppingBag, Menu, X } from "lucide-react";
import logoAsset from "@/assets/rm-logo.png.asset.json";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/historia", label: "Historia" },
  { to: "/vinos", label: "Vinos" },
  { to: "/tienda", label: "Tienda" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-wine/95 backdrop-blur-md shadow-lg"
          : "bg-wine"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8 md:py-5">
        <Link to="/" className="flex items-center gap-3" aria-label="Inicio">
          <img
            src={logoAsset.url}
            alt="Ricardo Moreno Vinos con Historia"
            className="h-11 w-auto object-contain md:h-12"
            width={480}
            height={320}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-gold" }}
              inactiveProps={{ className: "text-cream/85 hover:text-gold" }}
              className="text-[0.78rem] uppercase tracking-[0.22em] font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="https://instagram.com/rmvinosconhistoria"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @rmvinosconhistoria"
            className="flex h-10 w-10 items-center justify-center rounded-full text-cream/85 transition-colors hover:bg-cream/10 hover:text-gold"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <Link
            to="/tienda"
            aria-label="Ir a la tienda"
            className="flex h-10 w-10 items-center justify-center rounded-full text-cream/85 transition-colors hover:bg-cream/10 hover:text-gold"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-cream lg:hidden"
          >
            {open ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-wine-deep">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-gold" }}
                inactiveProps={{ className: "text-cream/85" }}
                className="border-b border-gold/10 py-4 text-sm uppercase tracking-[0.22em] last:border-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}