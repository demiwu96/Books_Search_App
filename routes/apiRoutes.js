const router = require("express").Router();
const booksController = require("../controller/bookController");

router.get("/api/savedbooks",booksController.findAll);

router.post("/api/books",booksController.create);

router.delete("/api/books/:id",booksController.remove);

module.exports = router;