import { errorResolver } from '../../util/errorResolver';
import { getGif, sortIngredients, getRecipe } from './util';

const getRecipes = async (req, res) => {
  try {
    const i = req.query.i;

    const puppyReturn = await getRecipe(i);

    const recipes = await Promise.all(
      puppyReturn.results.map(async item => ({
        title: item.title.trim(),
        ingredients: sortIngredients(item.ingredients),
        link: item.href,
        gif: await getGif(item.title.trim())
      }))
    );

    return res.json({ keywords: sortIngredients(i), recipes });
  } catch (err) {
    errorResolver(err, res);
  }
};

export default { getRecipes };
