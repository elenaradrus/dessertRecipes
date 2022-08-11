const router = require("express").Router();
const user = require("../controllers/user.controllers");

router.get("/recipeslist",user.recipes);
router.post("/showrecipe",user.showRecipe);

module.exports = router;