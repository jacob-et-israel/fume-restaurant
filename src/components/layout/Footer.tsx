import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-800 px-8 flex flex-col items-center justify-center overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="font-serif text-[15vw] leading-none text-brand uppercase tracking-tighter opacity-80 mb-12"
      >
        Fumé
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 uppercase tracking-widest"
      >
        <span>© 2026 Fumé Restaurant</span>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-brand after:transition-transform after:duration-500 hover:text-brand hover:after:origin-bottom-left hover:after:scale-x-100 transition-colors duration-500">Instagram</a>
          <a href="#" className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-brand after:transition-transform after:duration-500 hover:text-brand hover:after:origin-bottom-left hover:after:scale-x-100 transition-colors duration-500">Presse</a>
          <a href="#" className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-brand after:transition-transform after:duration-500 hover:text-brand hover:after:origin-bottom-left hover:after:scale-x-100 transition-colors duration-500">Contact</a>
        </div>
      </motion.div>
    </footer>
  );
}
