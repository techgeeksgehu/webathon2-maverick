import React, { useState } from 'react'
import { Calendar, Users, Lightbulb, Award, TrendingUp, Zap } from 'lucide-react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryPage from '../components/GalleryPage'
import EventsPage from '../components/UpcommingEventsPage'





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
  


  return (
    <>
    <Navbar />
  

       <GalleryPage />

        <div className="mt-16 text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">Join Our Next Event</h2>
          <p className="text-gray-600 mb-6">
            Don't miss out on the opportunity to be part of our thriving startup community.
          </p>
        <EventsPage />
        </div>
    

    <Footer />
    </>
  )
}

export default AddGallery