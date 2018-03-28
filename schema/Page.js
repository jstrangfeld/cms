import User from "./UserInterface";
import gql from "graphql-tag";

const Page = gql`
  type Page {
    id: Int!
    title: String
    content: String
    author: User
    editor: User
  }
`;

export default () => [Page, User];
