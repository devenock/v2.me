"use client";

import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

interface CommentsProps {
  comments: Comment[];
  onComment: (comment: string) => void;
}

export function Comments({ comments, onComment }: CommentsProps) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim()) {
      onComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Comments</h3>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="min-h-[80px] resize-none"
            />
            <button
              type="submit"
              disabled={!newComment.trim()}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post Comment
            </button>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900">{comment.author}</span>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 