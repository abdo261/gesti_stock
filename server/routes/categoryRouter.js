const CategoryRouter = require("express").Router();
const {
  create,
  getAll,
  getById,
  update,
  remove,
} = require("../controllers/categoryController");
const isAuth = require("../middlewares/isAuthenticated");

/**
 * @method POST
 * @route /api/categories
 * @access Private (Admin)
 * @description Create a new category
 */
CategoryRouter.post("/", create);

/**
 * @method GET
 * @route /api/categories
 * @access Public (Admin, user)
 * @description Get all categories
 */
CategoryRouter.get("/", getAll);

/**
 * @method GET
 * @route /api/categories/:id
 * @access Public (Admin, user)
 * @description Get a category by ID
 */
CategoryRouter.get("/:id", getById);

/**
 * @method PUT
 * @route /api/categories/:id
 * @access Private (Admin)
 * @description Update a category
 */
CategoryRouter.put("/:id", 
// isAuth,
 update);

/**
 * @method DELETE
 * @route /api/categories/:id
 * @access Private (Admin)
 * @description Delete a category
 */
CategoryRouter.delete("/:id",
//  isAuth,
  remove);

module.exports = CategoryRouter;
