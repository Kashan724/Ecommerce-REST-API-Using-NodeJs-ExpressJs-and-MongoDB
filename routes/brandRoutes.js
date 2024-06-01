import express from 'express';
import { getAllBrands, getBrandById, createBrand } from '../controllers/brandController.js';

const router = express.Router();

router.get('/', getAllBrands);
router.get('/:brandId', getBrandById);
router.post('/', createBrand);

export default router;
