import React from 'react'

export default function Socials() {
  const socials = [
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/yourprofile',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Twitter',
      icon: '𝕏',
      url: 'https://twitter.com/yourprofile',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: '👍',
      url: 'https://facebook.com/yourprofile',
      color: 'hover:text-blue-600'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      url: 'https://tiktok.com/@yourprofile',
      color: 'hover:text-black'
    },
    {
      name: 'Discord',
      icon: '💬',
      url: 'https://discord.gg/yourinvitelink',
      color: 'hover:text-indigo-500'
    },
    {
      name: 'YouTube',
      icon: '📺',
      url: 'https://youtube.com/@yourchannelname',
      color: 'hover:text-red-600'
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-slate-900 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
          Follow Us
        </h2>
        <p className="text-slate-300 text-center mb-12 text-lg">
          Stay connected and follow us on social media for updates, behind-the-scenes content, and more
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-slate-800 hover:bg-slate-700 transition p-6 rounded-lg text-center group`}
            >
              <div className={`text-5xl mb-3 group-hover:scale-125 transition transform ${social.color}`}>
                {social.icon}
              </div>
              <h3 className="text-white font-bold text-sm sm:text-base">
                {social.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
