const express = require("express")
const postController = require("../controllers/post.controller")
const router = express.Router()
const multer = require("multer")

const upload = multer({ storage: multer.memoryStorage() });
router.post("/",upload.single("image"),postController.CreatePost)
router.get("/posts",postController.ShowPost)
router.delete("/delete/:id", postController.DeletePost)

module.exports = router