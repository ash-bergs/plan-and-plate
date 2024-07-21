import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    const testData = await prisma.test.findMany();
    return NextResponse.json(testData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' });
  }
}
