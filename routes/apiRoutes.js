const router = require("express").Router();
const booksController = require("../controller/bookController");

router.get("/savedbooks",booksController.findAll);

router.post("/books",booksController.create);

router.delete("/books/:id",booksController.remove);

module.exports = router;