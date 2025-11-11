'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: "Fispan",
      position: "Technical Product Manager",
      period: "Dec 2024 – Present",
      location: "Vancouver, Canada",
      achievements: [
        "Developed key project documents for Domestic Wire and Cash Management services for one of the largest European bank in a very tight timeframe, enabling a fast project launch and immediate start of development.",
        "Led the development and implementation of Positive Pay and Information Reporting solutions for a leading U.S. bank within 4 months, integrated with Microsoft BC and Sage Intacct ERPs.",
        "Implemented standardized requirements documentation, providing improved analysis to development and QA teams.",
        "Implemented Miro tool with boards for retrospectives and task estimation, along with icebreaking activities, enhancing team engagement and collaboration."
      ]
    },
    {
      company: "T1 Group",
      position: "Tehnical Product Manager",
      period: "Apr 2021 – Oct 2024",
      location: "Moscow, Russia",
      achievements: [
        "Led design and implementation of system administration modules for a modular CRM platform adopted by 5+ major CIS banks.",
        "Led the development of a high-load corporate API gateway, routing and validating all inbound and outbound traffic for over 150 microservices.",
        "Led the design and documentation of the Omnichannel CRM platform architecture, covering over 50 microservices and multiple external integrations using REST APIs.",
        "Successfully contributed to the development and launch of the Omnichannel CRM platform, designed to support 25,000+ concurrent users with high availability (24/7), fully replacing legacy CRM systems in VTB Bank.",
        "Received official recognition from VTB Bank for delivering high-quality analysis under tight deadlines, contributing to the VTB-Pro omnichannel application development."
      ]
    },
     {
      company: "RSHB Intech",
      position: "Technical Product Manager",
      period: "Feb 2020 – Apr 2021",
      location: "Moscow, Russia",
      achievements: [
        "Led and coordinated cross-functional teams to deliver the ECM system on IBM FileNet on schedule, ensuring alignment with business objectives and user needs.",
        "Defined product requirements and created solution documentation that guided the successful launch of a new corporate ECM system.",
        "Performed GAP analysis and proposed a more efficient tape storage solution, reducing infrastructure expenses."
      ]
    },
    {
      company: "ABI Product",
      position: "Senior Business System Analyst",
      period: "Sep 2017 – Feb 2020",
      location: "Vladimir, Russia",
      achievements: [
        "Promoted to a senior-level role within one year, based on consistently exceeding performance goals and KPIs.",
        "Reduced annual paper-related costs by implementing electronic data interchange in Microsoft Axapta, SAP, and 1C ERPs.",
        "Improved document management productivity through enhancement of electronic data interchange functionality in Microsoft Dynamics Axapta.",
        "Increased the number of company partners integrated with electronic document interchange functionality by 80% within one year."
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Work <span className="section-heading-accent">Experience</span>
        </motion.h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            My professional journey in product management and systems analysis
          </p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-800">{exp.company}</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-700 mb-2">{exp.position}</h4>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-gray-800 text-lg">Key Achievements:</h5>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: achievementIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700 leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 