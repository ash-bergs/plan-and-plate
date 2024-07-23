'use client';

import { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { useAtom } from 'jotai';
import { recipesAtom } from '@/store';
import RecipeCard from '../RecipeCard/RecipeCard';

const HorizontalScrollingList = () => {
  const [recipes] = useAtom(recipesAtom);
  const itemSize = 300;
  const [listWidth, setListWidth] = useState(0);

  //TODO:
  // this isn't dynamic and doesn't update when the screen size changes
  // I really don't want this to be in a useEffect
  // is there some clever atom for managing window size, and updating when needed?
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setListWidth(window.innerWidth - 378);
    }
  }, []);

  //TODO: use loader with atom and show skeleton?
  if (!listWidth || listWidth === 0) return null;
  if (!recipes) return null;

  return (
    <List
      height={250}
      itemCount={recipes.length}
      itemSize={itemSize}
      layout="horizontal"
      width={listWidth}
    >
      {({ index, style }) => {
        const recipe = recipes[index];
        return (
          <div key={index} style={style}>
            <RecipeCard recipe={recipe} />
          </div>
        );
      }}
    </List>
  );
};

export default HorizontalScrollingList;
