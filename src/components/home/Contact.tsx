"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", company: "", phone: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-wider text-sm uppercase mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Let&apos;s Start Your Project
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to create your own supplement line? Contact us today and let&apos;s discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Book a Call Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-brand-green to-brand-green/80 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Book a Call</h3>
              </div>
              <p className="text-white/90 mb-6 text-sm leading-relaxed">
                Schedule a free consultation with our team to discuss your supplement project requirements.
              </p>
              <Button
                className="w-full bg-white text-brand-green hover:bg-white/90 font-semibold h-12"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Meeting
              </Button>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-5">
                <a
                  href="tel:+421905587699"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-green/20 transition-colors">
                    <Phone className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="font-medium text-gray-900 group-hover:text-brand-green transition-colors">
                      +421 905 587 699
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@ecoideal.eu"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-green/20 transition-colors">
                    <Mail className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="font-medium text-gray-900 group-hover:text-brand-green transition-colors">
                      info@ecoideal.eu
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p className="font-medium text-gray-900 text-sm leading-relaxed">
                      Panattoni Park Košice Letisko,<br />
                      Hall No. 2, Ulica Andreja Kvasa No. 5,<br />
                      040 17 Košice, Slovakia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-brand-green" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-500">
                    Thank you for reaching out. We&apos;ll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-brand-green focus:ring-brand-green/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-brand-green focus:ring-brand-green/20"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-brand-green focus:ring-brand-green/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-brand-green focus:ring-brand-green/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, product ideas, or any questions you have..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-lg rounded-xl disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
