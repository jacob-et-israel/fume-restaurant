import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Flame, Star, Fish, Wine } from 'lucide-react';
import bgImage from '../../assets/images/menu_table_background_1785284770694.jpg';
import paperTexture from '../../assets/images/menu_paper_texture_1785284786153.jpg';

type MenuItemType = {
  name: string;
  desc: string;
  price: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isSignature?: boolean;
  isFish?: boolean;
  pairing?: string;
};

type MenuCategory = {
  title: string;
  items: MenuItemType[];
};

const menuData: MenuCategory[] = [
  {
    title: "Entrées",
    items: [
      { name: "Langoustines de Casier", desc: "Saisies au binchotan, bouillon perlé à l'huile de tagète et caviar cristal", price: "38€", isSignature: true, isFish: true },
      { name: "Foie Gras Confite aux Sarments", desc: "Marbré aux figues de Solliès, brioche toastée au beurre noisette et poivre de Timut", price: "35€" },
      { name: "Asperges Blanches du Luberon", desc: "Rôties doucement, sabayon au vin jaune et praliné de noix de macadamia", price: "28€", isVegetarian: true },
    ]
  },
  {
    title: "Les Plats",
    items: [
      { name: "Le Pigeonneau de Racan", desc: "Maturé sur carcasse, déclinaison de betteraves au feu de bois, jus corsé à l'amarante", price: "55€", isSignature: true, pairing: "Côte-Rôtie 'La Mouline', 2016" },
      { name: "Homard Bleu de nos Côtes", desc: "Cuit à l'étouffée sous des aiguilles de pin, risotto d'épeautre et émulsion safranée", price: "68€", isFish: true, pairing: "Meursault 1er Cru 'Les Perrières', 2018" },
      { name: "Turbot Sauvage Cuit sur l'Arête", desc: "Nacré à la perfection, poireaux crayons glacés au beurre d'algues et sauce champagne", price: "62€", isFish: true, pairing: "Chablis Grand Cru 'Les Clos', 2019" },
      { name: "Filet de Bœuf Wagyu A5", desc: "Fumé au bois de cerisier, millefeuille de pommes de terre Agria, laque au jus de truffe noire", price: "85€", isSignature: true, pairing: "Château Margaux, 2010" },
      { name: "Agneau de Lait des Pyrénées", desc: "Carré en croûte d'herbes sauvages, déclinaison d'artichauts barigoule et ail noir fermenté", price: "52€" },
      { name: "Risotto Acquerello au Safran", desc: "Pistils de safran, courgettes trompettes, parmesan affiné 36 mois", price: "42€", isVegetarian: true }
    ]
  },
  {
    title: "Desserts",
    items: [
      { name: "Soufflé Chaud au Chocolat Tainori", desc: "Cœur coulant au praliné fumé, glace turbinée minute à la vanille de Tahiti", price: "22€", isSignature: true, pairing: "Banyuls Grand Cru, 2015" },
      { name: "Millefeuille Arlette Caramélisée", desc: "Légèreté de crème diplomate à la fève tonka, caramel au beurre salé", price: "20€" },
      { name: "Déclinaison d'Agrumes", desc: "Sorbet kalamansi, meringue croquante, gel d'yuzu et zestes confits", price: "18€", isVegetarian: true },
    ]
  },
  {
    title: "Boissons & Vins",
    items: [
      { name: "L'Accord Parfait en 5 Temps", desc: "Une pérégrination œnologique conçue pour sublimer chaque note de votre dégustation", price: "90€", pairing: "Sélection du Sommelier" },
      { name: "Création Mixologique 'L'Éphémère'", desc: "Mezcal infusé au bois de santal, cordial de pamplemousse rose, romarin brûlé", price: "18€" },
      { name: "Champagne Blanc de Blancs Millésimé", desc: "Une cuvée d'exception aux notes briochées, sélectionnée avec soin par notre sommelier", price: "25€" },
    ]
  }
];

