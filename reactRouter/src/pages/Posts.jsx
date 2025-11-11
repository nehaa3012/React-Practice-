import { Link } from 'react-router-dom';

// Mock data for blog posts
const posts = [
  { id: 1, title: 'Getting Started with React', excerpt: 'Learn the basics of React and build your first component.' },
  { id: 2, title: 'Understanding React Hooks', excerpt: 'A deep dive into React Hooks and how to use them effectively.' },
  { id: 3, title: 'React Router Basics', excerpt: 'Learn how to handle routing in your React applications.' },
  { id: 4, title: 'Styling in React', excerpt: 'Different ways to style your React components.' },
  { id: 5, title: 'State Management in React', excerpt: 'Understanding state and props in React applications.' },
];

function Posts() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">All Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-semibold text-blue-600 hover:text-blue-800">
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <Link 
              to={`/post/${post.id}`}
              className="inline-block mt-2 text-blue-600 hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
