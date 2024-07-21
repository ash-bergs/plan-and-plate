import { atom } from 'jotai';
import { Recipe } from '@/types/recipes';

export const recipesAtom = atom<Recipe[] | undefined>(undefined);
