import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getProductsByBrand
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:productId', getProductById);
router.post('/', createProduct);
router.put('/:productId', updateProduct);
router.delete('/:productId', deleteProduct);
router.get('/category/:categoryId', getProductsByCategory); 
router.get('/brand/:brandId', getProductsByBrand);
export default router;
