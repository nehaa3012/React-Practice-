import { useParams, Link } from 'react-router-dom';

// Mock data for blog posts
const posts = {
  1: {
    title: 'Getting Started with React',
    content: 'In this post, we will explore the basics of React and how to get started with building your first React application. React is a popular JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.',
    date: 'November 12, 2023',
    author: 'John Doe'
  },
  2: {
    title: 'Understanding React Hooks',
    content: 'React Hooks are functions that let you use state and other React features without writing a class. In this post, we will explore the most commonly used hooks like useState, useEffect, and useContext, and see how they can make your components cleaner and more reusable.',
    date: 'November 10, 2023',
    author: 'Jane Smith'
  },
  3: {
    title: 'React Router Basics',
    content: 'React Router is a standard library for routing in React applications. It enables navigation between different components, allowing for a multi-page application feel in a single-page application. In this tutorial, we will cover the basics of setting up and using React Router in your applications.',
    date: 'November 8, 2023',
    author: 'Mike Johnson'
  }
};

function PostDetail() {
  const { id } = useParams();
  const post = posts[id] || {
    title: 'Post Not Found',
    content: 'The requested post could not be found.',
    date: '',
    author: ''
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link 
        to="/posts" 
        className="inline-flex items-center text-blue-600 hover:underline mb-6"
      >
        ← Back to all posts
      </Link>
      
      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center text-gray-600 text-sm mb-8">
          {post.author && (
            <>
              <span>By {post.author}</span>
              <span className="mx-2">•</span>
            </>
          )}
          <span>{post.date}</span>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            {post.content}
          </p>
          
          {!posts[id] && (
            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-yellow-700">
                The post you're looking for doesn't exist or has been removed.
              </p>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

export default PostDetail;
