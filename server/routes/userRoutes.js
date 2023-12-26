const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");

const {
  signupUser,
  loginUser,
  updateUser,
  deleteUser,
  currentUser,
} = require("../controllers/userController.js");

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/current", validateToken, currentUser);
router.put("/:id", validateToken, updateUser);
router.delete("/:id", validateToken, deleteUser);

module.exports = router;
