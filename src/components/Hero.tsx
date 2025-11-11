'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Sparkles, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import profilePhoto from './profile-photo.jpg'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = [
    'Technical Product Manager',
    'Product Manager',
    'Senior Technical Product Manager',
    'Senior Product Manager'
  ]

  useEffect(() => {
    const currentRoleText = roles[currentRole]
    
    if (isDeleting) {
      // Deleting effect
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }
    } else {
      // Typing effect
      if (displayText.length < currentRoleText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    }
  }, [displayText, currentRole, isDeleting, roles])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8 border border-blue-200"
        >
          <Sparkles size={16} />
          Available for opportunities
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end items-start"
          >
            <div className="relative -mt-2">
              {/* Profile Photo */}
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={profilePhoto}
                  alt="Alina Iarkeeva"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full opacity-20"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Alina Iarkeeva
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 min-h-[3rem]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
            {/* ... rest of your content ... */}
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <a
            href="mailto:yarkalina@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
          >
            <Mail size={20} className="text-blue-600 group-hover:text-blue-700" />
            <span className="text-gray-700 group-hover:text-blue-700 font-medium">yarkalina@gmail.com</span>
          </a>
          
          <a
            href="tel:+12368831982"
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
          >
            <Phone size={20} className="text-blue-600 group-hover:text-blue-700" />
            <span className="text-gray-600 group-hover:text-blue-700 font-medium">+1 (236) 883 1982</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/alina-product-manager"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
          >
            <Linkedin size={20} className="text-blue-600 group-hover:text-blue-700" />
            <span className="text-gray-700 group-hover:text-blue-700 font-medium">LinkedIn</span>
          </a>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Me
          </button>
          
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View My Projects
          </button>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-200"
        >
          <MapPin size={16} className="text-gray-600" />
          <span className="text-gray-700 font-medium">Vancouver, BC, Canada</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 