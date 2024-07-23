'use client';

import { Center, Text, Group, Flex, Stack } from '@mantine/core';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { Recipe } from '@/types/recipes';
import CleanupRatingBanner from '@/components/Ratings/CleanupRatingBanner';
import styled from 'styled-components';

type RecipeCardProps = {
  recipe: Recipe;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.14);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const ingredientsCount = recipe.recipeIngredients.length;
  return (
    <StyledContainer>
      <div>
        <Group
          style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingLeft: '26px',
            paddingRight: '26px',
          }}
        >
          <Center
            style={{
              height: '50px',
              width: '50px',
              borderRadius: '100%',
              backgroundColor: 'pink',
            }}
          >
            <GiForkKnifeSpoon />
          </Center>
          <Text fz="lg" fw="600">
            {recipe.title}
          </Text>
          {/** TODO: star ratings component */}
        </Group>
        <Flex>
          <Stack
            gap="10"
            style={{
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Text>Ingredients</Text>
            <Text>{ingredientsCount}</Text>
          </Stack>
          <Stack
            gap="10"
            style={{
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Text>Cleanup</Text>
            <CleanupRatingBanner rating={Number(recipe.cleanupRating)} />
          </Stack>
        </Flex>
      </div>
      <Flex
        bg="pink"
        py="10"
        style={{
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }}
      >
        <Stack
          gap="10"
          style={{
            flex: 1,
            alignItems: 'center',
          }}
        >
          <Text fw="600" c="white">
            Prep Time
          </Text>
          <Text c="white">{recipe.prepTime}</Text>
        </Stack>
        <Stack
          gap="10"
          style={{
            flex: 1,
            alignItems: 'center',
          }}
        >
          <Text c="white" fw="600">
            Cook Time
          </Text>
          <Text c="white">{recipe.cookTime}</Text>
        </Stack>
      </Flex>
    </StyledContainer>
  );
};

export default RecipeCard;
