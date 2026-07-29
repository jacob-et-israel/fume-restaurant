import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 transition-all duration-500 ${
          isOpen 
            ? 'py-6 bg-transparent' 
            : isScrolled 
              ? 'py-4 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50' 
              : 'py-6 bg-transparent mix-blend-difference'
        }`}
      >
        <div className="font-serif text-2xl tracking-widest uppercase text-white relative z-50">Fumé</div>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-light text-white">
          <a href="#philosophy" className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-brand after:transition-transform after:duration-500 hover:text-brand hover:after:origin-bottom-left hover:after:scale-x-100 transition-colors duration-500">Philosophie</a>
          <a href="#menu" className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-brand after:transition-transform after:duration-500 hover:text-brand hover:after:origin-bottom-left hover:after:scale-x-100 transition-colors duration-500">Menu</a>
          <a href="#reservation" className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-brand after:transition-transform after:duration-500 hover:text-brand hover:after:origin-bottom-left hover:after:scale-x-100 transition-colors duration-500">Réservation</a>
          <a href="#contact" className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-brand after:transition-transform after:duration-500 hover:text-brand hover:after:origin-bottom-left hover:after:scale-x-100 transition-colors duration-500">Contact</a>
        </nav>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 uppercase text-sm tracking-widest hover:text-brand transition-colors duration-500 text-white p-2 -mr-2"
        >
          {isOpen ? 'Fermer' : 'Menu'}
        </button>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-neutral-950 flex flex-col items-center justify-center px-6"
          >
            <nav className="flex flex-col w-full max-w-sm gap-2 text-center">
              {[
                { href: "#philosophy", label: "Philosophie" },
                { href: "#story", label: "Notre Histoire" },
                { href: "#chef", label: "Le Chef" },
                { href: "#menu", label: "Menu" },
                { href: "#reservation", label: "Réservation" },
                { href: "#contact", label: "Contact" }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  variants={itemVariants}
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className="block py-4 font-serif text-3xl md:text-4xl text-neutral-200 hover:text-brand transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            
            <motion.div variants={itemVariants} className="mt-16 flex flex-col items-center gap-4 text-neutral-500 font-light text-sm">
              <p>+33 (0)1 42 56 78 90</p>
              <div className="flex gap-6 uppercase tracking-widest text-xs">
                <a href="#" className="hover:text-brand transition-colors duration-300">Instagram</a>
                <a href="#" className="hover:text-brand transition-colors duration-300">Facebook</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
