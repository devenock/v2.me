"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Share2, MessageSquare } from "lucide-react";
import { Comments } from './Comments';

interface BlogInteractionsProps {
  slug: string;
}

export function BlogInteractions({ slug }: BlogInteractionsProps) {
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    fetchBlogData();
  }, [slug]);

  const fetchBlogData = async () => {
    try {
      const response = await fetch(`/api/blog/${slug}`);
      const data = await response.json();
      setLikes(data.likes);
      setShares(data.shares);
      setHasLiked(data.hasLiked);
      setComments(data.comments);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/blog/${slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'like' }),
      });
      const data = await response.json();
      setLikes(data.likes);
      setHasLiked(data.hasLiked);
    } catch (error) {
      console.error('Error liking blog:', error);
    }
  };

  const handleShare = async () => {
    try {
      await fetch(`/api/blog/${slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'share' }),
      });
      setShares(prev => prev + 1);
      
      // Share functionality
      if (navigator.share) {
        try {
          await navigator.share({
            title: document.title,
            url: window.location.href,
          });
        } catch (error) {
          console.error('Error sharing:', error);
        }
      } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing blog:', error);
    }
  };

  const handleComment = async (comment: string) => {
    try {
      const response = await fetch(`/api/blog/${slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'comment', comment }),
      });
      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLike}
          className={`flex items-center space-x-2 ${hasLiked ? 'text-red-500' : 'text-gray-500'}`}
        >
          <Heart className={`h-5 w-5 ${hasLiked ? 'fill-current' : ''}`} />
          <span>{likes}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleShare}
          className="flex items-center space-x-2 text-gray-500"
        >
          <Share2 className="h-5 w-5" />
          <span>{shares}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 text-gray-500"
        >
          <MessageSquare className="h-5 w-5" />
          <span>{comments.length}</span>
        </Button>
      </div>

      {showComments && (
        <Comments
          comments={comments}
          onComment={handleComment}
          onCommentsChange={setComments}
        />
      )}
    </div>
  );
} 