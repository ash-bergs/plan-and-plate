'use client';

import { Center, Text, Group, Flex, Stack } from '@mantine/core';
import { GiForkKnifeSpoon, GiSaucepan } from 'react-icons/gi';
import { Recipe } from '@/types/recipes';

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const ingredientsCount = recipe.recipeIngredients.length;
  return (
    <Flex
      bd="1px solid pink"
      direction="column"
      h="100%"
      mr="12"
      style={{
        borderRadius: '10px',
      }}
      justify="space-between"
    >
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
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
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
    </Flex>
  );
};

export default RecipeCard;

// this component will take a number (integer)
// and render that many pots in a row

const CleanupRatingBanner = ({ rating }: { rating: number }) => {
  const totalPots = 5;
  return (
    <Flex>
      {Array.from({ length: totalPots }, (_, index) => (
        <GiSaucepan key={index} color={index < rating ? 'pink' : 'lightgrey'} size={24} />
      ))}
    </Flex>
  );
};
