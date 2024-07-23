import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  try {
    const recipe = await prisma.recipe.findUnique({
      where: {
        id,
      },
      include: {
        recipeIngredients: {
          include: {
            ingredient: true,
          },
        },
        steps: true,
      },
    });

    if (!recipe) NextResponse.json({ error: 'Recipe not found' }, { status: 404 });

    return NextResponse.json(recipe);
  } catch (error) {
    return NextResponse.json({ error: 'error retrieving recipe' });
  }
}
