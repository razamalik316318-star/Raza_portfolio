'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Validate credentials
      if (
        serviceId === 'YOUR_SERVICE_ID' ||
        templateId === 'YOUR_TEMPLATE_ID' ||
        publicKey === 'YOUR_PUBLIC_KEY'
      ) {
        throw new Error(
          'EmailJS credentials not configured. Please check your .env.local file.'
        );
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_email: 'razamalik316318@gmail.com',
          to_name: 'Malik Muhammad Raza',
        },
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error: any) {
      console.error('EmailJS error:', error);

      // Better error messages
      let errorMessage = 'Failed to send message. Please try again.';

      if (error?.text) {
        if (error.text.includes('quota') || error.text.includes('limit')) {
          errorMessage =
            'Email limit reached. Please try again later or contact me directly.';
        } else if (error.text.includes('Invalid')) {
          errorMessage =
            'Invalid email configuration. Please check your EmailJS settings.';
        } else {
          errorMessage = error.text;
        }
      } else if (error?.message) {
        errorMessage = error.message;
      }

      setSubmitStatus('error');

      // Show error for 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:razamalik316318@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      display: 'razamalik316318@gmail.com',
    },
    {
      name: 'WhatsApp',
      icon: Phone,
      href: 'https://wa.me/923420368659',
      color: 'from-green-500 to-emerald-600',
      display: '+92 342 0368659',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/malik-muhammad-raza-bba640352',
      color: 'from-blue-600 to-blue-700',
      display: 'linkedin.com/in/malik-muhammad-raza',
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="text-gradient">Let&apos;s Work Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to
            life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect p-4 sm:p-6 md:p-8 rounded-xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-4 sm:mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium text-sm sm:text-base"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-700/50 border border-dark-600/50 rounded-lg text-gray-100 text-sm sm:text-base focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium text-sm sm:text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-700/50 border border-dark-600/50 rounded-lg text-gray-100 text-sm sm:text-base focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium text-sm sm:text-base"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-700/50 border border-dark-600/50 rounded-lg text-gray-100 text-sm sm:text-base focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              {submitStatus === 'success' && (
                <div className="p-3 sm:p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center text-sm sm:text-base">
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center text-xs sm:text-sm">
                  ✗ Failed to send message. This might be due to rate limiting.
                  Please wait a moment and try again, or contact me directly via
                  email/WhatsApp.
                </div>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold text-base sm:text-lg shadow-lg shadow-primary-500/50 flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 mt-6 md:mt-0"
          >
            <div className="glass-effect p-4 sm:p-6 md:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-4 sm:mb-6">
                Get in touch
              </h3>
              <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-dark-700/30 rounded-lg border border-dark-600/50 hover:border-primary-500/50 transition-all group"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}
                    >
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-100 text-sm sm:text-base">
                        {social.name}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400 truncate">
                        {social.display ||
                          social.href
                            .replace('mailto:', '')
                            .replace('https://', '')
                            .replace('wa.me/', '')}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect p-4 sm:p-6 rounded-xl bg-gradient-to-br from-primary-500/10 to-primary-600/10 border-primary-500/30"
            >
              <h4 className="font-semibold text-gray-100 mb-2 text-sm sm:text-base">
                Response Time
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                I typically respond within 24-48 hours. For urgent matters,
                please mention it in your message.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
