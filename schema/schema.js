import { makeExecutableSchema } from "graphql-tools";
import gql from "graphql-tag";
import resolvers from "./resolvers";

const typeDefs = gql`
  type Query {
    author(name: String, email: String): Author
    allAuthors: [Author]
    post(id: ID, url: String): Post
    allPosts: [Post]
  }

  type Author {
    id: ID!
    name: String
    email: String
    authored: [Post]
    edited: [Post]
  }

  type Post {
    id: ID!
    title: String
    text: String
    url: String
    author: Author
    editor: Author
  }

  type Mutation {
    createAuthor(input: AuthorInput): Author
    updateAuthor(id: ID!, input: AuthorInput): Author
    createPost(input: PostInput): Post
    updatePost(id: ID!, input: PostInput): Post
  }

  input AuthorInput {
    name: String
    email: String
  }

  input PostInput {
    title: String
    text: String
    authorId: ID
    url: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
