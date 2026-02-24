"use client"
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TopBar } from './header/TopBar';
import { Logo } from './header/Logo';
import { MobileDropdown } from './header/MobileDropdown';
import { DesktopNav } from './header/DesktopNav';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  const navLinks = [
    { label: 'Welcome', path: '/' },
    { label: 'About Us', dropdown: [{ label: 'Our Dental Team', path: '/our-dental-team' }] },
    { label: 'Dental Hygiene', path: '/dental-hygiene' },
    { label: 'Hospital Dentistry', path: '/hospital-dentistry' },
    { label: 'Our Services', dropdown: [
      { label: 'Crowns', path: '/services/crowns' },
      { label: 'Emergency', path: '/services/emergency' },
      { label: 'SMART Fillings', path: '/services/smart-fillings' },
      { label: 'Oral Sedation', path: '/services/oral-sedation' },
      { label: 'Comprehensive Care', path: '/services/comprehensive-care' },
      { label: 'Special Health Needs', path: '/services/special-health-needs' },
      { label: 'Minimally Invasive Dentistry', path: '/services/minimally-invasive' },
      { label: 'Pediatric', path: '/services/pediatric' },
    ]},
    { label: 'Our Technology', dropdown: [
      { label: 'Panorex', path: '/technology/panorex' },
      { label: 'Intraoral Camera', path: '/technology/intraoral-camera' },
      { label: 'Digital X-Ray', path: '/technology/digital-x-ray' },
      { label: 'Anxiolysis', path: '/technology/anxiolysis' },
      { label: 'Nitrous Oxide', path: '/technology/nitrous-oxide' },
      { label: 'Sedation FAQ', path: '/technology/sedation-faq' },
    ]},
    { label: 'More', dropdown: [
      { label: 'Patient Resources', path: '/patient-resources' },
      { label: 'Videos', path: '/videos' },
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'Appointment Request', path: '/appointment-request' },
      { label: 'Contact Us', path: '/contact-us' },
      { label: 'Blog', path: '/blog-posts' },
      { label: 'Payment Options', path: '/payment-options' },
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Messaging Opt-In/Out Consent', path: '/messaging-consent' },
    ]}
  ];

  return (
    <>
      <TopBar />
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-2 shadow-lg' : 'bg-white py-4'}`}>
        <div className="max-w-[1400px] mx-auto px-4 flex justify-between items-center">
          <Logo />
          <DesktopNav navLinks={navLinks} />
          <button className="xl:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed inset-0 z-[60] bg-white overflow-y-auto">
            <div className="p-4 flex justify-between items-center border-b">
              <Logo />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-900"><X size={28} /></button>
            </div>
            <div className="p-6 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <a href="tel:8324271901" className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl text-brand-primary">
                  <Phone size={24} className="mb-2" /> <span className="text-xs font-bold">Call Us</span>
                </a>
                <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl text-brand-primary">
                  <MapPin size={24} className="mb-2" /> <span className="text-xs font-bold">Directions</span>
                </Link>
              </div>
              {navLinks.map((link, i) => (
                link.dropdown ?
                  <MobileDropdown key={i} title={link.label} items={link.dropdown} closeMenu={() => setIsMobileMenuOpen(false)} /> :
                  <Link key={i} href={link.path} onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-xl font-semibold border-b">{link.label}</Link>
              ))}
              <Link href="/appointment-request" className="btn-primary mt-6 text-center" onClick={() => setIsMobileMenuOpen(false)}>Appointment Request</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}