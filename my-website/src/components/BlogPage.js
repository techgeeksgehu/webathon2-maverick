import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';


const BlogCard = ({ title, excerpt, author, date, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{author}</span>
        <span>{date}</span>
      </div>
      <a href="#" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
        Read More <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  </div>
)

const BlogPage = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/AddBlogs ');
  };

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "10 Tips for Startup Success",
      excerpt: "Learn the essential strategies that can help your startup thrive in today's competitive market.",
      author: "Jane Doe",
      date: "June 15, 2023",
      imageUrl: "https://source.unsplash.com/random/800x600?startup"
    },
    {
      id: 2,
      title: "The Future of AI in Business",
      excerpt: "Explore how artificial intelligence is reshaping the business landscape and what it means for entrepreneurs.",
      author: "John Smith",
      date: "June 10, 2023",
      imageUrl: "https://source.unsplash.com/random/800x600?artificial-intelligence"
    },
    {
      id: 3,
      title: "Securing Funding for Your Startup",
      excerpt: "Discover various funding options available to startups and learn how to pitch to potential investors.",
      author: "Emily Brown",
      date: "June 5, 2023",
      imageUrl: "https://source.unsplash.com/random/800x600?funding"
    }
  ])

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Blog</h2>
          {/* <button
              type="button"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              onClick={handleNavigation}
            >
              Add Blog
            </button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage