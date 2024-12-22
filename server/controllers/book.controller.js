import Book from "../models/book.model.js";
export const createBook = async (req, res) => {
  const { title, author, description, imageURL } = req.body;
  try {
    if (title || author || description) {
      throw new Error("all fields are required");
    }
    const newBook = new Book({
      title,
      author,
      description,
      imageURL,
    });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getBooks = async (req, res) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.sort === "asc" ? 1 : -1;
    const books = await Book.find({
      ...(req.query.searchQuery && {
        $or: [
          { title: { $regex: req.query.searchQuery, $options: "i" } },
          { author: { $regex: req.query.searchQuery, $options: "i" } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalBooks = await Book.countDocuments();
    res.status(200).json({ books, totalBooks });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const updatePost = await Book.findByIdAndUpdate(
      req.params.bookId,
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          imageURL: req.body.imageURL,
          author: req.body.author,
        },
      },
      { new: true }
    );
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.bookId);
    res.status(200).json("The book has been deleted");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
