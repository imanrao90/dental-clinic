"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const MobileDropdown = ({ title, items, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between w-full py-3 text-xl font-semibold border-b">
        {title} <ChevronDown size={20} className={`${isOpen ? 'rotate-180' : ''} transition-transform`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-slate-50"
          >
            {items.map((item, idx) => (
              <Link key={idx} href={item.path} onClick={closeMenu} className="block py-3 px-6 text-slate-600 hover:text-brand-primary border-b">
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};