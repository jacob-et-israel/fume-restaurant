import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import storyImage from '../../assets/images/our_story_chef_1785278563762.jpg';

export default function Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="story" className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 border-b border-neutral-800/50 overflow-hidden bg-neutral-900/30">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="mb-8">
              <span className="text-brand uppercase tracking-[0.2em] text-xs font-serif">Notre Histoire</span>
              <div className="w-12 h-px bg-brand mt-4"></div>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              L'art de sublimer <br/>
              <span className="italic text-neutral-400">l'éphémère.</span>
            </h2>
            
            <div className="space-y-6 text-neutral-400 font-light text-base md:text-lg leading-relaxed">
              <p>
                Né d'une passion ardente pour l'authenticité et le retour aux sources, Fumé n'est pas seulement un restaurant, c'est une quête sensorielle. Notre chef, artisan du goût, puise son inspiration dans la puissance brute du feu et la délicatesse des produits offerts par la nature.
              </p>
              <p>
                Chaque matin, nous sélectionnons les meilleurs ingrédients auprès de producteurs locaux passionnés. Nous respectons le rythme des saisons, non par contrainte, mais par conviction absolue que la terre offre ce qu'il y a de meilleur lorsqu'on sait l'écouter.
              </p>
              <p>
                Notre philosophie culinaire repose sur l'équilibre parfait entre tradition et modernité. Le feu de bois, élément central de notre cuisine, vient caresser, fumer ou saisir nos créations pour révéler des saveurs intenses et inattendues. Une expérience intime où chaque plat raconte une histoire, de la terre à votre assiette.
              </p>
            </div>
            
            <div className="mt-16">
              <div className="font-serif text-3xl text-neutral-300 opacity-80 transform -rotate-2">
                Alexandre Dubois
              </div>
              <p className="font-serif uppercase tracking-[0.2em] text-xs text-brand mt-4">Chef Exécutif</p>
            </div>
          </motion.div>
          
          <div ref={ref} className="order-1 lg:order-2 relative h-[60vh] lg:h-[80vh] w-full rounded-sm overflow-hidden group">
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <img 
                src={storyImage} 
                alt="Notre Chef en cuisine" 
                className="w-full h-full object-cover origin-center transition-transform duration-[20s] group-hover:scale-110 ease-out"
              />
            </motion.div>
            <div className="absolute inset-0 bg-neutral-950/20 mix-blend-multiply transition-colors duration-700 group-hover:bg-transparent" />
            <div className="absolute inset-0 border border-neutral-800/50 rounded-sm pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
