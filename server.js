import app from './src/app';

const PORT = process.env.PORT || 3000;
export default app.server.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);
