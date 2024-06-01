import mongoose from 'mongoose';
import './categoryModel.js'
import './brandModel.js'

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
  imageUrl: String,
  inStock: { type: Boolean, default: true }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

const Product = mongoose.model('Product', productSchema);
export default Product;
