import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogsPage from '../components/BlogPage'



const BlogForm = ({ blog, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(blog || {
    title: '',
    excerpt: '',
    author: '',
    imageUrl: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">Excerpt</label>
        <textarea
          id="excerpt"
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          required
          rows="3"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        ></textarea>
      </div>
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          {blog ? 'Update' : 'Create'} Blog
        </button>
      </div>
    </form>
  )
}

const BlogCRUD = () => {
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

  const [editingBlog, setEditingBlog] = useState(null)
  const [isAdding, setIsAdding] = useState(false)

  const handleCreate = (newBlog) => {
    setBlogs(prevBlogs => [...prevBlogs, { ...newBlog, id: Date.now(), date: new Date().toLocaleDateString() }])
    setIsAdding(false)
  }

  const handleUpdate = (updatedBlog) => {
    setBlogs(prevBlogs => prevBlogs.map(blog => blog.id === updatedBlog.id ? { ...updatedBlog, date: new Date().toLocaleDateString() } : blog))
    setEditingBlog(null)
  }

  const handleDelete = (id) => {
    setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id))
  }

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
   
      <h1 className="text-8xl font-extrabold text-center mb-8">Manage Blogs</h1> 

      <BlogsPage />

        {(isAdding || editingBlog) && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">{editingBlog ? 'Edit' : 'Add'} Blog</h3>
            <BlogForm
              blog={editingBlog}
              onSubmit={editingBlog ? handleUpdate : handleCreate}
              onCancel={() => {
                setIsAdding(false)
                setEditingBlog(null)
              }}
            />
          </div>
        )}
        {!isAdding && !editingBlog && (
          <button
            onClick={() => setIsAdding(true)}
            className="mb-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Add New Blog
          </button>
        )}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {blogs.map((blog) => (
              <li key={blog.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{blog.title}</h3>
                    <p className="text-sm text-gray-500">{blog.author} - {blog.date}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setEditingBlog(blog)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default BlogCRUD