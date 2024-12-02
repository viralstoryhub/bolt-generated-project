import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaTelegram, FaDiscord, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-20 pb-16 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="gradient-text">Contact Us</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-primary w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">support@btfdcoin.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-primary w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-400">Worldwide</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <FaTelegram size={24} />
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <FaDiscord size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-black border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-black px-4 py-3 rounded-lg hover:bg-primary/80 transition-colors font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
