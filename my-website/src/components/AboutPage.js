import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
import { Image } from 'lucide-react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
    aria-label={label}
  >
    <Icon size={24} />
  </a>
)

const TeamMember = ({ name, role, image }) => (
  <div className="text-center">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
)

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8">About Our Startup Incubation Centre</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Startup Incubation Centre"
              className="w-full md:w-1/2 h-auto rounded-lg mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At the Startup Incubation Centre, we are dedicated to nurturing innovative ideas and
                empowering entrepreneurs to turn their visions into successful businesses. Our mission
                is to provide a supportive ecosystem that fosters creativity, collaboration, and growth.
              </p>
              <p className="text-gray-700">
                We believe that with the right resources, mentorship, and environment, any passionate
                entrepreneur can make a significant impact in their industry and the world at large.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 mb-8">
            <li>State-of-the-art workspace and facilities</li>
            <li>Expert mentorship from industry leaders</li>
            <li>Access to funding opportunities and investor networks</li>
            <li>Comprehensive business development workshops</li>
            <li>Networking events with fellow entrepreneurs and potential partners</li>
            <li>Legal and administrative support</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">200+</p>
              <p className="text-gray-700">Startups Incubated</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">$50M+</p>
              <p className="text-gray-700">Funding Raised</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">80%</p>
              <p className="text-gray-700">Success Rate</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <TeamMember
              name="Jane Doe"
              role="Founder & CEO"
              image="/placeholder.svg?height=128&width=128"
            />
            <TeamMember
              name="John Smith"
              role="Head of Mentorship"
              image="/placeholder.svg?height=128&width=128"
            />
            <TeamMember
              name="Emily Brown"
              role="Investment Relations"
              image="/placeholder.svg?height=128&width=128"
            />
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <img
              src="/placeholder.svg?height=450&width=800"
              alt="Startup Incubation Centre Building"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
          <p className="text-gray-700 mb-4">
            Stay updated with our latest events, success stories, and opportunities. Follow us on
            social media or reach out directly:
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <SocialLink href="https://facebook.com" icon={Facebook} label="Facebook" />
            <SocialLink href="https://twitter.com" icon={Twitter} label="Twitter" />
            <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="https://instagram.com" icon={Instagram} label="Instagram" />
            <SocialLink href="mailto:contact@startupincubator.com" icon={Mail} label="Email" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-700 mb-6">
            Join our Startup Incubation Centre and turn your innovative ideas into reality.
          </p>
          <a
            href="/apply"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default AboutPage