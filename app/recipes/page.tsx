import { Flex, Skeleton, Title } from '@mantine/core';
import { fetchRecipes } from './fetchRecipes';
import AddRecipesCTA from '@/components/AddRecipesCTA/AddRecipesCTA';
import RecipesDataLayer from '@/components/DataLayers/RecipesDataLayer';
import RecipeList from '@/components/RecipeList/RecipeList';

export default async function RecipesListPage() {
  const recipes = await fetchRecipes();

  return (
    <>
      <RecipesDataLayer recipes={recipes}>
        <Flex direction="column" gap="lg" p="lg">
          <Flex gap="md">
            <Skeleton>Search</Skeleton>
            <Skeleton>Filter</Skeleton>
          </Flex>
          <AddRecipesCTA />
          <Flex direction="column" gap="sm">
            <Title size="h2">Newly Added Recipes</Title>
            <RecipeList />
          </Flex>
        </Flex>
      </RecipesDataLayer>
    </>
  );
}
