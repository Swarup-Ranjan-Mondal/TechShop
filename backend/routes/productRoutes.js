import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, checkAdmin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, checkAdmin, createProduct);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, checkAdmin, updateProduct)
  .delete(protect, checkAdmin, deleteProduct);

export default router;
