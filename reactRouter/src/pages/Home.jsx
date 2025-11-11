import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hover:text-black transition-colors">Welcome to MyBlog</h1>
          <p className="text-xl mb-8 hover:text-black transition-colors">Discover amazing stories and creative ideas</p>
          <Link 
            to="/posts" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors inline-block"
          >
            Explore Posts
          </Link>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 ">Featured Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((post) => (
            <div key={post} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Featured Post {post}</h3>
                <p className="text-gray-600 mb-4">
                  This is a brief description of the featured post number {post}. Click to read more...
                </p>
                <Link 
                  to={`/post/${post}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;