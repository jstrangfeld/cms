import { Post } from "./../connectors";

export default {
  createPost({ input }) {
    const post = new Post({ ...input });
    return post.save((_, results) => results._id);
  }
};
