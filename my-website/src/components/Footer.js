import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin} from 'lucide-react'

const FooterLink = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </a>
)

const SocialIcon = ({ Icon, href }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
    <Icon size={24} />
  </a>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-gray-400">
              Start-up Incubator is dedicated to nurturing innovative ideas and helping entrepreneurs turn their visions into successful businesses.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><FooterLink href="/programs">Our Programs</FooterLink></li>
              <li><FooterLink href="/events">Upcoming Events</FooterLink></li>
              <li><FooterLink href="/mentors">Mentors</FooterLink></li>
              <li><FooterLink href="/apply">Apply Now</FooterLink></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              123 Innovation Street<br />
              Tech City, TC 12345<br />
              contact@startupincubator.com<br />
              (123) 456-7890
            </address>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} href="https://facebook.com" />
              <SocialIcon Icon={Twitter} href="https://twitter.com" />
              <SocialIcon Icon={Instagram} href="https://instagram.com" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} Start-up Incubator. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer