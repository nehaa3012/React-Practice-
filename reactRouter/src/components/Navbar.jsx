import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-black transition-colors">MyBlog</Link>
        <ul className="flex items-center space-x-6">
          <li>
            <Link 
              to="/" 
              className="hover:text-black transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/posts" 
              className="hover:text-black transition-colors"
            >
              All Posts
            </Link>
          </li>
          <li>
            <Link 
              to="/add-post" 
              className="hover:text-black transition-colors"
            >
              New Post
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="hover:text-black transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="hover:text-black transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;