export async function fetchRecipes() {
  //TODO: re-evaluate how we want to handle caching
  // it seems like just turning it all off so we get the newest stuff isn't exactly a good way to do this
  // but I'm just working toward MVP right now
  const res = await fetch('http://localhost:3000/api/recipes/getRecipes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      //'Cache-Control': 'no-store', // Disable caching
    },
    //cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }

  return res.json();
}
