export function sortIngredients(ingredients) {
  return ingredients
    .split(',')
    .map(i => String(i).trim())
    .sort();
}
