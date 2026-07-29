import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 border-b border-neutral-800/50 overflow-hidden bg-neutral-950">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-neutral-900/30 to-transparent pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-20 items-center">
        
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-serif">Nous trouver</span>
            <div className="w-12 h-px bg-[#D4AF37] mt-1"></div>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-12">
            Accès & <span className="italic text-neutral-400">Contact</span>
          </h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="uppercase tracking-widest text-xs font-light text-neutral-500 mb-3">Adresse</h3>
              <p className="font-serif text-xl md:text-2xl text-neutral-200 font-light leading-relaxed">
                12 Avenue Montaigne<br/>
                75008 Paris, France
              </p>
            </div>
            
            <div>
              <h3 className="uppercase tracking-widest text-xs font-light text-neutral-500 mb-3">Horaires</h3>
              <p className="font-serif text-xl md:text-2xl text-neutral-200 font-light leading-relaxed">
                Du Mardi au Samedi<br/>
                19h30 — 00h00
              </p>
            </div>
            
            <div>
              <h3 className="uppercase tracking-widest text-xs font-light text-neutral-500 mb-3">Contact</h3>
              <p className="font-serif text-xl md:text-2xl text-neutral-200 font-light leading-relaxed">
                +33 (0)1 42 56 78 90<br/>
                <a href="mailto:contact@fume-restaurant.com" className="hover:text-[#D4AF37] transition-colors duration-300">
                  contact@fume-restaurant.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-sm overflow-hidden group"
        >
          {/* Overlay for styling */}
          <div className="absolute inset-0 bg-neutral-950/40 z-10 transition-colors duration-700 group-hover:bg-neutral-950/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10 opacity-60"></div>
          
          {/* Map Image (Grayscale Aerial Paris) */}
          <img 
            src="https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&q=80&w=2000" 
            alt="Carte de l'emplacement" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 contrast-125 transition-transform duration-[2s] group-hover:scale-105"
          />
          
          {/* Marker Container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
              className="relative"
            >
              {/* Glowing effect around marker */}
              <div className="absolute inset-0 bg-[#D4AF37] blur-[15px] opacity-40 rounded-full scale-150"></div>
              
              {/* Gold Marker SVG */}
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-2xl">
                <path d="M12 21C16 17.3 19 13.8 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 13.8 8 17.3 12 21Z" fill="#D4AF37" stroke="#111" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3.5" fill="#111" />
              </svg>
            </motion.div>
            
            {/* Shadow */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="w-8 h-2 bg-black/60 rounded-[100%] blur-[2px] mt-1"
            />
            
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 1, duration: 0.5 }}
               className="mt-4 px-5 py-2.5 bg-neutral-950/90 backdrop-blur-md border border-[#D4AF37]/30 text-white text-xs uppercase tracking-widest font-light rounded-sm shadow-2xl"
            >
              Fumé
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
