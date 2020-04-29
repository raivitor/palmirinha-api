export const errorResolver = (err, res) => {
  console.error(err);
  if (err.isAxiosError === true) {
    return res.status(err.response.status).json(err.response.data.message);
  }
  return res.status(400).json({ errorMsg: err });
};
