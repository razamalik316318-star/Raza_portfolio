/*
'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

const experiences = [
  {
    title: 'iOS Developer',
    company: 'AI For LYF',
    tagline:
      'Digital health platform for managing asthma and COPD — building intelligent mobile experiences.',
    location: 'Lahore, Pakistan',
    period: '03/2023 - 11/2025',
    duration: '2+ Years',
    paragraphs: [
      'As an iOS Developer at AI For LYF, responsible for designing, developing, and optimizing innovative mobile applications.',
      'Developed and maintained multiple iOS applications with modern SwiftUI and Swift frameworks, ensuring high performance and scalability. Successfully integrated AI models for intelligent user experiences and predictive features.',
      'Streamlined Firebase and API integrations, enhancing data synchronization and real-time updates. Implemented Swift Data, Core Data and SQL solutions for efficient local storage and offline functionality.',
    ],
    focusAreas: [
      'Developed and maintained multiple iOS applications with SwiftUI and Swift frameworks',
      'Successfully integrated AI models for intelligent user experiences and predictive features',
      'Streamlined Firebase and API integrations for real-time data synchronization',
      'Implemented Swift Data, Core Data and SQL for efficient local storage and offline functionality',
    ],
  },
  {
    title: 'iOS Developer',
    company: 'XD-Studio',
    tagline:
      'Mobile app studio — delivering polished iOS experiences with SwiftUI, UIKit, and modern API integrations.',
    location: 'Lahore, Pakistan',
    period: '11/2021 - 01/2023',
    duration: '1+ Year',
    paragraphs: [
      'Developed iOS applications using SwiftUI, UIKit, API integration, and SQL.',
      'Designed and implemented efficient UI/UX components, improving user engagement. Built modern, streamlined API integration processes, enhancing app connectivity and stability.',
      'Successfully delivered key features within tight deadlines, ensuring timely product releases. Introduced automated testing and debugging strategies, improving app stability and reducing post-release issues.',
    ],
    focusAreas: [
      'Designed and implemented efficient UI/UX components, improving user engagement',
      'Built modern, streamlined API integration processes enhancing app connectivity',
      'Successfully delivered key features within tight deadlines',
      'Introduced automated testing and debugging strategies, reducing post-release issues',
    ],
  },
];

const highlights = [
  {
    title: 'AI-powered health apps',
    description:
      'Built LYF Suite, a digital health platform helping users manage asthma and COPD with smart health insights.',
  },
  {
    title: 'Modern Swift development',
    description:
      'Proficient in SwiftUI, UIKit, and Objective-C with a strong focus on performance and scalability.',
  },
  {
    title: 'Firebase & API expertise',
    description:
      'Hands-on experience integrating Firebase and RESTful APIs for real-time data and offline-first flows.',
  },
  {
    title: 'App Store–ready delivery',
    description:
      'Consistent track record of delivering polished, tested, and stable iOS apps on schedule.',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-dark-800/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            4+ years of iOS development across health-tech and product studios — shipping apps that users love.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-xl mb-6 relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-400 mb-2">
                      <Briefcase className="w-5 h-5 flex-shrink-0" />
                      <span className="font-semibold text-lg">{exp.company}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-3">
                      {exp.tagline}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-gray-400 text-sm">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-primary-500/20 rounded-lg border border-primary-500/30 self-start shrink-0">
                    <span className="text-primary-400 font-semibold text-sm sm:text-base">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="border-t border-primary-500/10 pt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
                    Role &amp; narrative
                  </h4>
                  <div className="space-y-5">
                    {exp.paragraphs.map((paragraph, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        className="text-gray-300 leading-relaxed"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-primary-500/10 pt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
                    Scope &amp; strengths
                  </h4>
                  <ul className="space-y-3">
                    {exp.focusAreas.map((item, fIdx) => (
                      <motion.li
                        key={fIdx}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: fIdx * 0.06 }}
                        className="flex items-start gap-3 text-gray-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlights Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-gray-100 mb-6">
                Key Highlights
              </h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-l-2 border-primary-500/50 pl-4"
                  >
                    <h4 className="font-semibold text-gray-100 mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect p-6 rounded-xl bg-gradient-to-br from-primary-500/10 to-primary-600/10 border-primary-500/30"
            >
              <h3 className="text-xl font-bold text-gray-100 mb-4">
                What I Bring
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-400" />
                  <span>4+ years iOS development experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-400" />
                  <span>SwiftUI, UIKit &amp; Objective-C expertise</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-400" />
                  <span>AI model integration &amp; Firebase</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-400" />
                  <span>Core Data, Swift Data &amp; SQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-400" />
                  <span>Automated testing &amp; App Store delivery</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
*/
