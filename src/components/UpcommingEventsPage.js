import React from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'
import OfficeImage from '../assets/office.jpg'

import Image01 from '../assets/img01.png';
import Image02 from '../assets/img02.png';
import Image03 from '../assets/img03.png';
import Image04 from '../assets/img04.png';
import Image05 from '../assets/img05.png';
import Image06 from '../assets/img06.png';
import Image07 from '../assets/img07.png';
import Image08 from '../assets/img08.png';


const EventCard = ({ title, date, time, location, description, imageUrl, color }) => {
  return (
    <div className={`bg-${color}-100 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl`}>
<div
  className="w-full h-48 bg-cover bg-center"
  style={{ backgroundImage: `url(${imageUrl})` }}
>
</div>
      <div className="p-6">
        <h3 className={`text-2xl font-bold mb-2 text-${color}-800`}>{title}</h3>
        <div className="flex items-center mb-2">
          <Calendar className={`h-5 w-5 mr-2 text-${color}-600`} />
          <span className={`text-${color}-700`}>{date}</span>
        </div>
        <div className="flex items-center mb-2">
          <Clock className={`h-5 w-5 mr-2 text-${color}-600`} />
          <span className={`text-${color}-700`}>{time}</span>
        </div>
        <div className="flex items-center mb-4">
          <MapPin className={`h-5 w-5 mr-2 text-${color}-600`} />
          <span className={`text-${color}-700`}>{location}</span>
        </div>
        <p className={`text-${color}-600 mb-4`}>{description}</p>
        <button className={`bg-${color}-500 text-white px-4 py-2 rounded hover:bg-${color}-600 transition duration-300`}>
          Register Now
        </button>
      </div>
    </div>
  )
}

const UpcomingEventsPage = () => {
  const events = [
    {
      title: "Startup Pitch Competition",
      date: "July 15, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Hub, Floor 3",
      description: "Showcase your startup idea to a panel of investors and industry experts.",
      imageUrl: Image01,
      color: "blue"
    },
    {
      title: "AI in Business Workshop",
      date: "July 22, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Tech Center, Room 201",
      description: "Learn how to leverage AI technologies to boost your business operations.",
      imageUrl: Image02,
      color: "purple"
    },
    {
      title: "Networking Mixer",
      date: "July 29, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "Skyline Lounge",
      description: "Connect with fellow entrepreneurs and potential investors in a casual setting.",
      imageUrl: Image03,
      color: "green"
    },
    {
      title: "Funding Strategies Seminar",
      date: "August 5, 2023",
      time: "1:00 PM - 3:00 PM",
      location: "Finance Building, Auditorium",
      description: "Explore various funding options and strategies for your startup.",
      imageUrl: Image04,
      color: "blue"
    },
    {
      title: "Product Design Workshop",
      date: "August 12, 2023",
      time: "11:00 AM - 2:00 PM",
      location: "Design Studio, West Wing",
      description: "Learn the principles of effective product design and user experience.",
      imageUrl: Image05,
      color: "purple"
    },
    {
      title: "Tech Startup Job Fair",
      date: "August 19, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Grand Hall, Main Building",
      description: "Connect with talented individuals looking to join innovative startups.",
      imageUrl: Image06,
      color: "green"
    },
    {
      title: "Tech Startup Job Fair",
      date: "August 19, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Grand Hall, Main Building",
      description: "Connect with talented individuals looking to join innovative startups.",
      imageUrl: Image07,
      color: "blue"
    },
    {
      title: "Tech Startup Job Fair",
      date: "August 19, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "Grand Hall, Main Building",
      description: "Connect with talented individuals looking to join innovative startups.",
      imageUrl: Image08,
      color: "purple"
    },
    {
      title: "Startup Pitch Competition",
      date: "July 15, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Hub, Floor 3",
      description: "Showcase your startup idea to a panel of investors and industry experts.",
      imageUrl: Image01,
      color: "green"
    },
  ]

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpcomingEventsPage