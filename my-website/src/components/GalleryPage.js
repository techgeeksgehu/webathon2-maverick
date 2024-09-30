import React, { useState } from 'react'

const GalleryItem = ({ image, title, category }) => {
  return (
    <div className="gallery-item overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </div>
  )
}

const GalleryPage = () => {
  const [filter, setFilter] = useState('All')

  const galleryItems = [
    { id: 1, image: "https://source.unsplash.com/random/800x600?startup-event", title: "Startup Pitch Night", category: "Pitch Events" },
    { id: 2, image: "https://source.unsplash.com/random/800x600?workshop", title: "AI Workshop", category: "Workshops" },
    { id: 3, image: "https://source.unsplash.com/random/800x600?networking", title: "Networking Mixer", category: "Networking" },
    { id: 4, image: "https://source.unsplash.com/random/800x600?hackathon", title: "Annual Hackathon", category: "Hackathons" },
    { id: 5, image: "https://source.unsplash.com/random/800x600?conference", title: "Tech Conference", category: "Conferences" },
    { id: 6, image: "https://source.unsplash.com/random/800x600?mentorship", title: "Mentorship Program", category: "Mentorship" },
    { id: 7, image: "https://source.unsplash.com/random/800x600?startup-demo", title: "Product Demo Day", category: "Pitch Events" },
    { id: 8, image: "https://source.unsplash.com/random/800x600?coding", title: "Coding Bootcamp", category: "Workshops" },
    { id: 9, image: "https://source.unsplash.com/random/800x600?investor-meeting", title: "Investor Meet-and-Greet", category: "Networking" },
  ]

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))]

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Event Gallery</h2>
        
        <div className="flex justify-center mb-8 space-x-2 overflow-x-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-200'
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <GalleryItem key={item.id} {...item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-item {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gallery-item:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </section>
  )
}

export default GalleryPage