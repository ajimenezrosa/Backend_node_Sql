
import {Router}  from 'express';
import { createNewProduct, deleteProductById, getProductById, getProductCount, getProducts, updateProductById } from '../controllers/product.controller'

const router = Router();


router.get('/products', getProducts)

router.get('/products/:id', getProductById)

router.get('/products/:count', getProductCount)

router.post('/products', createNewProduct)

router.delete('/products/:id', deleteProductById)

router.put('/products/:id', updateProductById)




export default router;