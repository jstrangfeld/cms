import Page from "./Page";
import gql from "graphql-tag";

const User = gql`
  type User {
    id: Int!
    name: String
    email: String
    pages: [Page]
  }
`;

export default () => [User, Page];
