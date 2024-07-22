export type Ingredient = {
  id: string;
  name: string;
};

export type RecipeIngredient = {
  ingredient: Ingredient;
  quantity: number;
  unit: string;
};

export type Step = {
  id: string;
  number: number;
  content: string;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  content?: string;
  summary?: string;
  difficulty?: string;
  cleanupRating?: number;
  prepTime?: number;
  cookTime?: number;
  recipeIngredients: RecipeIngredient[];
  steps: Step[];
};

/* -------------------------------- FORM DATA ------------------------------- */
export type AddRecipeFormData = {
  title: string;
  description?: string;
  content?: string;
  summary?: string;
  ingredients: { amount: number; unit: string; name: string }[];
  steps: string[];
  //difficulty?: string;
  //cleanupRating?: number;
  prepTime?: number;
  cookTime?: number;
  servingSize?: number;
  // draft: boolean;
  // cuisine?: string;
  // category?: string;
};
