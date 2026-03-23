import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About</h3>
            <p className="text-slate-400 text-sm">
              Tin Gods EPK - Electronic Press Kit showcasing our music and connecting with fans worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#gallery" className="text-slate-400 hover:text-red-600 transition">Gallery</a></li>
              <li><a href="#bio" className="text-slate-400 hover:text-red-600 transition">Bio</a></li>
              <li><a href="#music" className="text-slate-400 hover:text-red-600 transition">Music</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-red-600 transition">Contact</a></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <p className="text-slate-400 text-sm">
              Email: <a href="mailto:your@email.com" className="text-red-600 hover:text-red-500">your@email.com</a>
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Phone: <a href="tel:+1234567890" className="text-red-600 hover:text-red-500">+1 (234) 567-8900</a>
            </p>
          </div> */}
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-400 text-center text-sm">
            © {currentYear} Tin Gods. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  )
}
