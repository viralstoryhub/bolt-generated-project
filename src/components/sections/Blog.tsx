import React from 'react';
import { Post } from '../../types/blog';
import { posts } from '../../data/blogPosts';

const BlogPost: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-bold text-white mb-2">{post.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{post.date}</p>
      <p className="text-gray-300">{post.excerpt}</p>
      {/* Add a "Read More" link if you have individual blog post pages */}
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">Latest Updates</h2>
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
