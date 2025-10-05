'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yarkalina@gmail.com",
      href: "mailto:yarkalina@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (236) 883 1982",
      href: "tel:+12368831982"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vancouver, BC, Canada",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "alina-iarkeeva",
      href: "https://www.linkedin.com/in/alina-product-manager"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Code Projects",
      href: "https://github.com/yarkalina"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Get In <span className="section-heading-accent">Touch</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 group border border-gray-100"
            >
              <div className="flex-shrink-0">
                <info.icon className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{info.label}</p>
                <p className="text-gray-600">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact 