'use client';

import Link from 'next/link';
import { Box, Flex } from '@mantine/core';
import { useAtom } from 'jotai';
import { recipesAtom } from '@/store';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipeList = () => {
  const [recipes] = useAtom(recipesAtom);
  return (
    <Flex wrap="wrap" gap="16">
      {recipes?.map((recipe, index) => (
        <Box w="300px" h="250px" key={index}>
          <Link
            href={`/recipes/${recipe.id}`}
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <RecipeCard recipe={recipe} />
          </Link>
        </Box>
      ))}
    </Flex>
  );
};

export default RecipeList;
