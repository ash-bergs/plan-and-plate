'use client';

import { ReactNode } from 'react';
import useSyncAtom from '@/store/useSyncAtom';
import { recipesAtom } from '@/store';
import { Recipe } from '@/types/recipes';
// the point of this component is to take the fetched recipes
// and set them to the relevant atoms
// it renders out it's children

type RecipesDataLayerProps = {
  children: ReactNode;
  recipes: Recipe[];
};

const RecipesDataLayer = ({ recipes, children }: RecipesDataLayerProps) => {
  useSyncAtom(recipesAtom, recipes);

  return <>{children}</>;
};

export default RecipesDataLayer;
