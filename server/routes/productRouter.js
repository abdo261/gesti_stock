const ProductRouter = require("express").Router();
const {
  create,
  getAll,
  getById,
  update,
  remove,
} = require("../controllers/productController");
const isAuth = require("../middlewares/isAuthenticated");

/**
 * @method POST
 * @route /api/products
 * @access Private (Admin)
 * @description Create a new product
 */
ProductRouter.post("/", create);

/**
 * @method GET
 * @route /api/products
 * @access Public (Admin, user)
 * @description Get all products
 */
ProductRouter.get("/", getAll);

/**
 * @method GET
 * @route /api/products/:id
 * @access Public (Admin, user)
 * @description Get a product by ID
 */
ProductRouter.get("/:id", getById);

/**
 * @method PUT
 * @route /api/products/:id
 * @access Private (Admin)
 * @description Update a product
 */
ProductRouter.put("/:id", 
// isAuth,
 update);

/**
 * @method DELETE
 * @route /api/products/:id
 * @access Private (Admin)
 * @description Delete a product
 */
ProductRouter.delete("/:id",
//  isAuth,
  remove);

module.exports = ProductRouter;
