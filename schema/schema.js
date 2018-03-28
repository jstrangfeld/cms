import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
//import Page, { resolvers as PageResolvers } from "./Page";
//import User from "./UserInterface";
//import { find, filter } from "lodash";
import gql from "graphql-tag";
import { Post } from "./../connectors";

const typeDefs = gql`
  type Query {
    author(firstName: String, lastName: String): Author
    allAuthors: [Author]
    post(id: ID, title: String, url: String): Post
    allPosts: [Post]
  }

  type Author {
    id: ID!
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String
    text: String
    url: String
    author: Author
  }

  type Mutation {
    createAuthor(input: AuthorInput): Author
    updateAuthor(id: ID!, input: AuthorInput): Author
    createPost(input: PostInput): Post
    updatePost(id: ID!, input: PostInput): Post
  }

  input AuthorInput {
    firstName: String
    lastName: String
  }

  input PostInput {
    title: String
    text: String
    views: Int
    authorId: Int
  }
`;

const resolvers = {
  Query: {
    author(root, args) {
      return { id: 1, firstName: "Hello", lastName: "World" };
    },
    allAuthors() {
      return [{ id: 1, firstName: "Hello", lastName: "World" }];
    }
  },
  Author: {
    posts(author) {
      return Post.find({ authorId: author.id }).then(view => view.posts);
    }
  },
  Post: {
    author(post) {
      return { id: 1, title: "A post", text: "Some text", views: 2 };
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
