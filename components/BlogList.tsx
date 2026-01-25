"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Blog {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

interface BlogListProps {
  blogs: Blog[];
}

export function BlogList({ blogs }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Get unique categories from blogs
  const categories = ['all', ...new Set(blogs.map(blog => blog.category))];
  
  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category
                ? 'bg-foreground text-background'
                : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Blog List */}
      <div className="space-y-3">
        {filteredBlogs.map((blog) => (
          <motion.div
            key={blog.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link 
              href={`/blog/${blog.slug}`}
              className="block p-4 rounded-lg border border-border/60 bg-card/30 hover:bg-card/50
                transition-all duration-200 hover:shadow-sm group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground">
                  {blog.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {blog.date}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-foreground
                transition-colors duration-200 mb-1">
                {blog.title}
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {blog.description}
              </p>
              <div className="flex items-center text-foreground/80 text-xs font-medium">
                Read more
                <svg
                  className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 