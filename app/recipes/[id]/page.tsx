import { Container } from '@mantine/core';
import RecipeViewer from '@/components/RecipeViewer/RecipeViewer';

// Fetch the recipe data based on the provided ID
export async function fetchRecipe(id: string) {
  const res = await fetch(`http://localhost:3000/api/recipes/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      //'Cache-Control': 'no-store', // Disable caching
    },
    //cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch recipe');
  }

  return res.json();
}
//TODO: Implement an atom to keep track of our URL
// then recipe can be fetched in the atom
export default async function RecipesListPage({ params }: { params: { id: string } }) {
  const recipe = await fetchRecipe(params.id);

  return (
    <>
      <Container>
        <RecipeViewer recipe={recipe} />
      </Container>
    </>
  );
}
