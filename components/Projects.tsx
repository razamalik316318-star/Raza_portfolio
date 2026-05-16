'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Food App',
    description:
      'Native iOS nutrition companion with AI plate scanning—snap meals for instant ingredient and calorie estimates, subscription-ready paywall, scan history, and a calorie and water dashboard.',
    fullDescription:
      'Designed and built a camera-first SwiftUI experience for healthy eating: onboarding and splash flows, an AI scanner viewfinder with framing and capture modes, subscription tiers with restore and terms, a rich history of past scans with macros at a glance, and a dashboard for daily totals and water intake. Networking, local persistence, and StoreKit-style monetization patterns keep the product polished end-to-end for App Store distribution.',
    technologies: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'AVFoundation',
      'Vision',
      'Combine',
      'URLSession',
      'Core Data',
      'StoreKit',
      'UserNotifications',
      'XCTest',
    ],
    image: '/food-app/showcase.png',
    images: [
      '/food-app/showcase.png',
      '/food-app/splash.png',
      '/food-app/onboarding.png',
      '/food-app/scan.png',
      '/food-app/paywall.png',
      '/food-app/history.png',
      '/food-app/dashboard.png',
    ],
    category: 'Swift & SwiftUI',
  },
  {
    title: 'Ghadana (Food & Drink)',
    description:
      'Native iOS food and meal-planning experience: branded login and guest checkout, home with specials and recommendations, weekly menu builder with calories, and subscription “My Plan” with renewals and upcoming meals.',
    fullDescription:
      'Built Ghadana as a polished SwiftUI-driven product for food and drink discovery and recurring meal plans. Users sign in or use guest checkout, browse categories and today’s specials, plan dishes by date with calorie-aware cards and “Add to Day” flows, and manage active subscriptions with progress, renewals, and a clear view of upcoming meals. REST-backed models, local caching for smooth scrolling, and push-friendly reminders keep the experience reliable for daily use.',
    technologies: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'Combine',
      'URLSession',
      'Codable',
      'Core Data',
      'Keychain',
      'UserNotifications',
      'PhotosUI',
      'XCTest',
    ],
    image: '/ghadana/showcase.png',
    images: [
      '/ghadana/showcase.png',
      '/ghadana/home.png',
      '/ghadana/login.png',
      '/ghadana/menu-planning.png',
      '/ghadana/my-plan.png',
    ],
    category: 'Swift & SwiftUI',
  },
  {
    title: 'Voice Recorder',
    description:
      'Native iOS audio app: high-quality recording with live waveform, HD playback and editing tools, one-tap transcription, searchable library, and quick clip-to-video workflows.',
    fullDescription:
      'Delivered Voice Recorder as a full SwiftUI experience for capture and playback. Users record with clear timers and waveforms, play back in HD with trim and share actions, transcribe speech to text in-app, browse and search “My Recordings,” and turn audio into shareable video clips paired with imagery. AVFoundation-backed pipelines, Speech framework for transcription, and polished controls keep everyday capture fast and reliable.',
    technologies: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'AVFoundation',
      'Speech',
      'Combine',
      'URLSession',
      'FileManager',
      'BackgroundTasks',
      'PhotosUI',
      'XCTest',
    ],
    image: '/voice-recorder/showcase.png',
    images: [
      '/voice-recorder/showcase.png',
      '/voice-recorder/hero-promo.png',
      '/voice-recorder/recording.png',
      '/voice-recorder/transcribe.png',
      '/voice-recorder/playback-hd.png',
      '/voice-recorder/my-recordings.png',
      '/voice-recorder/make-video.png',
    ],
    category: 'Swift & SwiftUI',
  },
  {
    title: 'Phone Cleaner',
    description:
      'Native iOS storage utility: see iPhone usage at a glance and free space from photos, mail, and videos; optimize storage with before/after views; remove duplicate photos; compress large videos; and merge duplicate contacts.',
    fullDescription:
      'Built Phone Cleaner in SwiftUI with system integrations for a clear cleanup workflow. The app surfaces storage breakdowns and one-tap cleanup paths, celebrates reclaimed space with before/after metrics, groups duplicate photos with a “best” pick and bulk delete, runs video compression presets with visible size savings, and helps users merge redundant contacts with preview and confirmation. Progress and results use accessible, high-contrast UI so people understand exactly how much space they recover.',
    technologies: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'Photos',
      'Contacts',
      'AVFoundation',
      'VideoToolbox',
      'Combine',
      'FileManager',
      'BackgroundTasks',
      'XCTest',
    ],
    image: '/phone-cleaner/showcase.png',
    images: [
      '/phone-cleaner/showcase.png',
      '/phone-cleaner/clean-up-storage.png',
      '/phone-cleaner/optimize-storage.png',
      '/phone-cleaner/duplicate-photos.png',
      '/phone-cleaner/compress-videos.png',
      '/phone-cleaner/duplicate-contacts.png',
    ],
    category: 'Swift & SwiftUI',
  },
  {
    title: 'Respire LYF',
    description:
      'Digital health platform for asthma and COPD management: breathing score, AI cough tracker, inhaler monitoring with Apple Watch, medication reminders, and doctor-ready health reports.',
    fullDescription:
      'Contributed to Respire LYF — an all-in-one respiratory co-pilot built with SwiftUI and WatchOS. The app tracks 5 health indicators (Breathing Score, Cough, Peak Flow, Check-ins, Vitals) and 10 lifestyle determinants (Inhaler, Supplements, Food, Hydration, Medications, Activity, Sleep, Weather, Environmental Factors, Stress). Key features include AI-powered on-device cough detection, automatic inhaler tracking via Apple Watch motion sensing, monthly health insights with pattern recognition, medication reminder system, LYF Hub for supplement and nutrition guidance, and doctor-ready progress reports. Data stays private with on-device AI processing and full Apple Health sync.',
    technologies: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'WatchOS',
      'HealthKit',
      'CoreMotion',
      'AVFoundation',
      'Firebase',
      'Core Data',
      'UserNotifications',
      'Combine',
      'URLSession',
    ],
    image: '/respire-lyf/showcase.png',
    images: [
      '/respire-lyf/showcase.png',
      '/respire-lyf/companion.png',
      '/respire-lyf/inhaler.png',
      '/respire-lyf/medication.png',
      '/respire-lyf/nutrition.png',
      '/respire-lyf/reports.png',
      '/respire-lyf/privacy.png',
    ],
    category: 'Swift & SwiftUI',
  },
  {
    title: 'Universal TV Remote',
    description:
      'iOS universal remote control for smart TVs: touchpad navigation, one-tap channel and app switching (Netflix, Disney+, Prime Video), photo & video casting, and voice control — all over Wi-Fi.',
    fullDescription:
      'Built Universal TV Remote as a full-featured SwiftUI app for controlling smart TVs wirelessly. The app features a polished remote control interface with touchpad gesture navigation ("Swipe To Move"), a full button layout (Ch, Vol, Mute, Guide, Record), and a PRO subscription tier. Users can browse and launch 21+ streaming apps (Netflix, Disney+, Prime Video, Tubi, Pluto TV, YouTube Kids) directly from the app, cast photos and videos from the camera roll to the TV with playback controls, and use voice commands for hands-free control. Built with Combine-driven networking, StoreKit for in-app purchases, and AVKit for media playback.',
    technologies: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'Combine',
      'Network',
      'AVKit',
      'PhotosUI',
      'StoreKit',
      'UserNotifications',
      'MultipeerConnectivity',
      'XCTest',
    ],
    image: '/tv-remote/showcase.png',
    images: [
      '/tv-remote/showcase.png',
      '/tv-remote/remote.png',
      '/tv-remote/touchpad.png',
      '/tv-remote/channels.png',
      '/tv-remote/cast.png',
      '/tv-remote/effortless.png',
    ],
    category: 'Swift & SwiftUI',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft' && selectedProject.images.length > 1) {
        setCurrentImageIndex((prev) =>
          prev === 0 ? selectedProject.images.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight' && selectedProject.images.length > 1) {
        setCurrentImageIndex((prev) =>
          prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedProject]);

  return (
    <section
      id="projects"
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
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              onClick={() => openModal(project)}
              className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/20 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="absolute inset-0 flex items-center justify-center">
                          <svg class="w-16 h-16 text-primary-400/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-700/50 text-xs text-gray-400 rounded border border-dark-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-dark-700/50 text-xs text-gray-400 rounded border border-dark-600/50">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-y-auto scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass-effect rounded-2xl overflow-hidden max-w-6xl mx-auto my-4 flex flex-col">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-dark-800/80 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Image Gallery */}
                <div className="relative h-[60vh] sm:h-[65vh] md:h-[500px] bg-dark-900 mt-4 md:mt-6 mx-2 md:mx-4 rounded-lg overflow-hidden flex items-center justify-center">
                  {selectedProject.images &&
                  selectedProject.images.length > 0 ? (
                    <>
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${
                          currentImageIndex + 1
                        }`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          // Try fallback to main image
                          if (target.src !== selectedProject.image) {
                            target.src = selectedProject.image;
                          } else {
                            // If main image also fails, show placeholder
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center bg-dark-800">
                                  <div class="text-center">
                                    <svg class="w-16 h-16 text-primary-400/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p class="text-gray-400 text-sm">Image not found</p>
                                  </div>
                                </div>
                              `;
                            }
                          }
                        }}
                      />

                      {/* Navigation Arrows */}
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-800/80 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                          >
                            <ChevronLeft className="w-6 h-6 text-white" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-800/80 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                          >
                            <ChevronRight className="w-6 h-6 text-white" />
                          </button>
                        </>
                      )}

                      {/* Image Indicators */}
                      {selectedProject.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedProject.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentImageIndex
                                  ? 'bg-primary-400 w-8'
                                  : 'bg-gray-600 hover:bg-gray-500'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6 md:p-8">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-semibold rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                    {selectedProject.title}
                  </h2>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {selectedProject.fullDescription ||
                      selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-100 mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-lg border border-primary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
