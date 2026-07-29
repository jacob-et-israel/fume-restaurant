import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';

const Leaf = ({ className, style, rotate }: { className: string, style: any, rotate: string }) => {
  const combinedStyle = { ...style, rotate };
  return (
    <motion.svg 
      style={combinedStyle} 
      className={`absolute ${className} drop-shadow-md origin-bottom`} 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C12 2 4 6 4 14C4 18 8 22 12 22C16 22 20 18 20 14C20 6 12 2 12 2Z" fill="#3f6b32"/>
      <path d="M12 22V2" stroke="#25421d" strokeWidth="1"/>
    </motion.svg>
  );
}

export default function SignatureDish() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animations mapped to smooth scroll progress
  const plateOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
  const plateScale = useTransform(smoothProgress, [0, 0.1], [0.8, 1]);

  const pureePathLength = useTransform(smoothProgress, [0.1, 0.25], [0, 1]);
  const pureeOpacity = useTransform(smoothProgress, [0.1, 0.15], [0, 1]);

  const meatOpacity = useTransform(smoothProgress, [0.25, 0.35], [0, 1]);
  const meatY = useTransform(smoothProgress, [0.25, 0.35], [-30, 0]);
  const meatScale = useTransform(smoothProgress, [0.25, 0.35], [1.1, 1]);

  const sauce1Scale = useTransform(smoothProgress, [0.35, 0.4], [0, 1]);
  const sauce2Scale = useTransform(smoothProgress, [0.4, 0.45], [0, 1]);
  const sauce3Scale = useTransform(smoothProgress, [0.45, 0.5], [0, 1]);
  const sauce4Scale = useTransform(smoothProgress, [0.48, 0.53], [0, 1]);

  const herb1Opacity = useTransform(smoothProgress, [0.55, 0.6], [0, 1]);
  const herb1Y = useTransform(smoothProgress, [0.55, 0.6], [-15, 0]);
  
  const herb2Opacity = useTransform(smoothProgress, [0.6, 0.65], [0, 1]);
  const herb2Y = useTransform(smoothProgress, [0.6, 0.65], [-15, 0]);
  
  const herb3Opacity = useTransform(smoothProgress, [0.65, 0.7], [0, 1]);
  const herb3Y = useTransform(smoothProgress, [0.65, 0.7], [-15, 0]);

  const steamOpacity = useTransform(smoothProgress, [0.7, 0.85], [0, 1]);
  
  const lightOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  const textOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  const textYOffset = useTransform(smoothProgress, [0.85, 0.95], [20, 0]);

  return (
    <section ref={containerRef} className="h-[400vh] bg-neutral-950 relative border-b border-neutral-800/50">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background lighting */}
        <motion.div 
          style={{ opacity: lightOpacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,92,44,0.12)_0%,transparent_60%)] pointer-events-none mix-blend-screen"
        />

        {/* The Plate Container */}
        <motion.div 
          style={{ opacity: plateOpacity, scale: plateScale }}
          className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] rounded-full bg-[#161616] border border-[#2a2a2a] shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_0_40px_rgba(0,0,0,0.8)] flex items-center justify-center"
        >
          {/* Inner Rim */}
          <div className="w-[65%] h-[65%] rounded-full border border-[#222] shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)] absolute" />

          {/* Puree */}
          <motion.svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              d="M 50 150 C 80 180, 160 140, 160 50"
              fill="transparent"
              stroke="#E65C2C"
              strokeWidth="12"
              strokeLinecap="round"
              style={{ pathLength: pureePathLength, opacity: pureeOpacity }}
              className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
            />
            <motion.path
              d="M 50 150 C 80 180, 160 140, 160 50"
              fill="transparent"
              stroke="#ff8a5c"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength: pureePathLength, opacity: pureeOpacity }}
            />
          </motion.svg>

          {/* Meat / Main Ingredient */}
          <motion.div
            style={{ opacity: meatOpacity, y: meatY, scale: meatScale, x: "-50%", rotate: "-25deg" }}
            className="absolute top-[35%] left-[50%] w-24 h-32 md:w-32 md:h-40 rounded-[40%] bg-gradient-to-br from-[#3a1a0d] via-[#1a0a05] to-[#0a0402] shadow-[15px_20px_30px_rgba(0,0,0,0.8)] border-t border-[#5a2a15]"
          />

          {/* Sauces */}
          <motion.div style={{ opacity: sauce1Scale, scale: sauce1Scale }} className="absolute top-[25%] left-[35%] w-4 h-4 rounded-full bg-[#E65C2C] shadow-lg border-t border-[#ff8a5c]" />
          <motion.div style={{ opacity: sauce2Scale, scale: sauce2Scale }} className="absolute top-[18%] left-[45%] w-2.5 h-2.5 rounded-full bg-[#E65C2C] shadow-lg border-t border-[#ff8a5c]" />
          <motion.div style={{ opacity: sauce3Scale, scale: sauce3Scale }} className="absolute top-[68%] left-[68%] w-5 h-5 rounded-full bg-[#2d4a22] shadow-lg border-t border-[#4a7a3a]" />
          <motion.div style={{ opacity: sauce4Scale, scale: sauce4Scale }} className="absolute top-[78%] left-[60%] w-3 h-3 rounded-full bg-[#2d4a22] shadow-lg border-t border-[#4a7a3a]" />

          {/* Herbs */}
          <Leaf style={{ opacity: herb1Opacity, y: herb1Y, x: "-50%" }} rotate="45deg" className="top-[42%] left-[48%] w-6 h-6 md:w-8 md:h-8" />
          <Leaf style={{ opacity: herb2Opacity, y: herb2Y, x: "-50%" }} rotate="-30deg" className="top-[58%] left-[55%] w-4 h-4 md:w-5 md:h-5" />
          <Leaf style={{ opacity: herb3Opacity, y: herb3Y, x: "-50%" }} rotate="100deg" className="top-[38%] left-[62%] w-3 h-3 md:w-4 md:h-4" />

          {/* Steam */}
          <motion.div
            style={{ opacity: steamOpacity }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center mix-blend-screen"
          >
            <div className="absolute w-32 h-32 bg-white/10 blur-[20px] rounded-full animate-steam1" />
            <div className="absolute w-40 h-40 bg-white/10 blur-[25px] rounded-full animate-steam2" />
            <div className="absolute w-24 h-24 bg-white/10 blur-[15px] rounded-full animate-steam3" />
          </motion.div>
        </motion.div>

        {/* Text Overlay */}
        <motion.div
          style={{ opacity: textOpacity, y: textYOffset }}
          className="absolute bottom-12 sm:bottom-16 md:bottom-24 left-0 right-0 text-center px-6"
        >
          <span className="text-brand uppercase tracking-[0.2em] text-xs font-serif block mb-4">L'Art du Dressage</span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-100">
            Pigeonneau <span className="italic text-neutral-400">au Feu de Bois</span>
          </h3>
          <p className="text-neutral-400 font-light mt-4 md:mt-6 max-w-lg mx-auto text-sm md:text-base">
            Une chorégraphie millimétrée où chaque élément vient sublimer le produit brut. 
            Purée de patate douce fumée, jus corsé, et herbes sauvages.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
