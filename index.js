import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './utils/connectDB.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import brandRoutes from './routes/brandRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/brands', brandRoutes);

const PORT = process.env.PORT || 5000;


connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  }).catch((err) => {
    console.error('Database connection failed', err);
    process.exit(1);
  });
