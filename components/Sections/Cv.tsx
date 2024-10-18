"use client"

import React from "react"
import { motion } from "framer-motion"

const cvData = {
  personalInfo: {
    name: "SIDY MOHAMED SALIM DIALLO",
    title: "STUDENT IN DATA AND SOFTWARE ENGINEERING",
    contacts: {
      phone: "+212 68 4499227",
      email: "sidymamadousalim@gmail.com",
      location: "Insea Al Irfane, Rabat, Morocco",
    },
    description:
      "Student in data and software engineering, passionate about entrepreneurship and technological innovation, with skills in programming and development of computer tools. I seek to contribute to ambitious projects to broaden my knowledge.",
  },
  skills: [
    {
      title: "Programming",
      details: "(Python, SQL, React, C)",
    },
    {
      title: "Database Management",
    },
    {
      title: "Data Analysis and Modeling",
    },
    {
      title: "Creativity and Innovation",
    },
    {
      title: "Autonomy and Rigor",
    },
    {
      title: "Adaptability and Mathematical Logic",
    },
  ],
  experience: [
    {
      title: "INTERNSHIP IN DEVELOPMENT OF COMPUTER TOOLS",
      company: "FST Fès, Department of Computer Science",
      date: "January 2024 - April 2024",
      description: [
        "Development of tools for managing the department's materials",
        "Implementation of an innovative solution to optimize internal processes",
        "Collaboration with a technical team to ensure the performance and reliability of the tool",
      ],
      technologies: "LARAVEL - LIVEWIRE - ALPINE JS - MYSQL - DOCKER",
    },
    {
      title: "CUSTOMER MANAGEMENT TOOL FOR A TRAVEL AGENCY",
      date: "2023",
      description: [
        "Design and development of a system allowing a travel agency to manage its customers and employees, optimize sales tracking, reservations, and customer interactions.",
      ],
      technologies: "NEXT JS - PRISMA - TALWIND CSS - TANSTACK QUERY - ZUSTAND",
    },
    {
      title: "PLATFORM FOR A TOURISM AGENCY IN SENEGAL",
      date: "2020 - 2021",
      description: [
        "Development of a complete platform for managing reservations, customers, and tourist offers, facilitating the management of operations for a tourism agency in Senegal.",
      ],
      technologies: "NEXT JS - PRISMA - TALWIND CSS - TANSTACK QUERY - ZUSTAND",
    },
  ],
  education: [
    {
      degree: "ENGINEER IN DATA AND SOFTWARE ENGINEERING",
      school: "INSEA, Rabat",
      date: "2024 - currently",
    },
    {
      degree: "DEUST IN MATHEMATICS, COMPUTER SCIENCE, AND PHYSICS",
      school: "FST - University Sidi Mohamed Ben Abdallah, Fès",
      date: "2021 - 2024",
      achievements: ["Honors", "Success in the INSEA engineer competition"],
    },
    {
      degree: "BACHELOR OF SCIENCE IN MATHEMATICS",
      school: "GS Tely Diallo, Mamou",
      date: "2018 - 2021",
      achievements: [
        "Graduated with honors",
        "Winner and Scholarship holder of the Guinean and Moroccan States (Merit Scholarship)",
      ],
    },
  ],
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="mb-4 text-xl font-bold text-blue-800 dark:text-blue-400">
      {title}
    </h2>
    {children}
  </motion.div>
)

const SkillsGrid: React.FC<{ skills: typeof cvData.skills }> = ({ skills }) => (
  <div className="grid grid-cols-2 gap-2">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="p-2 text-white bg-blue-700 rounded transition-colors dark:bg-blue-900 hover:bg-blue-600 dark:hover:bg-blue-800"
      >
        <p className="text-sm">{skill.title}</p>
        {skill.details && <p className="text-xs opacity-80">{skill.details}</p>}
      </div>
    ))}
  </div>
)

const ExperienceItem: React.FC<{
  experience: (typeof cvData.experience)[0]
}> = ({ experience }) => (
  <div className="mb-6">
    <h3 className="font-semibold text-blue-900 dark:text-blue-400">
      {experience.title}
    </h3>
    {experience.company && (
      <p className="text-gray-600 dark:text-gray-300">{experience.company}</p>
    )}
    <p className="text-sm text-gray-500 dark:text-gray-400">
      {experience.date}
    </p>
    <ul className="mt-2 list-disc list-inside">
      {experience.description.map((desc, index) => (
        <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
          {desc}
        </li>
      ))}
    </ul>
    {experience.technologies && (
      <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
        Technologies used : {experience.technologies}
      </p>
    )}
  </div>
)

export const CV: React.FC = () => {
  return (
    <div className="p-8 mx-auto max-w-4xl bg-white transition-colors duration-200 dark:bg-gray-900">
      {/* Header */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-400">
          {cvData.personalInfo.name}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {cvData.personalInfo.title}
        </p>
        <div className="flex gap-4 justify-center mt-4 text-sm text-gray-600 dark:text-gray-400">
          <span>{cvData.personalInfo.contacts.phone}</span>
          <span>{cvData.personalInfo.contacts.email}</span>
          <span>{cvData.personalInfo.contacts.location}</span>
        </div>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          {cvData.personalInfo.description}
        </p>
      </motion.div>

      {/* Skills */}
      <Section title="PROFESSIONAL SKILLS">
        <SkillsGrid skills={cvData.skills} />
      </Section>

      {/* Experience */}
      <Section title="EXPERIENCE">
        {cvData.experience.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </Section>

      {/* Education */}
      <Section title="EDUCATION">
        {cvData.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-blue-900 dark:text-blue-400">
              {edu.degree}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {edu.date}
            </p>
            {edu.achievements && (
              <ul className="mt-2 list-disc list-inside">
                {edu.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-700 dark:text-gray-300"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Section>
    </div>
  )
}
