import React, { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/Internship');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex items-center">
              <Rocket className="h-8 w-8 text-blue-600" aria-hidden="true" />
              <div>
                <span className="block text-2xl font-bold text-gray-900">Start-up Incubator</span>
                <span className="block text-sm font-bold text-gray-900 mt-1">GEHU Haldwani</span>
              </div>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </a>
            <a href="/Resource" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Resource
            </a>
            <a href="/Gallery" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Gallery
            </a>
            <a href="/SubmitIdea" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Idea
            </a>
            <a href="/AddBlogs" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Blogs
            </a>
            <a href="/SiteAnalytics" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Analytics
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button
              type="button"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              onClick={handleNavigation}
            >
              Internship / Volunteer
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Rocket className="h-8 w-8 text-blue-600" aria-hidden="true" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="/about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    About
                  </a>
                  <a href="/programs" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Programs
                  </a>
                  <a href="/mentors" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Mentors
                  </a>
                  <a href="/contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Contact
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
            <button
              type="button"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              onClick={handleNavigation}
            >
              Internship / Volunteer
            </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
