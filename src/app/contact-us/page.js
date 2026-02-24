"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import ContactHero from "../components/contact/ContactHero"
import ContactInfo from "../components/contact/ContactInfo"
import ContactForm from "../components/contact/ContactForm"

export default function ContactUsPage () {
  return(
  <div className="bg-white">
    <ContactHero/>

    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <ContactInfo/>
        <ContactForm/>
      </div>
    </section>
  </div>
  )
}