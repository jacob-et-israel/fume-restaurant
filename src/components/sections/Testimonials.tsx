import { motion } from 'motion/react';

const reviews = [
  {
    name: "Sophie T.",
    date: "Il y a 2 semaines",
    text: "Une maîtrise parfaite des cuissons au feu de bois. Chaque bouchée est une découverte inattendue, complexe et d'une justesse absolue. Le pigeonneau est tout simplement inoubliable.",
  },
  {
    name: "Laurent M.",
    date: "Il y a 1 mois",
    text: "Le service est d'une élégance rare : présent mais invisible, attentionné sans être obséquieux. Les accords mets et vins proposés par le sommelier ont sublimé notre dîner du début à la fin.",
  },
  {
    name: "Éléonore D.",
    date: "Il y a 2 mois",
    text: "L'ambiance tamisée et le ballet silencieux de la brigade créent une atmosphère hors du temps. On s'y sent privilégié, déconnecté du tumulte extérieur. Une véritable parenthèse enchantée.",
  },
  {
    name: "Marc & Camille",
    date: "Il y a 3 mois",
    text: "Au-delà de l'assiette qui frise la perfection, c'est la passion et la rigueur de toute l'équipe qui forcent le respect. Une grande table portée par des artisans d'une rare exigence.",
  }
];

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-brand">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 border-b border-neutral-800/50 overflow-hidden bg-neutral-900/30">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Header & Global Rating */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:w-1/3 sticky top-32"
          >
            <div className="mb-8">
              <span className="text-brand uppercase tracking-[0.2em] text-xs font-serif">Livre d'or</span>
              <div className="w-12 h-px bg-brand mt-4"></div>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Ils ont vécu <br/>
              <span className="italic text-neutral-400">l'expérience.</span>
            </h2>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="font-serif text-5xl text-neutral-100">4.9</span>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">Sur 248 avis</span>
                </div>
              </div>
              <p className="text-sm text-neutral-400 font-light mt-4">
                Retours authentiques de nos convives suite à leur dégustation.
              </p>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-900/20 backdrop-blur-sm hover:bg-neutral-900/60 transition-all duration-700 p-8 flex flex-col hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                
                <div className="flex gap-1 mb-6">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                
                <p className="text-neutral-300 font-light leading-relaxed mb-8 flex-grow text-sm md:text-base italic">
                  "{review.text}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-neutral-800/50 flex justify-between items-end">
                  <span className="font-serif text-neutral-200 tracking-wide">{review.name}</span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
