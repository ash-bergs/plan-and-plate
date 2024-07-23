'use client';

import { Title, Text, Flex } from '@mantine/core';

const AddRecipesCTA = () => (
  <Flex
    p="lg"
    gap="sm"
    direction="column"
    c="white"
    w="100%"
    bg="pink"
    style={{
      borderRadius: '8px',
    }}
  >
    <Title>Add Your Own Recipes!</Title>
    <Text fz="lg">
      Easily add your own recipes and include them alongside found favorites in your meal plan!
    </Text>
  </Flex>
);

export default AddRecipesCTA;
