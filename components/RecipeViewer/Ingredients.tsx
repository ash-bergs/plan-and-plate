import { Flex, Text, Title } from '@mantine/core';
import { RecipeIngredient } from '@/types/recipes';

type IngredientsProps = {
  recipeIngredients: RecipeIngredient[];
};

const Ingredients = ({ recipeIngredients }: IngredientsProps) => {
  if (!recipeIngredients.length) {
    return (
      <Flex direction="column" gap="16">
        <Title size="h2">Ingredients</Title>
        <Text>
          There are no ingredients for this recipe! If this is your recipe you can edit, or you can
          request the author complete it!
        </Text>
      </Flex>
    );
  }

  return (
    <Flex direction="column" gap="16">
      <Title size="h2">Ingredients</Title>
      <Flex direction="column" px="2" gap="16px">
        {recipeIngredients.map((ingredient, index) => (
          <Text key={index}>
            {ingredient.quantity} {ingredient.unit} {ingredient.ingredient.name}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};
export default Ingredients;
