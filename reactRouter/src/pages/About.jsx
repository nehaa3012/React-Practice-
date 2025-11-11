import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">About MyBlog</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to MyBlog, a place where we share knowledge, experiences, and thoughts about web development, 
          with a special focus on React and modern JavaScript. Our mission is to create high-quality content 
          that helps developers of all levels to improve their skills and stay updated with the latest trends 
          in the ever-evolving world of web development.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 mt-8">What We Write About</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>React.js and its ecosystem</li>
          <li>JavaScript best practices</li>
          <li>Web development tutorials</li>
          <li>UI/UX design principles</li>
          <li>Frontend development tools</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 mt-8">Meet the Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600 mb-4">Founder & Lead Developer</p>
            <p className="text-gray-700">
              With over 5 years of experience in frontend development, John loves sharing his knowledge with the community.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600 mb-4">Content Writer & Designer</p>
            <p className="text-gray-700">
              Jane combines her design skills with technical writing to create engaging and educational content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;