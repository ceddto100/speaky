import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AgentCatalog from "../components/AgentCatalog";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <AgentCatalog />
      <Footer />
    </main>
  );
}
