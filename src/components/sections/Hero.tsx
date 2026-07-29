import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import heroBg from '../../assets/images/hero_dish_1785277070854.jpg';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          src={heroBg} 
          alt="Plat gastronomique" 
          className="w-full h-full object-cover origin-center"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 40, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        <div className="absolute inset-0 bg-neutral-950/60 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950 z-10" />
      </motion.div>

      <motion.div style={{ y: textY }} className="relative z-20 text-center w-full px-6 mt-16 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-8xl lg:text-[9rem] leading-none tracking-tight text-neutral-50 uppercase drop-shadow-2xl"
        >
          L'Éveil<br/><span className="text-brand">des Sens</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="mt-8 text-lg md:text-xl font-light text-neutral-300 max-w-2xl text-center drop-shadow-md"
        >
          Une expérience culinaire immersive où le raffinement de la gastronomie rencontre l'art du feu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 md:mt-12 w-full sm:w-auto max-w-sm sm:max-w-none"
        >
          <a href="#reservation" className="w-full sm:w-auto text-center relative overflow-hidden group px-10 py-5 bg-brand text-white font-serif uppercase tracking-[0.2em] text-xs transition-all duration-500 border border-brand hover:shadow-[0_0_40px_rgba(230,92,44,0.4)]">
            <span className="relative z-10 transition-transform duration-500 group-hover:scale-105 inline-block">Réserver une table</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </a>
          <a href="#menu" className="w-full sm:w-auto text-center relative overflow-hidden group px-10 py-5 border border-white/30 text-white font-serif uppercase tracking-[0.2em] text-xs transition-all duration-500 backdrop-blur-sm bg-black/20 hover:border-white">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-neutral-950">Découvrir notre menu</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </a>
        </motion.div>
      </motion.div>

      {/* Marquee / Scrolling text */}
      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap z-20 flex gap-10 text-xs md:text-sm uppercase tracking-[0.3em] py-8 bg-gradient-to-t from-neutral-950 to-transparent">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-10 opacity-70"
        >
          <span>Ouvert jusqu'à minuit</span>
          <span className="text-brand">✦</span>
          <span>Avenue Foch, Paris</span>
          <span className="text-brand">✦</span>
          <span>Vingt-huit couverts</span>
          <span className="text-brand">✦</span>
          <span>Ouvert jusqu'à minuit</span>
          <span className="text-brand">✦</span>
          <span>Avenue Foch, Paris</span>
          <span className="text-brand">✦</span>
          <span>Vingt-huit couverts</span>
          <span className="text-brand">✦</span>
          <span>Ouvert jusqu'à minuit</span>
          <span className="text-brand">✦</span>
          <span>Avenue Foch, Paris</span>
          <span className="text-brand">✦</span>
          <span>Vingt-huit couverts</span>
        </motion.div>
      </div>
    </section>
  );
}
