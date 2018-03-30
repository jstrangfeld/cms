import {
  getAuthor,
  getAllAuthors,
  getPost,
  getAllPosts,
  createAuthor,
  createPost,
  findPostsByAuthor,
  findPostsByEditor,
  updateAuthor,
  updatePost
} from "./connectors";

const resolvers = {
  Query: {
    author(root, args) {
      return getAuthor(args);
    },
    allAuthors() {
      return getAllAuthors();
    },
    post(root, args) {
      return getPost(args);
    },
    allPosts() {
      return getAllPosts();
    }
  },
  Mutation: {
    createPost(root, { input }) {
      return createPost(input);
    },
    updatePost(root, { input }) {
      return updatePost(input);
    },
    createAuthor(root, { input }) {
      return createAuthor(input);
    },
    updateAuthor(root, { input }) {
      return updateAuthor(input);
    }
  },
  Author: {
    authored(author) {
      return findPostsByAuthor(author);
    },
    edited(editor) {
      return findPostsByEditor(editor);
    }
  },
  Post: {
    author(post) {
      return getAuthor({ id: post.authorId });
    },
    editor(post) {
      return getAuthor({ id: post.editorId });
    }
  }
};

export default resolvers;
