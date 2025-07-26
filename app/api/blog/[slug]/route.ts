import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// In-memory storage for demo purposes
// In a real app, you'd use a database
let blogData = new Map();

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const { action, comment } = await request.json();
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value || 'anonymous';

  if (!blogData.has(slug)) {
    blogData.set(slug, {
      likes: new Set(),
      comments: [],
      shares: 0
    });
  }

  const data = blogData.get(slug);

  switch (action) {
    case 'like':
      if (data.likes.has(userId)) {
        data.likes.delete(userId);
      } else {
        data.likes.add(userId);
      }
      break;
    case 'comment':
      if (comment) {
        data.comments.push({
          id: Date.now().toString(),
          author: userId,
          content: comment,
          date: new Date().toISOString(),
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`
        });
      }
      break;
    case 'share':
      data.shares += 1;
      break;
  }

  return NextResponse.json({
    likes: data.likes.size,
    comments: data.comments,
    shares: data.shares,
    hasLiked: data.likes.has(userId)
  });
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value || 'anonymous';

  if (!blogData.has(slug)) {
    blogData.set(slug, {
      likes: new Set(),
      comments: [],
      shares: 0
    });
  }

  const data = blogData.get(slug);

  return NextResponse.json({
    likes: data.likes.size,
    comments: data.comments,
    shares: data.shares,
    hasLiked: data.likes.has(userId)
  });
} 