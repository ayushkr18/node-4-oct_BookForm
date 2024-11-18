const express = require("express");
const multer = require("multer");
const bookcontroller = require("../controllers/bookcontroller");
const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 10 * 1024 * 1024 },
});

router.use(express.urlencoded({ extended: false }));
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/find/window", (req, res) => {
  res.render("signuppage.ejs");
});

router.post("/signup", upload.single('bookImage'), (req, res) => {
  bookcontroller.signUp(req, res);
});

router.post("/search", (req, res) => {
  bookcontroller.doSearch(req, res);
});

// router.get("/books", (req, res) => {
//   bookcontroller.getBooks(req, res);
// });

module.exports = router;
