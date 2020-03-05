const express = require("express");
const cors = require("cors");
const { find } = require("./users");
const { apolloServer } = require("./graphql");

const PORT = 3001;

const app = express();
app.use(cors());

apolloServer.applyMiddleware({ app });

app.get("/", async (req, res) => {
  const regexp = new RegExp(/^[A-Z]+$/, "i");
  const { name } = req.query;
  let users = [];
  if (!name || regexp.test(name)) {
    users = await find(name);
  }

  res.json({
    users
  });
});

app.listen(PORT, () =>
  console.log(
    `REST Server ready on http://localhost:${PORT}\nGraphQL Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
  )
);
