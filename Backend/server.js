require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

// MongoDB Connection 
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.get('/', (req, res) => res.send('Samoha API Running!'));

app.listen(port, () => console.log(`Server listening on port ${port}`));