export type Product = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  category: "ROOH";
};

export const products: Product[] = [
  {
    id: "rooh-aqua",
    name: "ROOH",
    subtitle: "The Aqua Elixir",
    image: "/perfumes/rooh.png",
    category: "ROOH",
  },
];