const express = require('express');
const router = express.Router();
const {getAllBooks, getBook, addBook, updateBook, deleteBook, seedBooks} = require('../controllers/bookControllers');

router.get('/', getAllBooks);
router.get('/seed', seedBooks);
router.get('/:id', getBook);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
