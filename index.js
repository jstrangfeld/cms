import express from "express";
import bodyParser from "body-parser";
import gql from "graphql-tag";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./schema/schema";
import rootValue from "./schema/mutationResolvers";

const PORT = 3000;

const app = express();

// bodyParser is needed just for POST.
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema, rootValue })
);
app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" })); // if you want GraphiQL enabled

app.listen(PORT);
console.log(`Server running at http://localhost:${PORT}`);