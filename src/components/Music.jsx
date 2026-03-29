import React from 'react'
import styled from '@emotion/styled'

export const MusicSection = styled.div `
> img {   max-height: 60px;
    height: 60px;
    margin: 0 auto;}

`


export default function Music() {
  const streams = [
    {
      name: 'Spotify',
      icon: './spotifyLogo.png',
      url: 'https://open.spotify.com/artist/32juaRnw2zBULXo7kVNddS',
      color: 'hover:text-white'
    },
    {
      name: 'Apple Music',
      icon: './appleMusic.png',
      url: 'https://music.apple.com/us/artist/tin-gods/1823241711`',
      color: 'hover:text-white'
    },
    {
      name: 'YouTube',
      icon: `./youtube.webp`,
      url: 'https://www.youtube.com/channel/UCDncg-6mlvlF05yFsWM7IlA',
       color: 'hover:text-white'
    },
    {
      name: 'Bandcamp',
      icon: './bandcamp.png',
      url: 'https://tingodspreston.bandcamp.com/',
      color: 'hover:text-white'
    }
  ]

  return (
    <section id="music" className="py-16 sm:py-24 bg-slate-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
          Listen to Our Music
        </h2>
        <p className="text-slate-300 text-center mb-12 text-lg">
          Stream our latest releases on your favorite platform
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {streams.map((stream) => (
            <a
              key={stream.name}
              href={stream.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-slate-700 hover:bg-slate-600 transition p-6 rounded-lg text-center group`}
            >
              <MusicSection className="max-h-40px text-5xl mb-4 group-hover:scale-110 transition transform"><img src={stream.icon} alt={stream.name} className="" /></MusicSection>
     
              <p className="text-slate-400 mt-2 group-hover:text-slate-300 transition">
                Stream Now →
              </p>
            </a>
          ))}
        </div>

        {/* Featured Release Section */}
        <div className="bg-slate-700 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Latest Release</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="./lesrevenants.avif"
                alt="Les Revenants"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Les Revenants</h4>
              <p className="text-slate-300 mb-4">Release Date: 7/8/2024</p>
              <p className="text-slate-300 mb-6 leading-relaxed">
               A new lease of life, a haunting echo of the past, and a testament to the enduring spirit of rock. Les Revenants is more than just an album; it's a journey through the shadows and light of our musical evolution. With each track, we invite you to experience the raw energy, emotional depth, and unyielding passion that defines Tin Gods. This is our resurrection, our return, and we can't wait for you to hear it. 
              </p>
              <a
                href="https://open.spotify.com/artist/32juaRnw2zBULXo7kVNddS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
              >
                Listen on Spotify
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
