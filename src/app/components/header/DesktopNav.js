"use client"
import Link from 'next/link';
import { Dropdown } from './Dropdown';

export const DesktopNav = ({ navLinks }) => (
  <div className="hidden xl:flex items-center gap-6">
    {navLinks.map((link, i) => (
      link.dropdown ? <Dropdown key={i} title={link.label} items={link.dropdown} /> :
      <Link key={i} href={link.path} className="text-slate-600 hover:text-brand-primary font-medium py-2">{link.label}</Link>
    ))}
    <Link href="/appointment-request" className="btn-primary ml-4 shadow-md">Appointment Request</Link>
  </div>
);