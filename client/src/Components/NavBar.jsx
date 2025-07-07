import React from 'react'

const NavBar = () => {
  const blogData = [
    {
      category: 'Lifestyle',
      title: 'A detailed step-by-step guide to manage your lifestyle',
      img: 'https://source.unsplash.com/400x300/?lifestyle,meeting',
    },
    {
      category: 'Startup',
      title: 'How to create an effective startup roadmap or idea',
      img: 'https://source.unsplash.com/400x300/?startup,planning',
    },
    {
      category: 'Technology',
      title: 'Learning new technology to boost your career in software',
      img: 'https://source.unsplash.com/400x300/?technology,office',
    },
    {
      category: 'Lifestyle',
      title: 'A detailed step-by-step guide to improve your lifestyle',
      img: 'https://source.unsplash.com/400x300/?tablet,reading',
    },
    {
      category: 'Lifestyle',
      title: 'A detailed step-by-step guide to manage your lifestyle',
      img: 'https://source.unsplash.com/400x300/?discussion',
    },
    {
      category: 'Startup',
      title: 'How to create an effective startup roadmap or idea',
      img: 'https://source.unsplash.com/400x300/?family,planning',
    },
    {
      category: 'Technology',
      title: 'Learning new technology to boost your career in software',
      img: 'https://source.unsplash.com/400x300/?smartphone,app',
    },
    {
      category: 'Lifestyle',
      title: 'A detailed step-by-step guide to manage your lifestyle',
      img: 'https://source.unsplash.com/400x300/?journal,woman',
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow">
        <div className="text-xl font-bold text-blue-600">Quickblog</div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </nav>

      {/* Hero */}
      <section className="text-center mt-10 px-4">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
          New: AI Feature Integrated ✨
        </span>
        <h1 className="text-4xl font-bold mt-4">
          Your own <span className="text-blue-600">blogging</span> platform.
        </h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          This is your space to think out loud, to share what matters, and to write without filters.
          Whether it's one word or a thousand, your story starts right here.
        </p>
      </section>

      {/* Search */}
      <div className="mt-6 flex justify-center">
        <input
          type="text"
          placeholder="Search blogs"
          className="border border-gray-300 px-4 py-2 rounded-l-md w-full max-w-md"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
          Search
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mt-6 space-x-4 flex-wrap">
        {['All', 'Technology', 'Startup', 'Lifestyle', 'Finance'].map((tab) => (
          <button
            key={tab}
            className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
        {blogData.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-xs text-white bg-purple-500 px-2 py-1 rounded">
                {blog.category}
              </span>
              <h3 className="font-semibold mt-2">{blog.title}</h3>
              <p className="text-gray-500 text-sm mt-1">
                Learn proven tips and strategies to fast-track your blogging journey...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe Section */}
      <div className="text-center px-4 py-12 bg-gray-50">
        <h2 className="text-xl font-semibold">Never Miss a Blog!</h2>
        <p className="text-gray-500 mt-2">Subscribe to get the latest blogs, new tech, and exclusive news.</p>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-2 rounded-l-md w-full max-w-md"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-10 px-6 text-gray-600 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-blue-600 font-bold text-lg">Quickblog</h3>
            <p>
              Learn. Connect. Share ideas freely and blog without limits.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>Home</li>
              <li>Start a Blog</li>
              <li>Client Credits</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Need Help?</h4>
            <ul className="space-y-1">
              <li>Delivery Info</li>
              <li>Returns & Refund Policy</li>
              <li>Track Your Order</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <ul className="space-y-1">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-8">&copy; 2025 Quickblog. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default NavBar