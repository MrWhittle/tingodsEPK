import React from 'react'

export default function Bio() {
  return (
    <section id="bio" className="py-16 sm:py-24 bg-slate-700 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About Us
            </h2>
            <p className="text-slate-300 text-lg mb-4 leading-relaxed">
<strong>Band History & Formation: </strong>
Established (1994): The band formed in 1994 and became a staple of the Preston and wider UK music circuit for over a decade.
            </p>
                  <p className="text-slate-300 text-lg mb-4 leading-relaxed">
<strong>Initial Run (1994–2008): </strong>
During their original tenure, they played extensively across the UK, including numerous shows in London and Manchester. They gained significant industry attention from major labels like Parlophone, Factory 2, and Sony, though no major contracts were ultimately signed.
            </p>
                 <p className="text-slate-300 text-lg mb-4 leading-relaxed">
<strong>Hiatus & 2023 Comeback: </strong>
After a long break starting in 2008, the band reunited in 2023 with a renewed focus on recording new material and performing their own, original indie-rock bangers.           
 </p>
         <p className="text-slate-300 text-lg mb-4 leading-relaxed">
<strong>Musical Style & Reputation Sound: </strong>
Their music is described as a "relentlessly anthemic delivery of driving indie rock," characterized as being "loud and melodic".
</p>
      <p className="text-slate-300 text-lg mb-4 leading-relaxed">
<strong>Live Performance: </strong>
They are well-regarded for high-energy, emotive live shows. Reviews have compared the feeling of their gigs to the uplifting end of a great film. They want every performance to leave the crowd feeling euphoric and need more.
</p>
<p className="text-slate-300 text-lg mb-4 leading-relaxed">
<strong>Local Legends: </strong>
In Preston, they are frequently referred to as "local indie legends".
</p>
<p className="text-slate-300 text-lg mb-4 leading-relaxed">
<strong>Career Highlights High-Profile Supports: </strong>
They have shared stages with major acts, most notably supporting The Verve at the 1995 Heineken Festival. They've supported The Bluetones, Laika Dog and had a legendary gig at Preston's Adelphi where Ryan Giggs and the cast of Hollyoaks turned up.
</p>
<p className="text-slate-300 text-lg mb-4 leading-relaxed">
<strong>Recent Activity: </strong>
Since their return, they have headlined local venues such as The Ferret and have been the focus of a Sky documentary which followed their return to writing and gigging.</p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="./mainHero.jpg"
              alt="Band photo"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
