// import Image from "next/image";
import Script from "next/script";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Copyright from "@/components/copyright";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
     
      <Hero />

      <Portfolio />

      <About />

      <Contact />

      <Footer />

      <Copyright />


      {/* Bootstrap core JS */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      {/* Core theme JS */}
      <Script src="/JS/scripts.js" />
    </>
  );
}
