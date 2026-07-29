import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import chefImage from '../../assets/images/chef_portrait_1785278675485.jpg';

export default function Chef() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="chef" className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 border-b border-neutral-800/50 overflow-hidden bg-neutral-950">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-neutral-900/30 to-transparent pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20 md:mb-32"
        >
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutral-200 leading-snug max-w-4xl mx-auto italic font-light">
            « La véritable gastronomie est un dialogue silencieux entre la nature et l'artisan, où le produit dicte sa propre perfection. »
          </p>
          <div className="w-12 h-px bg-brand mx-auto mt-8 md:mt-12"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-center">
          <div ref={ref} className="lg:col-span-5 relative h-[60vh] md:h-[70vh] lg:h-[85vh] w-full rounded-sm overflow-hidden group">
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <img 
                src={chefImage} 
                alt="Portrait du Chef Alexandre Dubois" 
                className="w-full h-full object-cover origin-center transition-transform duration-[20s] group-hover:scale-105 ease-out grayscale-[0.2]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-neutral-950/30 mix-blend-multiply transition-colors duration-700 group-hover:bg-transparent" />
            <div className="absolute inset-0 border border-neutral-800/50 rounded-sm pointer-events-none" />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="mb-10">
              <span className="text-brand uppercase tracking-[0.2em] text-xs font-serif">Le Chef</span>
              <div className="w-12 h-px bg-brand mt-4"></div>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Alexandre <span className="italic text-neutral-400">Dubois</span>
            </h2>
            
            <div className="space-y-6 text-neutral-400 font-light text-base md:text-lg leading-relaxed">
              <p>
                Originaire des terres rudes et généreuses de l'Aubrac, Alexandre Dubois s'est forgé une identité culinaire où le superflu n'a pas sa place. Formé auprès des plus grands maîtres de la gastronomie française, il a voyagé à travers le monde pour perfectionner son art, avant de revenir à l'essentiel : le produit dans sa vérité la plus nue.
              </p>
              <p>
                Pour lui, cuisiner n'est pas une simple transformation, c'est un acte de respect. Sa vision s'articule autour d'une sélection intransigeante des matières premières. Il tisse des liens étroits avec des éleveurs, pêcheurs et maraîchers qui partagent son exigence et son éthique.
              </p>
              <p>
                Que ce soit à travers la maîtrise hypnotique du feu de bois ou la précision d'une découpe, chaque geste du Chef Dubois est pensé pour exalter l'âme de l'ingrédient. Une démarche radicale et poétique, couronnée par les plus hautes distinctions, qui invite chaque convive à redécouvrir l'essence même du goût.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
