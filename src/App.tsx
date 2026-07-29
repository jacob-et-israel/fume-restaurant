import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Story from './components/sections/Story';
import Chef from './components/sections/Chef';
import SignatureDish from './components/sections/SignatureDish';
import Menu from './components/sections/Menu';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Reservation from './components/sections/Reservation';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ChatAssistant from './components/ChatAssistant';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-brand/30 relative">
      {/* Cinematic Film Grain Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Story />
        <Chef />
        <SignatureDish />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
}

