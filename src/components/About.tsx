'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

const About = () => {
  const education = [
    {
      degree: "Certified IT Analyst",
      school: "NPower Canada",
      location: "Vancouver, Canada",
      period: "Sep 2023 - Des 2023",
      icon: GraduationCap
    },
    {
      degree: "Bachelor's degree in Information Systems and Technologies",
      school: "Vladimir State University",
      location: "Vladimir, Russia",
      period: "Sep 2012 - Jul 2017",
      icon: GraduationCap
    }
  ]

  const achievements = [
        "Project Management Professional (PMP)",
        "Professional Scrum Product Owner I (PSPO I)",
        "Professional Scrum Master I (PSM I)",
        "Professional Agile Leadership I (PAL I)"
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
      <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          About <span className="section-heading-accent">Me</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
        
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate Technical Product Manager who builds technology solutions that solve real problems for businesses and users in the fintech space.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Background</h3>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                I began my career in Russia, where I developed a strong foundation in systems 
                analysis, business processes, and user interaction. I quickly advanced to senior 
                roles, deepening my expertise in ERP and CRM systems. In recent years, I’ve focused 
                on managing technical products - from designing microservice architectures and 
                integrations to launching large-scale CRM systems from scratch in the banking sector.
              </p>
              <p className="leading-relaxed">
                My key competencies include working with APIs, microservices, databases, gathering and 
                analyzing requirements, managing releases, and organizing team workflows. I have hands-on 
                experience with ECM (IBM FileNet), ERP (Microsoft Dynamics Axapta, SAP, Oracle NetSuite, Sage Intaact), CRM systems, 
                and high-load API gateways. I’ve led cross-functional teams (development - frontend and backend, 
                QA, analytics) within a Scrum framework, and regularly facilitate all core Agile ceremonies, 
                including planning sessions, daily stand-ups, and retrospectives. 
              </p>
              <p className="leading-relaxed">
                A couple of years ago, I moved to Canada to continue my professional growth and 
                gain a deeper understanding of banking products and payment solutions in the North American market. 
                I currently work as a Technical Product Manager at FISPAN - a fintech company partnering with 
                leading North American banks to integrate financial services and payement solutions into ERP systems.
                I value direct and constructive communication and always work to bridge the gap 
                between technical and business teams. I focus on delivering results that matter - 
                not just for the product, but for the people building it.
              </p>
            </div>
          </motion.div>

          {/* Education & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-lg card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <edu.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{edu.degree}</h4>
                        <p className="text-gray-600 mb-2">{edu.school}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Achievements & Certifications</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 