'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, BarChart3, Settings, Workflow, Blocks, Rocket, Shield, Landmark, ShieldCheck } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: Rocket,
      skills: ["Product Vision", "Product Strategy", "Stakeholder Management", "UI/UX", "MVP Definition", "Product Leadership", "Product Delivery", "System Analysis", "Business Analysis", "Product Launch", "User Journey Mapping"]
    },
    {
      title: "Processes & Methodologies",
      icon: Workflow,
      skills: ["Agile", "Scrum", "Kanban", "ITIL", "Software Development Lifecycle", "Product Lifecycle Management", "Waterfall"]
    },
    {
      title: "Fintech and Banking",
      icon: Landmark,
      skills: ["ACH", "Wire Payments", "SWIFT", "Payment Rails", "Bank API Integration", "BAI2", "NACHA", "ISO 20022", "Information Reporting", "Bank Feeds"]
    },
    
    {
      title: "Databases & Formats",
      icon: Database,
      skills: ["JSON", "XML", "YAML", "CSV", "PostgreSQL", "Microsoft SQL Server", "MongoDB","Redis", "Elasticsearch"]
    },
    {
      title: "Architecture & Integrations",
      icon: Blocks,
      skills: ["Microservices Architecture", "Monolithic Architecture", "API Gateway", "Kafka", "RabbitMQ", "IBM FileNet"]
    },
    {
      title: "APIs & Protocols",
      icon: Code,
      skills: ["REST API", "GraphQL API", "gRPC", "SFTP", "SOAP", "Webhooks", "WebSockets", "OpenAPI" ]
    },
    {
      title: "ERPs & CRMs",
      icon: BarChart3,
      skills: ["Microsoft Dynamix Axapta", "SAP", "Oracle NetSuite", "Sage Intacct", "Siebel CRM", "Creatio CRM"]
    },
    {
      title: "Tools",
      icon: Settings,
      skills: ["Jira", "Confluence", "Wrike", "Excalidraw", "Miro", "Lucidchart", "Draw.io", "DBDiagram.io", "Figma", "Archbee", "Swagger","SoapUI", "Postman", "GitHub", "Visual Studio Code", "MS Visio"]
    },
    {
      title: "Security & Access Control",
      icon: ShieldCheck,
      skills: ["JWT", "Authentication", "API Keys", "Authorization", "OAuth2", "RBAC", "ABAC"]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Technical <span className="section-heading-accent">Skills</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            My expertise spans across various technologies and tools in the system analysis and product management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Additional Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Deep expertise in product management and business analysis with 8+ years of hands-on experience across the full software development lifecycle</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Proficient in Agile and Scrum methodologies; experience working in cross-functional teams</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Solid understanding of web and client-server application architecture, including integration approaches using SFTP and REST/GraphQL APIs</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Recognized for proposing and implementing creative solutions to improve integrations and EDI workflows
</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Proficient in application implementation and delivery, including leading development projects from scratch</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Strong communication and interpersonal skills; known as a reliable team player and mentor to junior colleagues</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Hands-on experience in modeling and optimizing business processes using MS Visio, and Draw.io
</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Continuously engaged in professional development to stay up to date with industry trends and best practices</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 