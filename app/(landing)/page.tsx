import Categories from "./components/home/categories";
import HeroSection from "./components/home/hero";
import ProductsSection from "./components/home/products";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Categories />
      <ProductsSection />
      </main>
  )
}