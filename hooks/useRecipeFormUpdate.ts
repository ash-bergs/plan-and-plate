import { useAtom } from 'jotai';
import { addRecipeFormDataAtom } from '@/store';
import { AddRecipeFormData } from '@/types/recipes';

/**
 * Custom hook to manage and update the recipe form data atom.
 * Provides function to update certain fields, ingredients, and steps.
 * @returns {object} An object containing the form data and update functions.
 */
export const useFormData = () => {
  const [formData, setFormData] = useAtom(addRecipeFormDataAtom);

  /**
   * Updates a specific field in the form data
   *
   * @param {keyof AddRecipeFormData} field - the field in the form to update
   * @param {any} value - The new value for the field
   */
  const updateField = (field: keyof AddRecipeFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // we created our own little object for the ingredients, we'll have to look through it to make the request
  // and add to the recipesIngredients JOIN table
  /**
   * Updates a specific ingredient in the ingredients array
   *
   * @param {number} index - The index of the ingredient to update
   * @param {keyof AddRecipeFormData['ingredients'][0]} field - The field of the ingredient to update (name, amount, unit)
   * @param {any} value - The new value for the field
   */
  const updateIngredient = (
    index: number,
    field: keyof AddRecipeFormData['ingredients'][0],
    value: any
  ) => {
    setFormData((prev) => {
      const ingredients = [...prev.ingredients];
      // update the specific ingredient at the given index by creating shallow copy
      // then setting the specified field to the new value
      ingredients[index] = { ...ingredients[index], [field]: value };
      return { ...prev, ingredients };
    });
  };

  /**
   * Updates a specific step in the steps array
   *
   * @param {number} index - The index of the step to update
   * @param {string} value - The new value for the specified step
   */
  const updateStep = (index: number, value: string) => {
    setFormData((prev) => {
      const steps = [...prev.steps];
      steps[index] = value;
      return { ...prev, steps };
    });
  };

  return { formData, updateField, updateIngredient, updateStep };
};
