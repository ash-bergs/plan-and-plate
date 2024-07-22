'use client';

import {
  Container,
  Text,
  TextInput,
  Textarea,
  Button,
  NumberInput,
  Select,
  Flex,
  Stack,
} from '@mantine/core';
import { useAtomValue } from 'jotai';
import { IconPlus } from '@tabler/icons-react';
import { addRecipeFormDataAtom } from '@/store';
import { useFormData } from '@/hooks/useRecipeFormUpdate';

const AddRecipe = () => {
  const { formData, updateField, updateIngredient, updateStep } = useFormData();
  const recipeFormData = useAtomValue(addRecipeFormDataAtom);

  console.log(recipeFormData);
  return (
    <Container size="sm">
      <Flex direction="column" gap="16">
        {/* Header Section */}
        <Flex justify="space-between" align="center" p="4">
          <Flex gap="16">
            <Flex
              direction="column"
              align="center"
              justify="center"
              bg="#ABEDC6"
              p="md"
              w="100px"
              style={{ borderRadius: '5px', boxShadow: '2px 4px 5px 0px rgba(0, 0, 0, 0.14)' }}
            >
              <Text size="sm">Ingredients</Text>
              <Text size="xl">2</Text>
            </Flex>
            <Flex
              direction="column"
              align="center"
              justify="center"
              bg="#ABEDC6"
              p="md"
              w="100px"
              style={{ borderRadius: '5px', boxShadow: '2px 4px 5px 0px rgba(0, 0, 0, 0.14)' }}
            >
              <Text size="sm">Steps</Text>
              <Text size="xl">1</Text>
            </Flex>
          </Flex>
          <Flex direction="column" gap="8">
            <Button size="lg" variant="outline" color="pink">
              Publish
            </Button>
            <Button size="lg" variant="outline" color="pink">
              Save
            </Button>
          </Flex>
        </Flex>

        {/* Recipe Name Input */}
        <TextInput
          placeholder="Recipe Name"
          size="lg"
          label="Recipe Name"
          value={formData.title}
          onChange={(e) => updateField('title', e.currentTarget.value)}
        />

        {/* Ingredients Section */}
        <Text size="xl" fw="500">
          Ingredients
        </Text>
        <Stack>
          {formData.ingredients.map((ingredient, index) => (
            <Flex align="center" key={index}>
              <NumberInput
                size="lg"
                placeholder="0"
                hideControls
                value={ingredient.amount}
                onChange={(value) => updateIngredient(index, 'amount', value)}
                style={{ width: 60 }}
              />
              <Select
                size="lg"
                placeholder="ounces"
                data={['ounces', 'grams', 'cups']}
                value={ingredient.unit}
                onChange={(value) => updateIngredient(index, 'unit', value)}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
              <TextInput
                size="lg"
                placeholder="Ingredient"
                value={ingredient.name}
                onChange={(e) => updateIngredient(index, 'name', e.currentTarget.value)}
                style={{ flexGrow: 1 }}
              />
            </Flex>
          ))}
        </Stack>
        <Button
          variant="outline"
          size="lg"
          color="pink"
          w="100%"
          leftSection={<IconPlus size={16} />}
          onClick={() =>
            updateField('ingredients', [...formData.ingredients, { amount: 0, unit: '', name: '' }])
          }
        >
          Add Ingredient
        </Button>

        {/* Time and Servings Section */}
        <Flex>
          <TextInput
            size="lg"
            placeholder="Preparation time"
            label="Preparation time"
            style={{ flex: 1, marginRight: 10 }}
            value={formData.prepTime}
            // uses the || operator to resolve to 0 if parseInt returns NaN
            onChange={(e) => updateField('prepTime', parseInt(e.currentTarget.value, 10) || 0)}
          />
          <TextInput
            size="lg"
            placeholder="Cooking time"
            label="Cooking time"
            style={{ flex: 1, marginRight: 10 }}
            value={formData.cookTime}
            onChange={(e) => updateField('cookTime', parseInt(e.currentTarget.value, 10) || 0)}
          />
          <TextInput
            size="lg"
            placeholder="Servings"
            label="Servings"
            style={{ flex: 1 }}
            value={formData.servingSize}
            onChange={(e) => updateField('servingSize', parseInt(e.currentTarget.value, 10) || 0)}
          />
        </Flex>

        {/* Steps Section */}
        <Text size="xl" fw="500">
          Steps
        </Text>
        <Stack>
          {formData.steps.map((step, index) => (
            <Flex
              align="center"
              bg="#F0F0F0"
              p="md"
              style={{ borderRadius: '5px', boxShadow: '2px 4px 5px 0px rgba(0, 0, 0, 0.14)' }}
            >
              <Text>{index + 1}</Text>
              <Textarea
                autosize
                minRows={3}
                size="lg"
                placeholder="Step description"
                value={step}
                onChange={(e) => updateStep(index, e.currentTarget.value)}
                style={{ flexGrow: 1, marginLeft: 10 }}
              />
            </Flex>
          ))}
        </Stack>
        <Button
          w="100%"
          size="lg"
          variant="outline"
          color="pink"
          leftSection={<IconPlus size={16} />}
          onClick={() => updateField('steps', [...formData.steps, ''])}
        >
          Add Step
        </Button>
      </Flex>
    </Container>
  );
};

export default AddRecipe;
