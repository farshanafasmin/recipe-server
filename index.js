const json_server = require('json-server');
const cors = require('cors');

const recipeServer = json_server.create();
const middleware = json_server.defaults();

// Apply middleware and CORS
recipeServer.use(cors());
recipeServer.use(middleware);

// Use the JSON file as a database and set up the router
const router = json_server.router('recipe.json');
recipeServer.use(router);

const PORT = 8000;
recipeServer.listen(PORT, () => {
    console.log(`Recipe Server started at http://localhost:${PORT}`);
});
