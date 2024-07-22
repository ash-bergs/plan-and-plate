import { atom } from 'jotai';
import { Recipe, AddRecipeFormData } from '@/types/recipes';

export const recipesAtom = atom<Recipe[] | undefined>(undefined);

const initialFormData: AddRecipeFormData = {
  title: '',
  description: '',
  content: '',
  summary: '',
  ingredients: [{ amount: 0, unit: '', name: '' }],
  steps: [''],
  //difficulty: '',
  //cleanupRating: 0,
  prepTime: 0,
  cookTime: 0,
  servingSize: 0,
  //draft: true,
  //cuisine: '',
  //category: '',
};

// we'll make an atom to track our form data...
export const addRecipeFormDataAtom = atom<AddRecipeFormData>(initialFormData);
