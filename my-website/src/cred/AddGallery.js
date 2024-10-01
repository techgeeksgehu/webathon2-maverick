import React, { useState } from 'react'
import { Calendar, Users, Lightbulb, Award, TrendingUp, Zap } from 'lucide-react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryPage from '../components/GalleryPage'

const EventCard = ({ icon: Icon, title, date, description, attendees }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${
        isExpanded ? 'scale-105' : 'hover:scale-102'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-blue-500 mr-3" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-2">{date}</p>
      <p className={`text-gray-700 ${isExpanded ? '' : 'line-clamp-2'}`}>{description}</p>
      {isExpanded && (
        <div className="mt-4">
          <p className="text-sm text-gray-600">Attendees: {attendees}</p>
        </div>
      )}
    </div>
  )
}

const AddGallery = () => {
  const events = [
    {
      icon: Lightbulb,
      title: "Innovation Summit 2023",
      date: "June 15-17, 2023",
      description: "A three-day conference featuring keynote speakers, workshops, and networking opportunities focused on the latest trends in technology and entrepreneurship.",
      attendees: 500
    },
    {
      icon: Zap,
      title: "Startup Pitch Night",
      date: "July 5, 2023",
      description: "An evening showcase where our top 10 incubated startups present their ideas to a panel of investors and industry experts.",
      attendees: 200
    },
    {
      icon: Users,
      title: "Mentor Matchmaking Event",
      date: "August 12, 2023",
      description: "A speed-networking style event connecting aspiring entrepreneurs with experienced mentors from various industries.",
      attendees: 150
    },
    {
      icon: TrendingUp,
      title: "Growth Hacking Workshop",
      date: "September 8, 2023",
      description: "An intensive full-day workshop teaching startups effective and low-cost strategies for rapid business growth.",
      attendees: 100
    },
    {
      icon: Award,
      title: "Annual Startup Awards Gala",
      date: "November 18, 2023",
      description: "A glamorous evening celebrating the achievements of our incubated startups, with awards in various categories.",
      attendees: 300
    },
    {
      icon: Calendar,
      title: "Tech Week 2023",
      date: "December 4-8, 2023",
      description: "A week-long series of events including hackathons, tech talks, and product demos showcasing the latest innovations from our startup community.",
      attendees: 1000
    }
  ]

  return (
    <>
    <Navbar />
  

       <GalleryPage />

        <div className="mt-16 text-center mb-20">
          <h2 className="text-2xl font-bold mb-4">Join Our Next Event</h2>
          <p className="text-gray-600 mb-6">
            Don't miss out on the opportunity to be part of our thriving startup community.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            View Upcoming Events
          </a>
        </div>
    

    <Footer />
    </>
  )
}

export default AddGallery