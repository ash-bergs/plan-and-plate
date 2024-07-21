import { Flex, Skeleton, Title } from '@mantine/core';
import { fetchRecipes } from './fetchRecipes';
import AddRecipesCTA from '@/components/AddRecipesCTA/AddRecipesCTA';
import HorizontalScrollingList from '@/components/HorizontalScrollingList/HorizontalScrollingList';
import RecipesDataLayer from '@/components/DataLayers/RecipesDataLayer';

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
            <HorizontalScrollingList />
          </Flex>
        </Flex>
      </RecipesDataLayer>
    </>
  );
}
