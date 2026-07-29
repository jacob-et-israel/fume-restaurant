import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import dishPlating from '../../assets/images/gallery_dish_plating_1785278838833.jpg';
import diningRoom from '../../assets/images/gallery_dining_room_1785278851293.jpg';
import decorDetail from '../../assets/images/gallery_decor_detail_1785278862980.jpg';
import eveningAtmosphere from '../../assets/images/gallery_evening_atmosphere_1785278877055.jpg';
import gastronomicDish from '../../assets/images/gallery_gastronomic_dish_1785278887204.jpg';

const GalleryImage = ({ src, alt, className, delay = 0, speed = 0.05 }: { src: string, alt: string, className: string, delay?: number, speed?: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: "easeOut", delay }}
      className={`relative overflow-hidden group cursor-pointer rounded-sm bg-neutral-900 ${className}`}
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-110 ease-out grayscale-[0.2] group-hover:grayscale-0"
        />
      </motion.div>
      <div className="absolute inset-0 bg-neutral-950/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-brand/30 transition-colors duration-700 rounded-sm" />
    </motion.div>
  );
};

export default function Gallery() {
  return (
    <section className="relative py-32 md:py-48 border-b border-neutral-800/50 overflow-hidden bg-neutral-950">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-neutral-900/30 to-transparent pointer-events-none z-10" />
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 px-6 md:px-12 lg:px-24 mb-24 max-w-7xl mx-auto"
      >
        <div className="mb-8">
          <span className="text-brand uppercase tracking-[0.2em] text-xs font-serif">L'Expérience</span>
          <div className="w-12 h-px bg-brand mt-4"></div>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-tight">
          Un instant <span className="italic text-neutral-400">suspendu.</span>
        </h2>
      </motion.div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <GalleryImage 
            src={eveningAtmosphere} 
            alt="Ambiance en soirée" 
            className="md:col-span-8 aspect-[4/3] md:aspect-auto md:h-[65vh]" 
            delay={0}
            speed={0.08}
          />
          <GalleryImage 
            src={dishPlating} 
            alt="Dressage d'un plat" 
            className="md:col-span-4 aspect-[4/5] md:aspect-auto md:h-[65vh]" 
            delay={0.2}
            speed={0.05}
          />
          
          <GalleryImage 
            src={gastronomicDish} 
            alt="Plat gastronomique" 
            className="md:col-span-4 aspect-square md:aspect-[4/5]" 
            delay={0.1}
            speed={0.06}
          />
          <GalleryImage 
            src={diningRoom} 
            alt="Salle du restaurant" 
            className="md:col-span-4 aspect-square md:aspect-[4/5]" 
            delay={0.3}
            speed={0.04}
          />
          <GalleryImage 
            src={decorDetail} 
            alt="Détail de décoration" 
            className="md:col-span-4 aspect-square md:aspect-[4/5]" 
            delay={0.5}
            speed={0.07}
          />
        </div>
      </div>
    </section>
  );
}
