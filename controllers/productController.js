import Product from '../models/productModel.js';

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get products by category
export const getProductsByCategory = async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      const products = await Product.find({ category: categoryId });
      if (products.length === 0) return res.status(404).json({ message: `No products found in the category with ID ${categoryId}` });
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
export const getProductsByBrand = async (req, res) => {
  try {
    const products = await Product.find({ brand: req.params.brandId }).populate('brand');
    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found for this brand' });
    }
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};