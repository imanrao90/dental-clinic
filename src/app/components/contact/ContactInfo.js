"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import ContactDetailsItem from "./ContactDetailsItem"
import HoursCard from "./HoursCard"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        Get In Touch
      </h2>

      <div className="space-y-8">
        <ContactDetailsItem
          icon={<Phone size={24} />}
          title="Phone"
          content="832-427-1901"
        />
        <ContactDetailsItem
          icon={<Mail size={24} />}
          title="Email"
          content="info@dentalclinicsoftexas.com"
        />
        <ContactDetailsItem
          icon={<MapPin size={24} />}
          title="Location"
          content={
            <>
              17440 FM 529 Rd, Suite 100 <br />
              Houston, Texas 77095
            </>
          }
        />
      </div>

      <HoursCard />
    </motion.div>
  )
}