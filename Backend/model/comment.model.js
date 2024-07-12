import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    bookId: {
      type: Schema.Types.ObjectId,
      ref: "book",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    review: {
      rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
      },
      reviewText: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const Comment = model("comment", commentSchema);
export default Comment;
  
 