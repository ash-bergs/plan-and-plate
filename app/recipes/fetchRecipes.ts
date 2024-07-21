export async function fetchRecipes() {
  const res = await fetch('http://localhost:3000/api/recipes');
  if (!res.ok) {
    throw new Error('failed to fetch recipes');
  }

  return res.json();
}
