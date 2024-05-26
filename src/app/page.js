import About from "@/components/About/About";
import ContactUs from "@/components/ContactUs/ContactUs";
import Hero from "@/components/Hero/Hero";
import HomeMenu from "@/components/HomeMenu/HomeMenu";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <About />
      <ContactUs />
    </>
  );
}
