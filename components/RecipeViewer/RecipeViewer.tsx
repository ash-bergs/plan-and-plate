'use client';

import { Box, Flex, Text, Title } from '@mantine/core';
import { Recipe } from '@/types/recipes';
import Ingredients from './Ingredients';
import RecipeRating from './RecipeRating';
import Steps from './Steps';

type RecipeViewerProps = {
  recipe: Recipe;
};

const RecipeViewer = ({ recipe }: RecipeViewerProps) => {
  const {
    title,
    description,
    difficulty,
    cleanupRating,
    cookTime,
    prepTime,
    steps,
    recipeIngredients,
  } = recipe;

  const totalCookTime = (cookTime || 0) + (prepTime || 0);

  return (
    <Flex direction="column" gap="16">
      {/* Recipe image */}
      <Box w="100%" h="30vh" bg="pink" />
      {/* recipe header */}
      <Flex>
        <Flex direction="column" gap="16" flex="1">
          <Title>{title}</Title>
          <Text>{description}</Text>
        </Flex>

        {/* Recipe rating/stats area */}
        <RecipeRating
          difficulty={difficulty}
          cleanupRating={cleanupRating}
          totalCookTime={totalCookTime}
        />
      </Flex>
      {/* Ingredients area */}
      <Flex direction="column" gap="16">
        <Title size="h2">Ingredients</Title>
        <Ingredients recipeIngredients={recipeIngredients} />
      </Flex>

      {/* Steps area */}
      <Flex direction="column" gap="16">
        <Title size="h2">Steps</Title>
        <Steps steps={steps} />
      </Flex>
    </Flex>
  );
};

export default RecipeViewer;
