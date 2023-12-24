// Product properties
export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

// @/components
// Navbar
export type NavBarProps = {
  products: Product[] | null;
};
// ItemCard
export type ItemCardProps = {
  product: Product;
  type?: string;
};
// ItemRow
export type ItemRowProps = { title: string; products: Product[] };
// PageLayout
export type PageLayoutProps = { children: JSX.Element; className?: string };
// SelectQuality
export type SelectQuantityProps = {
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  stockAvailable: number | undefined;
};

// @/pages
// HomePage
export type HomePageProps = { products: Product[] | null };
