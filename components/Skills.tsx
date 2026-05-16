'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Cloud,
  Cpu,
  Smartphone,
  GitBranch,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'iOS & Swift',
    icon: Smartphone,
    skills: [
      'Swift',
      'SwiftUI',
      'Objective-C',
      'UIKit',
      'Auto Layout',
      'Combine',
      'async/await',
      'Concurrency',
      'Widgets',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Architecture & APIs',
    icon: Code,
    skills: [
      'MVVM',
      'Coordinator',
      'Dependency injection',
      'REST APIs',
      'GraphQL',
      'URLSession',
      'Codable',
      'Modular features',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Data & Quality',
    icon: Database,
    skills: [
      'Core Data',
      'Realm',
      'Keychain',
      'Caching',
      'XCTest',
      'Unit tests',
      'UI tests',
      'Snapshots',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Platform & Release',
    icon: Cloud,
    skills: [
      'App Store Connect',
      'TestFlight',
      'Provisioning',
      'Push notifications',
      'Background modes',
      'Localization',
      'Accessibility',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Performance & Tooling',
    icon: Cpu,
    skills: [
      'Instruments',
      'Memory & leaks',
      'Launch time',
      'Instruments Time Profiler',
      'MetricKit',
      'Crash reports',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Tools & Delivery',
    icon: GitBranch,
    skills: [
      'Xcode',
      'Git & GitHub',
      'SPM',
      'CocoaPods',
      'Fastlane',
      'CI/CD',
      'Jira',
      'Code review',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            iOS-focused skills from product UI to App Store release
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative rounded-xl p-[2px] overflow-hidden"
            >
              {/* Animated gradient travels around the card edge on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              >
                <div
                  className="absolute left-1/2 top-1/2 h-[220%] w-[220%] min-h-[12rem] min-w-[12rem] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,#0ea5e9,#8b5cf6,#22d3ee,#c026d3,#a855f7,#0ea5e9)] animate-[spin_3.5s_linear_infinite] motion-reduce:animate-none [animation-play-state:paused] group-hover:[animation-play-state:running]"
                />
              </div>

              <div className="relative z-10 flex h-full flex-col rounded-[11px] border border-dark-700/60 bg-dark-900/95 p-6 backdrop-blur-md">
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1.5 bg-dark-700/50 rounded-lg text-sm text-gray-300 border border-dark-600/50 hover:border-primary-500/50 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
