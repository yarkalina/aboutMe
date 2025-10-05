'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Database, BarChart3, Shield, Truck, FileText, FileStack, Monitor, MonitorCheck, FolderTree } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Corporate API Gateway",
      description: "The goal of the project was to design and implement an API Gateway solution that would serve as a unified entry point for all internal and external API calls across the organization.",
      tools: ["Java (Spring Boot)", "Quarkus", "Kubernetes", "PostgreSQL", "Redis", "Kafka", "Microservices Architecture"],
      icon: Shield,
      highlights: [
        "Defined the architecture and technical requirements of the API Gateway",
        "Collaborated with cross-functional teams including backend, frontend, security, and DevOps",
        "Led development of a high-load API Gateway for 150+ microservices",
        "Supported post-launch monitoring, incident management, and continuous improvement initiatives"
      ]
    },
    {
      title: "Directory Module for CRM",
      description: "The goal of the project was to build a universal module for creating and managing directories used across the system’s user interface - such as dropdowns, catalogs, and other selection components. The module provides centralized control over directory data and simplifies administration.",
      tools: ["Java (Spring Boot)", "Quarkus", "Angular frontend", "Kubernetes", "PostgreSQL", "Redis", "Kafka", "Microservices Architecture"],
      icon: FolderTree,
      highlights: [
        "Designed the directory concept: entity types, data structures, and relationships between lists",
        "Participated in the design and approval of UI mockups for the module",
        "Coordinated work between developers, and QA specialists",
        "Designed API contracts for integration with other system components",
        "Conducted internal reviews and client-facing demos of core functionality"
      ]
    },
    {
      title: "Role-Based Access Control Module for CRM",
      description: "The goal of the project is to build a role-based access control module for a CRM system that manages user permissions at different levels - for internal users (employees) and external users (clients and partners). The module provides centralized permission management, supports role hierarchies, and meets information security requirements.",
      tools: ["Java Spring Boot", "Quarkus", "Angular frontend", "Kubernetes", "S3", "Microservices Architecture", "PostgreSQL", "OpenSearch"],
      icon: Database,
      highlights: [
        "Designed the RBAC concept: access levels, role types, permission matrices, delegation logic",
        "Collaborated with architects and developers to define system architecture",
        "Described user flows and system-level functional requirements",
        "Prepared detailed technical documentation (APIs, data models, business logic)",
        "Defined integration points with other modules (organizational structure, service providers, directories)",
        "Conducted internal reviews and client-facing demos of core functionality"
      ]
    },
    {
      title: "Omnichannel CRM Platform Development",
      description: "The goal of the project was to build an omnichannel CRM platform that unified all user interaction channels into a single system and replace the legacy Siebel CRM system with a modern, internally developed solution that is more flexible, reliable, and fully controlled by the organization.",
      tools: ["Java (Spring Boot)", "JavaScript (React)", "Microservices Architecture", "OpenShift", "Kubernetes", "PostgreSQL", "Elasticsearch"],
      icon: MonitorCheck,
      highlights: [
        "Designing the system architecture (visualized using Draw.io)",
        "Collecting and analyzing business requirements; preparing full project documentation",
        "Designing the ERD of system entities",
        "Designing system REST APIs for internal and external integrations",
        "Creating logging and audit templates for user activity tracking",
        "Gathering and documenting information security requirements",
        "Preparing detailed functional and non-functional specifications"
      ]
    },
    {
      title: "Corporate ECM System Development",
      description: "The goal of the project was to develop a corporate Enterprise Content Management system to streamline document management and automate business processes related to corporate content.",
      tools: [" IBM FileNet architecture"],
      icon: FileStack,
      highlights: [
        "Conducting R&D on IBM FileNet capabilities and integration",
        "Gathering and defining functional and non-functional requirements",
        "Preparing detailed project documentation and specifications",
        "Participating in functional and integration testing of the system",
        "Designing RESTful APIs to support content management workflows"
      ]
    },
    {
      title: "EDI Implementation",
      description: "The goal of the project was to implement Electronic Data Interchange to automate office workflows, accelerate business processes and reduce manual, routine tasks for employees",
      tools: ["Microsoft Dynamics Axapta", "Microsoft SQL Server"],
      icon: FileText,
      highlights: [
        "Designing a new EDI module in ERP - Microsoft Dynamics Axapta 2012",
        "Introducing new electronic document types such as Orders, Order Completion Notifications, Dispatch Notifications, and Invoices",
        "Integrating distributors into the EDI system by connecting customers to the EDI system according to their requirements and ptimizing customer distribution among EDI providers.",
        "Preparing project documentation, including instructions and user manuals",
        "Coordinating and negotiating with EDI service providers, including Commarch EDI, Kontur Diadoc, and KORUS CIS",
        "Conducting testing of the newly developed EDI components to ensure quality and functionality"
      ]
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Featured <span className="section-heading-accent">Projects</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my key projects and technical achievements in product management and system analysis
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 card-hover"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <project.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                </div>
              </div>

              {/* Tools */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">The solution was implemented using the following technology stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. Let's connect 
              and explore how we can work together to create meaningful, user-centered products 
              that solve complex challenges and drive real business outcomes.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 