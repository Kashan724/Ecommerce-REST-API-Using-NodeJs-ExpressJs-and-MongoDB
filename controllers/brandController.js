import Brand from '../models/brandModel.js';

// Get all brands
export const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single brand by ID
export const getBrandById = async (req, res) => {
  let brand;
  try {
    brand = await Brand.findById(req.params.brandId);
    if (brand == null) {
      return res.status(404).json({ message: 'Cannot find brand' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.json(brand);
};

// Create a new brand
export const createBrand = async (req, res) => {
  const brand = new Brand({
    name: req.body.name,
  });
  try {
    const newBrand = await brand.save();
    res.status(201).json(newBrand);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
