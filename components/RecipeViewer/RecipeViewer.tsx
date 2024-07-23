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
      <Ingredients recipeIngredients={recipeIngredients} />

      {/* Steps area */}
      <Steps steps={steps} />
    </Flex>
  );
};

export default RecipeViewer;
