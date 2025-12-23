import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const Index = () => {
  return (
    <>
      <SEO />
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <HowItWorks />
        <Categories />
        <Trust />
        <FAQ />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
};

export default Index;
