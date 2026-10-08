import { NextRequest, NextResponse } from 'next/server';
import { analyzeScholarships } from '@/lib/ai';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const query = body.query || 'STEM scholarships for high school students';
  const result = await analyzeScholarships(query);

  return NextResponse.json(result);
}
