const express = require('express');
const router = express.Router();

const products_controller = require('../controllers/products.controller');

router.get('/', products_controller.getProducts);
router.get('/:productId', products_controller.getProductById);

export default router;