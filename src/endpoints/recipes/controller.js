import axios from 'axios';
import { errorResolver } from '../../util/errorResolver';
import { CONFIGS } from '../../util/configs';
import { getGif, sortIngredients } from './util';

const getRecipes = async (req, res) => {
  try {
    const i = req.query.i;

    const puppyReturn = await axios
      .get(`${CONFIGS.RECIPE_PUPPY_URL}/?i=${i}`)
      .catch(() => {
        throw 'RecipePuppy API error';
      });

    const recipes = await Promise.all(
      puppyReturn.data.results.map(async item => ({
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
