import React from 'react'


const Header = () => {
  return (
    <div className="text-center px-6 py-8 ">
      {/* AI feature badge */}
      <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
        New: AI feature integrated ✨
      </div>

      {/* Main heading */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
        Your own <span className="text-indigo-600">blogging</span><br />platform.
      </h1>

      {/* Subheading */}
      <p className="max-w-xl mx-auto text-gray-500 text-base md:text-lg mb-8">
        This is your space to think out loud, to share what matters, and to write without filters.
        Whether it’s one word or a thousand, your story starts right here.
      </p>

      {/* Search bar */}
      <div className="max-w-xl mx-auto flex items-center gap-2 mb-8">
        <input
          type="text"
          placeholder="Search blogs"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
          Search
        </button>
      </div>
      
    </div>
  )
}

export default Header