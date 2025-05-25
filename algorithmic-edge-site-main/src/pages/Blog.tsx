import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Forex Trading Algorithms",
      description: "Dive deep into how modern trading algorithms work and their impact on forex markets.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "/blog/trading-algo.jpg"
    },
    {
      title: "Risk Management in Automated Trading",
      description: "Essential strategies for managing risk when using automated trading systems.",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Trading",
      image: "/blog/risk-management.jpg"
    },
    {
      title: "The Future of AI in Forex Trading",
      description: "Exploring how artificial intelligence is shaping the future of currency trading.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "AI & ML",
      image: "/blog/ai-trading.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, strategies, and insights in forex trading and technology.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/10"></div>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder-blog.jpg";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20">
                    <Tag className="w-4 h-4 text-emerald-500 mr-1" />
                    <span className="text-sm font-medium text-emerald-700">{post.category}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto bg-emerald-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get the latest updates on forex trading and technology delivered straight to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-emerald-600 text-white rounded-r-lg hover:bg-emerald-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 