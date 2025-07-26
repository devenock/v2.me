"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Comments } from './Comments';

interface BlogInteractionsProps {
  slug: string;
}

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export function BlogInteractions({ slug }: BlogInteractionsProps) {
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const fetchBlogData = useCallback(async () => {
    try {
      const response = await fetch(`/api/blog/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes || 0);
        setShares(data.shares || 0);
        setComments(data.comments || []);
        setIsLiked(data.isLiked || false);
        setIsShared(data.isShared || false);
      }
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  }, [slug]);

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/blog/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'like' }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
        setIsLiked(data.isLiked);
      }
    } catch (error) {
      console.error('Error liking blog:', error);
    }
  };

  const handleShare = async () => {
    try {
      const response = await fetch(`/api/blog/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'share' }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setShares(data.shares);
        setIsShared(data.isShared);
      }
    } catch (error) {
      console.error('Error sharing blog:', error);
    }
  };

  const handleComment = async (commentText: string) => {
    try {
      const response = await fetch(`/api/blog/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'comment', content: commentText }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setComments(data.comments);
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      {/* Interaction Buttons */}
      <div className="flex items-center gap-6 mb-6">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
            isLiked
              ? 'bg-red-100 text-red-600 hover:bg-red-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <svg className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{likes}</span>
        </button>

        <button
          onClick={handleShare}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
            isShared
              ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
          <span>{shares}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>{comments.length}</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <Comments comments={comments} onComment={handleComment} />
      )}
    </div>
  );
} 