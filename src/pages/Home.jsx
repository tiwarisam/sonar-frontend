import Hero from "../sections/Hero";
import AboutCompany from "../sections/AboutCompany";
import StatsSection from "../components/StatsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CategorySection from "../components/CategorySection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <AboutCompany />
      <StatsSection />
      <WhyChooseUs />
      
    </>
  );
}