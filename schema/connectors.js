import Mongoose from "mongoose";

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect(
  "mongodb://dvrpc-cms:dvrpc-cms@ds119449.mlab.com:19449/dvrpc-cms"
);

const Post = Mongoose.model(
  "post",
  Mongoose.Schema({
    _id: {
      type: Mongoose.Schema.ObjectId,
      auto: true
    },
    title: String,
    text: String,
    url: String,
    authorId: String,
    editorId: String,
    lastUpdated: Date
  })
);

const Author = Mongoose.model(
  "author",
  Mongoose.Schema({
    _id: {
      type: Mongoose.Schema.ObjectId,
      auto: true
    },
    name: String,
    email: String
  })
);

export function getAuthor(args) {
  return args.id ? Author.findById(args.id) : Author.find(args);
}

export function getAllAuthors() {
  return Author.find();
}

export function createAuthor(input) {
  const author = new Author(input);
  return author.save();
}

export function getPost(args) {
  return args.id ? Post.findById(args.id) : Post.findOne(args);
}

export function getAllPosts() {
  return Post.find();
}

export function createPost(input) {
  const post = new Post(input);
  return post.save();
}

export function findPostsByAuthor(author) {
  return Post.find({ authorId: author._id });
}

export function findPostsByEditor(editor) {
  return Post.find({ editorId: editor._id });
}

export function updatePost(post) {
  return Post.findByIdAndUpdate(post._id, post);
}

export function updateAuthor(author) {
  return Author.findByIdAndUpdate(author._id, author);
}
