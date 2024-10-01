import React, { useState } from 'react'
import { Upload, CheckCircle, XCircle } from 'lucide-react'
import Navbar from './Navbar';
import Footer from './Footer';

import { SearchCheck } from 'lucide-react';

const InputField = ({ label, type, name, value, onChange, required }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
)

const HiringPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    availability: '',
    resume: null
  })

  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'application/pdf') {
      setFormData(prevData => ({ ...prevData, resume: file }))
    } else {
      alert('Please upload a PDF file')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Simulating an API call
    setTimeout(() => {
      setSubmitStatus('success')
    }, 1500)
  }

  return (
    <>
          <Navbar />

          <div className="bg-gray-100 min-h-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <SearchCheck className="mx-auto h-20 w-20 text-green-600" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            We were Eagrly Looking for you
          </h1>
          <p className="mt-3 text-xl text-gray-500 mx-auto">
            Thank You!!! For Making this decision to join Us.
          </p>
        </div>
        </div>
    
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-0">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-5xl font-bold leading-7 text-gray-900 sm:text-5xl sm:truncate">
            Join Our Team
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Apply for internship or volunteer positions at our Start-up Incubator
          </p>
        </div>
        <div className="border-t border-gray-200">
          <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <InputField
                label="First name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <InputField
                label="Last name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
              <InputField
                label="Email address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <InputField
                label="Phone number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <div className="sm:col-span-2">
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                  Position
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a position</option>
                  <option value="intern">Intern</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                  Availability
                </label>
                <textarea
                  id="availability"
                  name="availability"
                  rows="3"
                  value={formData.availability}
                  onChange={handleInputChange}
                  placeholder="Please describe your availability (e.g., full-time, part-time, specific days)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Resume (PDF only)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="resume"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF up to 10MB</p>
                  </div>
                </div>
                {formData.resume && (
                  <p className="mt-2 text-sm text-gray-600">
                    File selected: {formData.resume.name}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
        {submitStatus && (
          <div className={`p-4 ${submitStatus === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
            {submitStatus === 'success' ? (
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <p className="text-green-700">Your application has been submitted successfully!</p>
              </div>
            ) : (
              <div className="flex items-center">
                <XCircle className="h-5 w-5 text-red-400 mr-2" />
                <p className="text-red-700">There was an error submitting your application. Please try again.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default HiringPage