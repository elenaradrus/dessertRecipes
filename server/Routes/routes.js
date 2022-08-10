const router = require("express").Router();
const user = require("../controllers/user.controllers");

router.get("/recipeslist",user.recipes);

module.exports = router;