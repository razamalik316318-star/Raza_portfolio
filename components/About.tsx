'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Rocket,
  BadgeCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

const differentiators: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Code2,
    title: 'SwiftUI & UIKit mastery',
    description:
      'Deep expertise in both modern SwiftUI and legacy UIKit, enabling me to build new features efficiently while maintaining and migrating older codebases with confidence.',
  },
  {
    icon: Rocket,
    title: 'AI integration experience',
    description:
      'Hands-on experience integrating AI models into production iOS apps, delivering intelligent user experiences and predictive features that go beyond standard mobile functionality.',
  },
  {
    icon: BadgeCheck,
    title: 'Firebase & real-time data',
    description:
      'Proficient in Firebase integrations for authentication, Firestore, and real-time updates — building apps that stay fast and in sync across devices.',
  },
  {
    icon: Sparkles,
    title: 'Offline-first architecture',
    description:
      'Experienced with Core Data, Swift Data, and SQL-backed local storage strategies that keep apps functional and fast even without a network connection.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know more about my journey, expertise, and what drives me
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Main Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-xl border border-primary-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am{' '}
                <span className="text-primary-400 font-semibold">
                  Malik Muhammad Raza
                </span>
                , an experienced{' '}
                <span className="text-primary-400 font-semibold">iOS Developer</span>{' '}
                with over{' '}
                <span className="text-primary-400">5.0 years</span> in mobile app
                development. I specialize in{' '}
                <span className="text-primary-400">SwiftUI</span>,{' '}
                <span className="text-primary-400">UIKit</span>, and{' '}
                <span className="text-primary-400">Objective-C</span>, building
                high-performance iOS apps that deliver user-friendly experiences.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I have worked on impactful products ranging from digital health
                platforms (asthma &amp; COPD management) to food delivery apps and
                advanced photo-sharing experiences. My expertise spans AI model
                integration, Firebase, Core Data, and App Store delivery — with a
                strong focus on performance, offline-first architecture, and clean
                code.
              </p>
              <h4 className="text-lg font-semibold text-gray-100 mb-3">
                Specialties
              </h4>
              <ul className="text-gray-300 text-sm leading-relaxed space-y-2 list-disc list-inside marker:text-primary-400">
                <li>
                  <span className="font-medium text-gray-200">SwiftUI &amp; UIKit:</span>{' '}
                  Building polished, performant interfaces for all Apple platforms.
                </li>
                <li>
                  <span className="font-medium text-gray-200">Objective-C:</span>{' '}
                  Maintaining and migrating legacy codebases with confidence.
                </li>
                <li>
                  <span className="font-medium text-gray-200">AI Integration:</span>{' '}
                  Embedding AI models for intelligent features and predictive UX.
                </li>
                <li>
                  <span className="font-medium text-gray-200">Firebase:</span>{' '}
                  Real-time data sync, authentication, and cloud storage.
                </li>
                <li>
                  <span className="font-medium text-gray-200">Core Data &amp; Swift Data:</span>{' '}
                  Efficient local storage and offline-first app architectures.
                </li>
                <li>
                  <span className="font-medium text-gray-200">REST API Integration:</span>{' '}
                  Streamlined API design patterns and robust network layers.
                </li>
                <li>
                  <span className="font-medium text-gray-200">Automated Testing:</span>{' '}
                  Improving app stability and reducing post-release issues.
                </li>
                <li>
                  <span className="font-medium text-gray-200">WatchOS:</span>{' '}
                  Extending iOS apps to Apple Watch for enhanced user experiences.
                </li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-xl border border-primary-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">What I Do</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                With hands-on expertise in{' '}
                <span className="text-primary-400">offline-first flows</span>,{' '}
                <span className="text-primary-400">push notifications</span>,{' '}
                <span className="text-primary-400">background tasks</span>, and{' '}
                <span className="text-primary-400">instrumentation</span> for
                crashes and analytics, I deliver apps that stay fast, stable, and
                aligned with Apple Human Interface Guidelines.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 md:p-8 rounded-xl border border-primary-500/20 h-full">
              <h4 className="text-2xl font-bold text-gray-100 mb-2">
                What Sets Me Apart
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xl">
                A focused view of the strengths that make my iOS work stand out —
                from architecture decisions to shipping polished, production-ready apps.
              </p>
              <div className="space-y-5">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-dark-700/30 hover:bg-dark-700/50 border border-transparent hover:border-primary-500/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-500/20 to-primary-600/20 flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                      <item.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="min-w-0">
                      <h5 className="font-semibold text-gray-100 mb-2 text-base md:text-lg">
                        {item.title}
                      </h5>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
