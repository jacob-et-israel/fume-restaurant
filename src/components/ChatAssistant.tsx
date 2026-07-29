import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { conciergeConfig } from '../config/concierge';
import conciergeAvatar from '../assets/images/concierge_avatar_1785282009864.jpg';
import conciergeIdle from '../assets/images/concierge_idle_1785283065081.jpg';
import conciergeWriting from '../assets/images/concierge_writing_1785283077563.jpg';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showProactive, setShowProactive] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isWritingVisual = isLoading || (input.trim().length > 0 && !isPresenting);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Proactive message logic
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted && !isOpen) {
        setShowProactive(true);
      }
    }, 6000); // 6 seconds
    
    return () => clearTimeout(timer);
  }, [hasInteracted, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasInteracted(true);
    setShowTooltip(false);
    setShowProactive(false);
    
    if (messages.length === 0) {
      setMessages([{ role: 'model', text: conciergeConfig.welcomeMessage }]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages = [...messages, { role: 'user' as const, text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Format history for Gemini API
      const history = messages.map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history })
      });

      const data = await res.json();
      
      setIsLoading(false);
      setIsPresenting(true);

      setTimeout(() => {
        if (res.ok && data.text) {
          setMessages(prev => [...prev, { role: 'model', text: data.text }]);
        } else {
          setMessages(prev => [...prev, { role: 'model', text: 'Veuillez m\'excuser, un problème est survenu.' }]);
        }
        setIsPresenting(false);
      }, 1500);

    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setIsPresenting(true);
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'model', text: 'Veuillez m\'excuser, un problème est survenu.' }]);
        setIsPresenting(false);
      }, 1500);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex flex-col items-end">
        {/* Proactive / Hover Tooltip */}
        <AnimatePresence>
          {(!isOpen && (showProactive || showTooltip)) && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="mb-4 relative z-50 flex items-end justify-end max-w-xs"
            >
              <div className="bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm font-light leading-relaxed p-4 rounded-2xl rounded-br-sm shadow-2xl">
                {showProactive ? (
                  <>
                    <p className="whitespace-pre-line">{conciergeConfig.welcomeMessage}</p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowProactive(false);
                        setHasInteracted(true);
                      }}
                      className="absolute top-2 right-2 text-neutral-500 hover:text-white transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </>
                ) : (
                  <p className="whitespace-pre-line">{conciergeConfig.hoverMessage}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 100 }}
            onClick={handleOpen}
            onMouseEnter={() => !showProactive && setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative w-16 h-16 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-2 border-neutral-800 hover:border-[#D4AF37] transition-colors duration-500 group"
          >
            <img 
              src={conciergeAvatar} 
              alt={conciergeConfig.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            {/* Online Indicator */}
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-neutral-950 rounded-full"></span>
          </motion.button>
        )}
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 w-[calc(100vw-32px)] md:w-[760px] h-[600px] max-h-[calc(100vh-100px)] bg-neutral-950/80 backdrop-blur-2xl border border-neutral-800/60 shadow-2xl flex flex-col md:flex-row rounded-2xl overflow-hidden"
          >
            
            {/* Concierge Visual Area (Top Mobile, Right Desktop) */}
            <div className="w-full h-[200px] md:h-full md:w-[320px] shrink-0 relative order-1 md:order-2 overflow-hidden bg-neutral-950/50 border-b md:border-b-0 md:border-l border-neutral-800/60">
              <motion.div 
                animate={{
                  scale: [1, 1.015, 1],
                  y: [0, -1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full relative origin-bottom"
              >
                {/* Idle State */}
                <motion.div
                   className="absolute inset-0 w-full h-full"
                   animate={{ opacity: isWritingVisual ? 0 : 1 }}
                   transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <img 
                    src={conciergeIdle} 
                    alt="Concierge attendant" 
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </motion.div>
                
                {/* Writing State */}
                <motion.div
                   className="absolute inset-0 w-full h-full"
                   animate={{ opacity: isWritingVisual ? 1 : 0 }}
                   transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <img 
                    src={conciergeWriting} 
                    alt="Concierge écrivant" 
                    className="w-full h-full object-cover object-[center_30%]"
                  />
                </motion.div>
                
                {/* Gradient overlay for better text blending if needed, and to soften the bottom edge */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none md:bg-gradient-to-l md:from-transparent md:to-neutral-950/20" />
              </motion.div>
            </div>

            {/* Chat Area (Bottom Mobile, Left Desktop) */}
            <div className="flex-1 flex flex-col order-2 md:order-1 relative z-10">
              {/* Header */}
              <div className="bg-neutral-900/40 border-b border-neutral-800/60 p-4 flex justify-between items-center shrink-0 backdrop-blur-sm">
                <div>
                  <h3 className="font-serif text-lg text-neutral-100 flex items-center gap-3">
                    Votre Concierge
                    <span className="flex items-center gap-1.5 text-xs font-sans text-neutral-400 uppercase tracking-widest font-light bg-neutral-800/50 px-2 py-0.5 rounded-full border border-neutral-700/50">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      En ligne
                    </span>
                  </h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-white transition-colors p-2 -mr-2 rounded-full hover:bg-neutral-800/80"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-neutral-800">
                {messages.map((msg, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    key={idx} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[85%] p-4 text-[15px] font-light leading-relaxed rounded-2xl ${
                        msg.role === 'user' 
                          ? 'bg-neutral-800 text-neutral-100 rounded-tr-sm' 
                          : 'bg-neutral-900/60 backdrop-blur-md border border-neutral-800/60 text-neutral-200 rounded-tl-sm shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="p-4 bg-neutral-900/60 backdrop-blur-md border border-neutral-800/60 text-neutral-400 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5 items-center h-[52px]">
                       <span className="text-xs uppercase tracking-widest font-light mr-2">Éléonore écrit</span>
                      <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce"></span>
                      <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="border-t border-neutral-800/60 p-4 bg-neutral-950/60 backdrop-blur-md shrink-0">
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Écrivez votre message..."
                    className="w-full bg-neutral-900/80 border border-neutral-800 rounded-full pl-5 pr-12 py-3.5 text-[15px] text-neutral-200 focus:outline-none focus:border-[#D4AF37]/50 transition-colors font-light placeholder:text-neutral-500"
                  />
                  <button 
                    type="submit" 
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#D4AF37] text-black rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F3E5AB] transition-colors"
                  >
                    <Send size={16} className="ml-[-2px]" />
                  </button>
                </div>
              </form>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

