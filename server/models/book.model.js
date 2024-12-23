import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      default:
        "https://firebasestorage.googleapis.com/v0/b/mern-blog-d1c6e.appspot.com/o/bookhub%2Fbooklogo2.png?alt=media&token=8804e4b6-6e96-4941-a3ae-5e81d730da11",
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
export default Book;
