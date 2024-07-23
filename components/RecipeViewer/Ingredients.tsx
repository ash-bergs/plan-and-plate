import { Flex, Text } from '@mantine/core';
import { RecipeIngredient } from '@/types/recipes';

type IngredientsProps = {
  recipeIngredients: RecipeIngredient[];
};

const Ingredients = ({ recipeIngredients }: IngredientsProps) => {
  if (!recipeIngredients.length) {
    return (
      <Text>
        There are no ingredients for this recipe! If this is your recipe you can edit, or you can
        request the author complete it!
      </Text>
    );
  }

  return (
    <Flex direction="column" px="2" gap="16px">
      {recipeIngredients.map((ingredient, index) => (
        <Text key={index}>
          {ingredient.quantity} {ingredient.unit} {ingredient.ingredient.name}
        </Text>
      ))}
    </Flex>
  );
};
export default Ingredients;
