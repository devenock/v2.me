import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// In-memory storage for demo purposes
// In a real app, you'd use a database
const blogData = new Map();

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const { action, content } = await request.json();
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
      if (content) {
        data.comments.push({
          id: Date.now().toString(),
          author: userId,
          content: content,
          date: new Date().toISOString()
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
    isLiked: data.likes.has(userId),
    isShared: false // For demo purposes
  });
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
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
    isLiked: data.likes.has(userId),
    isShared: false // For demo purposes
  });
} 