
const getRecipes = async (req, res) => {
  try {
    const i = req.query.i;

    return res.json({ query: i });
  } catch (err) {
    res.status(400).json({ errorMsg: err });
  }
};

export default { getRecipes };
