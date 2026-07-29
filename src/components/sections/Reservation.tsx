import { motion } from 'motion/react';

export default function Reservation() {
  return (
    <section id="reservation" className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center overflow-hidden bg-neutral-950">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-neutral-900/30 to-transparent pointer-events-none z-10" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="mb-8">
            <span className="text-brand uppercase tracking-[0.2em] text-xs font-serif">Réservation</span>
            <div className="w-12 h-px bg-brand mt-4"></div>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Prenez place<br/><span className="italic text-neutral-400">à notre table.</span>
          </h2>
          <p className="mt-8 text-neutral-400 font-light text-lg md:text-xl leading-relaxed max-w-lg">
            Notre salle intime ne compte que huit tables. Nous vous invitons à anticiper votre venue pour vous assurer de vivre l'expérience Fumé.
          </p>
          <div className="mt-12 space-y-4">
            <p className="text-neutral-300 font-light">
              <span className="font-serif italic mr-3 text-brand">Ouverture</span> Du mardi au samedi, de 19h30 à minuit.
            </p>
            <p className="text-neutral-300 font-light">
              <span className="font-serif italic mr-3 text-brand">Contact</span> +33 (0)1 42 56 78 90
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="bg-neutral-900/20 backdrop-blur-sm p-8 md:p-12 border border-neutral-800/50 rounded-xl"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input type="text" id="name" className="w-full bg-transparent border-b border-neutral-700 focus:border-brand py-3 text-neutral-200 outline-none transition-colors peer placeholder-transparent" placeholder="Votre nom" />
                <label htmlFor="name" className="absolute left-0 top-3 text-neutral-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand transition-all peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-neutral-400 uppercase tracking-widest font-light">Votre nom</label>
              </div>
              <div className="relative group">
                <input type="tel" id="phone" className="w-full bg-transparent border-b border-neutral-700 focus:border-brand py-3 text-neutral-200 outline-none transition-colors peer placeholder-transparent" placeholder="Téléphone" />
                <label htmlFor="phone" className="absolute left-0 top-3 text-neutral-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand transition-all peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-neutral-400 uppercase tracking-widest font-light">Téléphone</label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative group">
                <input type="date" id="date" className="w-full bg-transparent border-b border-neutral-700 focus:border-brand py-3 text-neutral-200 outline-none transition-colors peer text-sm" />
                <label htmlFor="date" className="absolute left-0 -top-4 text-neutral-400 text-xs uppercase tracking-widest font-light">Date</label>
              </div>
              <div className="relative group">
                <select id="time" className="w-full bg-transparent border-b border-neutral-700 focus:border-brand py-3 text-neutral-200 outline-none transition-colors peer text-sm appearance-none">
                  <option value="19:30" className="bg-neutral-900">19:30</option>
                  <option value="20:00" className="bg-neutral-900">20:00</option>
                  <option value="20:30" className="bg-neutral-900">20:30</option>
                  <option value="21:00" className="bg-neutral-900">21:00</option>
                </select>
                <label htmlFor="time" className="absolute left-0 -top-4 text-neutral-400 text-xs uppercase tracking-widest font-light">Heure</label>
              </div>
              <div className="relative group">
                <select id="guests" defaultValue="2" className="w-full bg-transparent border-b border-neutral-700 focus:border-brand py-3 text-neutral-200 outline-none transition-colors peer text-sm appearance-none">
                  <option value="1" className="bg-neutral-900">1 personne</option>
                  <option value="2" className="bg-neutral-900">2 personnes</option>
                  <option value="3" className="bg-neutral-900">3 personnes</option>
                  <option value="4" className="bg-neutral-900">4 personnes</option>
                  <option value="5" className="bg-neutral-900">5 personnes</option>
                  <option value="6" className="bg-neutral-900">6 personnes</option>
                </select>
                <label htmlFor="guests" className="absolute left-0 -top-4 text-neutral-400 text-xs uppercase tracking-widest font-light">Convives</label>
              </div>
            </div>

            <button type="submit" className="relative w-full bg-brand text-white py-4 font-serif uppercase tracking-widest mt-4 overflow-hidden group border border-brand hover:shadow-[0_0_30px_rgba(230,92,44,0.3)] transition-all duration-500 rounded-sm">
              <span className="relative z-10 group-hover:text-neutral-950 transition-colors duration-500 inline-block group-hover:scale-105">Confirmer la demande</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
