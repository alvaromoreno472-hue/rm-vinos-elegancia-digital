import tinto from "@/assets/bottle-tinto.jpg";
import blanco from "@/assets/bottle-blanco.jpg";
import rosado from "@/assets/bottle-rosado.jpg";
import reserva from "@/assets/bottle-reserva.jpg";

export type WineCategory = "Tinto" | "Blanco" | "Rosado" | "Reserva";

export interface Wine {
  slug: string;
  name: string;
  category: WineCategory;
  vintage: number;
  grape: string;
  do: string;
  abv: string;
  price: number;
  tasting: string;
  pairing: string;
  image: string;
}

export const WINES: Wine[] = [
  {
    slug: "herencia-tempranillo",
    name: "Herencia",
    category: "Tinto",
    vintage: 2021,
    grape: "Tempranillo 100%",
    do: "D.O.Ca. Rioja",
    abv: "14% vol.",
    price: 18.5,
    tasting: "Rojo picota intenso. Nariz de fruta roja madura, especias dulces y sutiles notas balsámicas. En boca es amable, con taninos pulidos y un final largo.",
    pairing: "Cordero asado, guisos tradicionales, quesos curados.",
    image: tinto,
  },
  {
    slug: "raiz-crianza",
    name: "Raíz Crianza",
    category: "Tinto",
    vintage: 2020,
    grape: "Tempranillo · Graciano",
    do: "D.O.Ca. Rioja",
    abv: "14,5% vol.",
    price: 24.9,
    tasting: "12 meses en barrica de roble francés. Frutos negros, cacao, tabaco y una acidez viva. Estructura elegante y persistente.",
    pairing: "Carnes rojas a la brasa, caza menor, arroces melosos.",
    image: tinto,
  },
  {
    slug: "alba-blanco",
    name: "Alba",
    category: "Blanco",
    vintage: 2023,
    grape: "Viura · Malvasía",
    do: "D.O.Ca. Rioja",
    abv: "12,5% vol.",
    price: 15.0,
    tasting: "Amarillo pajizo con reflejos verdosos. Manzana verde, cítricos y flores blancas. Fresco, mineral y con una acidez vibrante.",
    pairing: "Mariscos, pescados a la plancha, ensaladas templadas.",
    image: blanco,
  },
  {
    slug: "aurora-rosado",
    name: "Aurora",
    category: "Rosado",
    vintage: 2023,
    grape: "Garnacha 100%",
    do: "D.O.Ca. Rioja",
    abv: "13% vol.",
    price: 14.5,
    tasting: "Color piel de cebolla. Fresa silvestre, granada y un toque cítrico. En boca es sedoso, con final goloso y refrescante.",
    pairing: "Cocina mediterránea, arroces, tapas frías.",
    image: rosado,
  },
  {
    slug: "legado-reserva",
    name: "Legado Reserva",
    category: "Reserva",
    vintage: 2017,
    grape: "Tempranillo · Mazuelo",
    do: "D.O.Ca. Rioja",
    abv: "14,5% vol.",
    price: 42.0,
    tasting: "24 meses en barrica y 24 en botella. Cereza madura, especias, cuero noble y notas de sotobosque. Elegante, largo, con taninos redondos.",
    pairing: "Chuletón, cordero lechal, quesos añejos.",
    image: reserva,
  },
  {
    slug: "vindicta-gran-reserva",
    name: "Vindicta Gran Reserva",
    category: "Reserva",
    vintage: 2015,
    grape: "Tempranillo selección",
    do: "D.O.Ca. Rioja",
    abv: "15% vol.",
    price: 68.0,
    tasting: "Producción limitada. Complejidad excepcional: frutos negros confitados, chocolate, tabaco, cuero. Estructura poderosa y elegante crianza.",
    pairing: "Carnes de caza, estofados nobles, quesos azules.",
    image: reserva,
  },
];

export const CATEGORIES: WineCategory[] = ["Tinto", "Blanco", "Rosado", "Reserva"];

export const FEATURED_SLUGS = ["herencia-tempranillo", "alba-blanco", "aurora-rosado", "legado-reserva"];