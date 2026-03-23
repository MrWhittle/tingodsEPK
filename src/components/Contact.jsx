import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Option 1: Send to a service like Formspree, Basin, or similar
    // For now, we'll show a success message
    // console.log('Form submitted:', formData)
    
    // Send to Formspree (uncomment below and replace with your form endpoint)

    fetch('https://formspree.io/f/xkoqdrbn', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    })
    
    
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-800 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-slate-300 text-center mb-12 text-lg">
          Have a question or interested in booking? Send us a message and we'll get back to you soon.
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-600 text-white rounded-lg text-center">
            ✓ Thank you! We've received your message and will be in touch soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-red-600 focus:outline-none transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-red-600 focus:outline-none transition"
                placeholder="tingods75@gmail.com"
              />
            </div>
          </div>

          {/* <div>
            <label htmlFor="subject" className="block text-white font-semibold mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-red-600 focus:outline-none transition"
              placeholder="What is this about?"
            />
          </div> */}

          <div>
            <label htmlFor="message" className="block text-white font-semibold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-red-600 focus:outline-none transition resize-none"
              placeholder="Tell us what you're thinking..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-black text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        <p className="text-slate-400 text-center text-sm mt-6">
          Or reach out directly at: <a href="mailto:tingods75@gmail.com" className="text-white hover:text-red-500">tingods75@gmail.com</a>
        </p>
      </div>
    </section>
  )
}
