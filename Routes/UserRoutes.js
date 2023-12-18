const router = require("express").Router();
const {
  getUsers,
  updateUser,
  getUser,
} = require("../Controllers/UserController");

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);

module.exports = router;
