import Mongoose from "mongoose";
import uuid from "uuid/v4";

// somewhere in the middle:
Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect(
  "mongodb://dvrpc-cms:dvrpc-cms@ds119449.mlab.com:19449/dvrpc-cms"
);

export const Post = Mongoose.model(
  "posts",
  Mongoose.Schema({
    _id: {
      type: Mongoose.Schema.ObjectId,
      auto: true
    },
    title: String,
    text: String,
    authorId: Number,
    views: Number
  })
);
