import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

const Category = mongoose.model('Category', categorySchema);
export default Category;