const MenuItem: React.FC<{ item: MenuItemType; index: number }> = ({ item, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    className="group relative flex flex-col pb-6 mb-6 last:mb-0 last:pb-0"
  >
    {/* Hover subtle background effect */}
    <div className="absolute -inset-x-6 -inset-y-3 bg-[#f2ebd9]/50 rounded-lg transition-colors duration-500 opacity-0 group-hover:opacity-100 -z-10" />
    
    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 sm:gap-4 mb-2 z-10">
      <h4 className="font-serif text-lg md:text-xl text-neutral-900 group-hover:text-black transition-colors duration-300">
        {item.name}
      </h4>
      <div className="hidden sm:block flex-grow border-b-2 border-dotted border-neutral-300 relative top-[-6px] opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
      <span className="font-serif text-lg md:text-xl text-[#8B7355] transition-transform duration-300 group-hover:scale-105 self-start sm:self-auto">
        {item.price}
      </span>
    </div>

    <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-[90%] group-hover:text-neutral-900 transition-colors duration-300 z-10">
      {item.desc}
    </p>

    {/* Icons & Pairing */}
    <div className="flex flex-wrap items-center gap-4 mt-3 z-10">
      <div className="flex gap-2">
        {item.isSignature && <Star size={14} className="text-[#8B7355]" aria-label="Signature" />}
        {item.isVegetarian && <Leaf size={14} className="text-emerald-700" aria-label="Végétarien" />}
        {item.isSpicy && <Flame size={14} className="text-red-700" aria-label="Épicé" />}
        {item.isFish && <Fish size={14} className="text-blue-700" aria-label="Poisson" />}
      </div>
      
      {item.pairing && (
        <div className="flex items-center gap-1.5 text-xs text-neutral-500 italic">
          <Wine size={12} className="text-[#8B7355]" />
          <span>{item.pairing}</span>
        </div>
      )}
    </div>
    
    {/* Micro-interaction Separator */}
    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8B7355]/30 group-hover:w-full transition-all duration-700 ease-out z-10"></div>
  </motion.div>
);

export default function Menu() {
  return (
    <section id="menu" className="relative w-full min-h-screen bg-neutral-950 overflow-hidden py-24 md:py-40">
      
      {/* Background Image with ingredients (Parallax effect) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="sticky top-0 w-full h-screen"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6
          }}
        />
        {/* Vignette overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 0%, rgba(10,10,10,0.9) 100%)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
        
        {/* The Clipboard Support */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 1200 }}
          className="relative"
        >
          {/* Board Base */}
          <div className="relative bg-[#1a1918] rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] p-3 md:p-6 pb-8 md:pb-12 border border-[#2a2928] ring-1 ring-black/50">
            
            {/* Metal Clip */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 md:-translate-y-4 z-30 flex flex-col items-center drop-shadow-2xl">
              <div className="w-32 md:w-48 h-8 md:h-10 bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-500 rounded-t-md border-t border-x border-neutral-300 shadow-inner" />
              <div className="w-20 md:w-28 h-5 md:h-6 bg-gradient-to-b from-neutral-400 to-neutral-600 rounded-b-lg border-b border-x border-neutral-500 shadow-md flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-neutral-800 shadow-inner opacity-50" />
              </div>
            </div>

            {/* Paper Container */}
            <div className="relative rounded-sm overflow-hidden bg-[#FBF9F6] shadow-[0_0_30px_rgba(0,0,0,0.4)]">
              {/* Paper Texture Overlay */}
              <div 
                className="absolute inset-0 z-0 mix-blend-multiply opacity-25 pointer-events-none" 
                style={{ backgroundImage: `url(${paperTexture})`, backgroundSize: 'cover' }}
              />
              
              {/* Paper Content */}
              <div className="relative z-10 px-6 py-20 md:px-16 md:py-28">
                
                {/* Header */}
                <div className="flex flex-col items-center mb-24 opacity-90">
                   <motion.div 
                     initial={{ scale: 0.8, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.4 }}
                     className="w-10 h-10 border-2 border-[#8B7355] rotate-45 mb-6 flex items-center justify-center"
                   >
                      <div className="w-4 h-4 bg-[#8B7355]" />
                   </motion.div>
                   <h2 className="font-serif text-3xl md:text-5xl text-[#1a1a1a] mb-4 text-center">
                     Menu de Dégustation
                   </h2>
                   <span className="uppercase tracking-[0.4em] text-[#8B7355] text-xs md:text-sm font-light">Maison Fumé</span>
                </div>

                {/* Categories */}
                <div className="space-y-24">
                  {menuData.map((category, catIdx) => (
                    <div key={category.title} className="relative">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center mb-12"
                      >
                        <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] tracking-wide text-center uppercase">
                          {category.title}
                        </h3>
                        <div className="w-12 h-[2px] bg-[#8B7355] mt-6"></div>
                      </motion.div>
                      
                      <div className="space-y-2">
                        {category.items.map((item, idx) => (
                          <MenuItem key={item.name} item={item} index={idx} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mt-32 pt-16 border-t border-[#8B7355]/20 flex flex-col items-center"
                >
                   <p className="text-[#1a1a1a] font-serif italic text-lg mb-8 text-center max-w-md">
                     "La cuisine est une mélodie que l'on déguste avec les yeux avant de la savourer."
                   </p>
                   <a 
                     href="#reservation"
                     className="px-8 py-4 bg-[#1a1a1a] text-[#FBF9F6] uppercase tracking-[0.2em] text-xs hover:bg-[#8B7355] transition-colors duration-500 shadow-lg"
                   >
                     Réserver une table
                   </a>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
