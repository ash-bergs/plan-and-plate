import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Unit, AddRecipeFormData } from '@/types/recipes';

export async function POST(req: Request) {
  try {
    const data: AddRecipeFormData = await req.json();

    // Ensure ingredient names are in lowercase
    const processedIngredients = data.ingredients.map((ingredient) => ({
      ...ingredient,
      name: ingredient.name.toLowerCase(),
      unit: Unit[ingredient.unit as keyof typeof Unit],
    }));
    const newRecipe = await prisma.recipe.create({
      data: {
        title: data.title,
        description: data.description,
        content: data.content,
        summary: data.summary,
        // difficulty: data.difficulty, // these will all come later
        // cleanupRating: data.cleanupRating,
        prepTime: data.prepTime,
        cookTime: data.cookTime,
        servingSize: data.servingSize,
        // draft: data.draft,
        // cuisine: data.cuisine,
        // category: data.category,
        //TODO: Might consider handling adding steps and ingredients differently
        // like a promise.all await, in a separate function
        // that would probably be safer than mapping in here
        recipeIngredients: {
          create: processedIngredients.map((ingredient) => ({
            ingredient: {
              connectOrCreate: {
                where: { name: ingredient.name },
                create: { name: ingredient.name },
              },
            },
            quantity: ingredient.amount,
            unit: ingredient.unit,
          })),
        },
        steps: {
          create: data.steps.map((step, index) => ({
            number: index + 1,
            content: step,
          })),
        },
      },
    });

    return NextResponse.json(newRecipe);
  } catch (error) {
    return NextResponse.json({ error: 'error creating recipe' });
  }
}
