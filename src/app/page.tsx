import Articles from "@/components/Articles";
import BestSellers from "@/components/BestSellers";
import Collection from "@/components/Collection";
import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Collection />
      <BestSellers />
      <Articles />
      <Customers />
      <Footer />
    </main>
  );
}
