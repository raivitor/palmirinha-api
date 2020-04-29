import axios from 'axios';
import { CONFIGS } from '../../util/configs';

export async function getGif(title) {
  const gif = await axios
    .get(
      `${CONFIGS.GIPHY_URL}?api_key=${CONFIGS.GIPHY_API_KEY}&q=${title}&limit=1`
    )
    .catch(() => {
      throw 'Giphy API error';
    });

  return gif.data.data.length === 1 ? gif.data.data[0].url : 'No gif found';
}

export function sortIngredients(ingredients) {
  return ingredients
    .split(',')
    .map(i => String(i).trim())
    .sort();
}
