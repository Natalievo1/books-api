const Book = require('../models/book');

exports.seedBooks = async (req, res) => {
    Book.insertMany([
        {
            "title": "The Shinobi Initiative",
            "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
            "year": 2014,
            "quantity": 10,
            "imageURL": "https://imgur.com/LEqsHy5.jpeg"
        },
        {
            "title": "Tess the Wonder Dog",
            "description": "The tale of a dog who gets super powers",
            "year": 2007,
            "quantity": 3,
            "imageURL": "https://imgur.com/cEJmGKV.jpg"
        },
        {
            "title": "The Annals of Arathrae",
            "description": "This anthology tells the intertwined narratives of six fairy tales.",
            "year": 2016,
            "quantity": 8,
            "imageURL": "https://imgur.com/VGyUtrr.jpeg"
        },
        {
            "title": "Wâˆ€RP",
            "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
            "year": 2010,
            "quantity": 4,
            "imageURL": "https://imgur.com/qYLKtPH.jpeg"
        }
    ])
    .then(() => res.status(200).json({ message: 'Seed successful' }))
    .catch(err => {
        console.error(err);
        if (!res.headersSent) {
            res.status(500).json({ message: 'Seed unsuccessful', error: err.message });
        }
    });
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addBook = async (req, res) => {
  const book = new Book(req.body);
  try {
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

