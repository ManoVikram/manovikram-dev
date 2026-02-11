import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Work from "@/components/sections/work";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />

      <Work />

      <About />

      <Services />
    </main>
  )
}
