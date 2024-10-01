import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Book, Users, Lightbulb, DollarSign, Briefcase, Globe } from 'lucide-react'

import { useNavigate } from 'react-router-dom';



const ResourceCard = ({ icon: Icon, title, description, link }) => {
  const [isHovered, setIsHovered] = useState(false)

 

  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 transform ${isHovered ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`rounded-full p-3 mb-4 inline-block ${isHovered ? 'bg-blue-500' : 'bg-blue-100'}`}>
        <Icon size={24} className={`${isHovered ? 'text-white' : 'text-blue-500'}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={link} 
        className={`text-blue-500 hover:text-blue-700 font-medium ${isHovered ? 'underline' : ''}`}
      >
        Learn More
      </a>
    </div>
  )
}

const ResourcePage = () => {

  const navigate = useNavigate();
  
const handleNavigation = () => {
  navigate('/Internship');
};

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-6xl font-extrabold mb-8 text-center"> Share Your Startup Idea</h1>
        <p className="text-xl text-gray-600 text-center mb-12">Empowering your entrepreneurial journey with knowledge and tools</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResourceCard 
            icon={Book}
            title="Learning Center"
            description="Access our curated library of e-books, webinars, and tutorials on startup fundamentals, business strategies, and industry insights."
            link="#learning-center"
          />
          <ResourceCard 
            icon={Users}
            title="Mentor Network"
            description="Connect with experienced entrepreneurs and industry experts who can guide you through challenges and help refine your business model."
            link="#mentor-network"
          />
          <ResourceCard 
            icon={Lightbulb}
            title="Innovation Lab"
            description="Explore our state-of-the-art facilities equipped with the latest technologies to prototype and test your ideas."
            link="#innovation-lab"
          />
          <ResourceCard 
            icon={DollarSign}
            title="Funding Opportunities"
            description="Discover various funding options, from seed funding to venture capital connections, to fuel your startup's growth."
            link="#funding"
          />
          <ResourceCard 
            icon={Briefcase}
            title="Legal & Compliance"
            description="Get access to legal templates, compliance guidelines, and expert advice to navigate the regulatory landscape."
            link="#legal"
          />
          <ResourceCard 
            icon={Globe}
            title="Global Network"
            description="Tap into our global network of partners, accelerators, and fellow entrepreneurs to expand your reach and collaborate."
            link="#global-network"
          />
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Startup?</h2>
          <p className="text-xl mb-6">Join our Startup Incubation Centre and turn your vision into reality.</p>
          <button
              type="button"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-blue bg-white-200 hover:bg-blue-700"
              onClick={handleNavigation}
            >
           Apply Now
            </button>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Incubation Centre?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Support</h3>
              <p className="text-gray-600">
                Our incubation program offers end-to-end support, from ideation to market launch. We provide resources, mentorship, and a collaborative environment to nurture your startup at every stage of its growth.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Industry Connections</h3>
              <p className="text-gray-600">
                Leverage our extensive network of industry partners, investors, and alumni. Our connections can open doors to potential customers, strategic partnerships, and funding opportunities.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-edge Facilities</h3>
              <p className="text-gray-600">
                Access state-of-the-art workspaces, labs, and equipment. Our facilities are designed to foster innovation and provide the tools you need to bring your ideas to life.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Skill Development</h3>
              <p className="text-gray-600">
                Enhance your entrepreneurial skills through our workshops, bootcamps, and personalized coaching sessions. We focus on both technical and soft skills crucial for startup success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default ResourcePage