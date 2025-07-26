"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar?: string;
}

interface CommentsProps {
  comments: Comment[];
  onComment: (comment: string) => Promise<void>;
  onCommentsChange: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export function Comments({ comments, onComment, onCommentsChange }: CommentsProps) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    await onComment(newComment);
    setNewComment('');
  };

  return (
    <div className="mt-12 space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Comments</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px]"
        />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          Post Comment
        </Button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <Avatar>
              <AvatarImage src={comment.avatar} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center space-x-2">
                <p className="font-medium text-gray-900">{comment.author}</p>
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