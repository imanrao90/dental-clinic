"use client"
import { Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export const TopBar = () => (
  <div className="bg-blue-950 text-white py-2 px-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm">
      <div className="flex gap-4 md:gap-6 items-center">
        <a href="tel:8324271901" className="flex items-center gap-2 font-bold hover:text-brand-primary">
          <Phone size={14} /> <span className="hidden xs:inline">832-427-1901</span>
        </a>
        <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
        <a href="https://www.dentalclinicsoftexas.com/storage/app/media/Patient-Referral-Form.pdf" target="_blank" rel="noopener noreferrer"
           className="hidden sm:flex items-center gap-2 hover:text-brand-primary font-medium">
          Referral Form
        </a>
        <div className="h-4 w-px bg-white/20 hidden lg:block"></div>
        <div className="hidden lg:flex items-center gap-2">
          <Clock size={14} /> Mon - Fri: 9:00 AM - 6:00 PM
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="hidden md:flex gap-4 items-center">
          <span className="text-white/60 mr-2">Follow Us:</span>
          <Link href="https://www.facebook.com/DentalClinicsofTX"><Facebook size={16} /></Link>
          <Link href="https://www.instagram.com/dentalclinicsoftexas"><Instagram size={16} /></Link>
          <Link href="https://x.com/DentalClinicsTX"><Twitter size={16} /></Link>
        </div>
        <Link href="/appointment-request" className="lg:hidden bg-blue-400 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
          Book Now
        </Link>
      </div>
    </div>
  </div>
);