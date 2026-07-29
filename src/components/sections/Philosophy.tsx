import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 border-b border-neutral-800/50 overflow-hidden bg-neutral-950">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-10" />
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-3"
        >
          <span className="font-serif text-4xl text-neutral-500">01.</span>
          <div className="w-12 h-px bg-neutral-700 mt-4"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-9 space-y-12"
        >
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Nous cuisinons avec le <span className="text-brand italic">feu</span> & avec patience.<br/>
            Nous sublimons la matière dans sa plus simple vérité.
          </h2>
          
          <p className="text-neutral-400 font-light max-w-lg text-lg md:text-xl leading-relaxed">
            Notre approche est un retour à l'essentiel. Nous laissons la flamme révéler la délicatesse d'un produit brut, 
            sans artifice. Une quête perpétuelle d'équilibre entre la violence du feu et la subtilité des saveurs, 
            offrant une expérience intime, sincère et hors du temps.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

