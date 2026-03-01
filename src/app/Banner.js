"use client";

import { useMotionValue, useScroll, motion, useTransform, useSpring } from "framer-motion";
import { Activity, ArrowRight, Dna, HeartPulse, Microscope, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { useEffect, useRef } from "react";

// Parallax Layer Component
const ParallaxLayer = ({ 
  children, 
  depth = 1, 
  mouseX, 
  mouseY, 
  className = "" 
}) => {
  const x = useTransform(mouseX, [0, window.innerWidth], [depth * 20, depth * -20]);
  const y = useTransform(mouseY, [0, window.innerHeight], [depth * 20, depth * -20]);
  
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  return (
    <motion.div style={{ x: springX, y: springY }} className={`absolute ${className}`}>
      {children}
    </motion.div>
  );
};

// Floating Medical Element
const FloatingElement = ({ 
  icon: Icon, 
  color = "text-emerald-deep", 
  size = 40, 
  delay = 0, 
  duration = 6,
  className = ""
}) => (
  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`flex items-center justify-center rounded-2xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-lg p-4 ${color} ${className}`}
  >
    <Icon size={size} strokeWidth={1.5} />
  </motion.div>
);

// Background Particles Component
const BackgroundParticles = ({ count = 20 }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.3 + 0.1,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            x: [
              Math.random() * 100 + "%", 
              Math.random() * 100 + "%", 
              Math.random() * 100 + "%"
            ],
            y: [
              Math.random() * 100 + "%", 
              Math.random() * 100 + "%", 
              Math.random() * 100 + "%"
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-emerald-deep rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export default function Banner() {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-beige-soft selection:bg-emerald-deep/10">
      {/* Background Animations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #064E3B 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Morphing Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] rounded-full bg-emerald-deep/5 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -60, 0],
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] -left-[15%] w-[70%] h-[70%] rounded-full bg-gold-muted/5 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-emerald-deep/3 blur-[150px]"
        />

        {/* Floating Particles */}
        <BackgroundParticles count={30} />
      </div>

      {/* Dynamic Sticky Header */}
      <motion.header
        style={{
          backgroundColor: useTransform(scrollY, [0, 100], ["rgba(245, 245, 240, 0)", "rgba(245, 245, 240, 0.8)"]),
          backdropFilter: useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]),
          borderBottom: useTransform(scrollY, [0, 100], ["1px solid rgba(6, 78, 59, 0)", "1px solid rgba(6, 78, 59, 0.1)"]),
          height: useTransform(scrollY, [0, 100], ["100px", "70px"]),
        }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300"
      >
        <div className="flex items-center justify-between w-full px-8 mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <motion.div 
              style={{ scale: useTransform(scrollY, [0, 100], [1, 0.8]) }}
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-deep text-beige-soft shadow-xl shadow-emerald-deep/20"
            >
              <ShieldCheck size={28} />
            </motion.div>
            <motion.span 
              style={{ fontSize: useTransform(scrollY, [0, 100], ["1.5rem", "1.25rem"]) }}
              className="font-semibold tracking-tight font-serif text-emerald-deep"
            >
              Lumina<span className="text-gold-muted italic">Clinic</span>
            </motion.span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:flex items-center gap-10 text-xs font-bold tracking-widest uppercase text-emerald-deep/60"
          >
            {["Specialties", "Physicians", "Technology", "Concierge"].map((item) => (
              <a key={item} href="#" className="hover:text-emerald-deep transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-muted transition-all group-hover:w-full" />
              </a>
            ))}
          </motion.div>

          <div className="flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 text-xs font-bold tracking-widest uppercase text-emerald-deep border border-emerald-deep/20 rounded-full hover:bg-emerald-deep/5 transition-all"
            >
              Login
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-xs font-bold tracking-widest uppercase text-beige-soft bg-emerald-deep rounded-full shadow-lg shadow-emerald-deep/20 hover:bg-emerald-deep/90 transition-all"
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </motion.header>

      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 pt-32 pb-32 mx-auto max-w-7xl items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-emerald-deep/5 text-emerald-deep border border-emerald-deep/10"
          >
            <Sparkles size={14} className="text-gold-muted" />
            <span>The Future of Private Healthcare</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif leading-[1.05] text-emerald-deep mb-8"
          >
            Where Science <br />
            Meets <span className="italic text-gold-muted">Serenity.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-emerald-deep/70 leading-relaxed mb-12 max-w-lg font-light"
          >
            Experience a bespoke medical journey designed for the discerning individual. Advanced diagnostics, world-class specialists, and an environment of absolute tranquility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-10 py-5 text-beige-soft bg-emerald-deep rounded-full shadow-2xl shadow-emerald-deep/30 font-semibold transition-all"
            >
              Book Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 text-emerald-deep border border-emerald-deep/20 rounded-full font-semibold hover:bg-emerald-deep/5 transition-all"
            >
              Explore Specialties
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center gap-10 mt-20 pt-10 border-t border-emerald-deep/5"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-emerald-deep">25+</span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-deep/40 font-bold">Years of Trust</span>
            </div>
            <div className="w-px h-10 bg-emerald-deep/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-emerald-deep">12</span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-deep/40 font-bold">Global Awards</span>
            </div>
            <div className="w-px h-10 bg-emerald-deep/10" />
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/physician-${i}/100/100`} 
                  className="w-10 h-10 rounded-full border-2 border-beige-soft object-cover shadow-md"
                  alt="Doctor"
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-beige-soft bg-gold-muted flex items-center justify-center text-[10px] text-beige-soft font-bold shadow-md">
                +40
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Animated Composition */}
        <div className="relative h-[600px] w-full hidden lg:block">
          {/* Layered Background Elements */}
          <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={0.2} className="inset-0 flex items-center justify-center">
            <div className="w-[450px] h-[450px] rounded-full border border-emerald-deep/5 bg-emerald-deep/[0.02]" />
          </ParallaxLayer>

          <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={0.4} className="inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="w-[550px] h-[550px] border border-dashed border-emerald-deep/10 rounded-full"
            />
          </ParallaxLayer>

          {/* Central Focus Element */}
          <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={0.6} className="inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              className="relative w-80 h-80 rounded-[3rem] bg-gradient-to-br from-emerald-deep to-emerald-deep/80 shadow-2xl flex items-center justify-center overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/medical-tech/800/800')] opacity-20 mix-blend-overlay grayscale group-hover:scale-110 transition-transform duration-1000" />
              <ShieldCheck size={120} className="text-beige-soft/90 relative z-10" strokeWidth={1} />
              
              {/* Animated Inner Glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-tr from-gold-muted/20 to-transparent"
              />
            </motion.div>
          </ParallaxLayer>

          {/* Floating Medical Icons with different depths */}
          <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={1.2} className="top-[15%] left-[10%]">
            <FloatingElement icon={Stethoscope} delay={0} duration={5} size={32} color="text-emerald-deep" />
          </ParallaxLayer>

          <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={0.8} className="bottom-[20%] left-[15%]">
            <FloatingElement icon={HeartPulse} delay={1} duration={6} size={28} color="text-gold-muted" />
          </ParallaxLayer>

          <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={1.5} className="top-[25%] right-[10%]">
            <FloatingElement icon={Microscope} delay={2} duration={7} size={30} color="text-emerald-deep" />
          </ParallaxLayer>

          <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={0.9} className="bottom-[15%] right-[20%]">
            <FloatingElement icon={Dna} delay={1.5} duration={5.5} size={34} color="text-gold-muted" />
          </ParallaxLayer>

          <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={1.8} className="top-[50%] -right-[5%]">
            <FloatingElement icon={Activity} delay={0.5} duration={4.5} size={24} color="text-emerald-deep" />
          </ParallaxLayer>

          {/* Abstract Floating Shapes */}
          <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={2.2} className="top-[10%] right-[30%]">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-4 h-4 rounded-full bg-gold-muted"
            />
          </ParallaxLayer>

          <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={1.4} className="bottom-[40%] left-[5%]">
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="w-6 h-6 rounded-full bg-emerald-deep"
            />
          </ParallaxLayer>

          {/* Heart Rate Line Animation */}
          <ParallaxLayer mouseX={mouseX} mouseY={mouseY} depth={0.5} className="bottom-[10%] left-[30%] right-[30%]">
            <svg width="100%" height="60" viewBox="0 0 200 60" fill="none" className="opacity-20">
              <motion.path
                d="M0 30H40L50 10L60 50L70 30H110L120 10L130 50L140 30H200"
                stroke="currentColor"
                strokeWidth="2"
                className="text-emerald-deep"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </ParallaxLayer>
        </div>
      </main>

      {/* Footer / Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-deep/30 group-hover:text-emerald-deep/60 transition-colors">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-emerald-deep/30 to-transparent group-hover:from-emerald-deep/60 transition-colors"
        />
      </motion.div>

      {/* Services Section (to enable scrolling) */}
      <section className="relative z-10 bg-white py-32 px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-emerald-deep mb-6">Our Specialized Care</h2>
            <p className="text-emerald-deep/60 max-w-2xl mx-auto">Discover our range of premium medical services tailored to your unique health needs.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Precision Diagnostics", icon: Microscope, desc: "Advanced imaging and laboratory services for accurate health assessments." },
              { title: "Concierge Medicine", icon: ShieldCheck, desc: "Personalized, 24/7 access to your dedicated medical team." },
              { title: "Longevity Programs", icon: Activity, desc: "Evidence-based strategies to optimize your health span and vitality." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 rounded-[2rem] bg-beige-soft/50 border border-emerald-deep/5 hover:border-emerald-deep/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-deep/5 flex items-center justify-center text-emerald-deep mb-6 group-hover:bg-emerald-deep group-hover:text-beige-soft transition-all">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-serif text-emerald-deep mb-4">{service.title}</h3>
                <p className="text-emerald-deep/60 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}