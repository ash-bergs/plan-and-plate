import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    const recipes = await prisma.recipe.findMany({
      include: {
        recipeIngredients: {
          include: {
            ingredient: true,
          },
        },
        steps: true,
      },
    });
    return NextResponse.json(recipes);
  } catch (error) {
    return NextResponse.json({ error: 'error retrieving recipes' });
  }
}
