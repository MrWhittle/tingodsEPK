import React from 'react'

export default function Gigs() {
  const gigs = [
    {
      id: 1,
      date: 'April 5, 2026',
      venue: 'The Ferret',
      location: 'Preston, UK',
      ticketUrl: 'https://www.theferret.live',
    //   ticketPrice: '£10'
        ticketPrice: ''
    }
   
  ]

  return (
    <section id="gigs" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Upcoming Gigs</h2>
        <div className="h-1 w-20 bg-grey-500"></div>
      </div>

      <div className="space-y-4">
        {gigs.length > 0 ? (
          gigs.map(gig => (
            <div
              key={gig.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-black transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-white font-semibold text-sm uppercase tracking-wide mb-1">
                    {gig.date}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {gig.venue}
                  </h3>
                  <p className="text-slate-400">
                    {gig.location}
                  </p>
                </div>
                <a
                  target="_blank"
                  href={gig.ticketUrl}
                  className="inline-block bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded transition"
                >
                    {gig.ticketPrice !== '' ? `Get Tickets - ${gig.ticketPrice}` : 'Free Entry'}

                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-400 text-center py-8">
            No upcoming gigs at the moment. Check back soon!
          </p>
        )}
      </div>
    </section>
  )
}
