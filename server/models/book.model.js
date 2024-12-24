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
        "https://firebasestorage.googleapis.com/v0/b/mern-blog-d1c6e.appspot.com/o/bookhub%2Fbooklogo.png?alt=media&token=56b703cb-9e76-45b3-857c-d9b976e526a0",
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
export default Book;
