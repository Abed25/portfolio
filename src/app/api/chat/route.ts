import { NextResponse } from 'next/server';
import { qaData } from '@/data/qaData';
import { findBestMatch } from '@/utils/chatUtils';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    const response = findBestMatch(message, qaData);
    
    return NextResponse.json({ message: response });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
} 