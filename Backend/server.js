require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
    'http://localhost:5173',
    'https://mysamoha.com', 
    'https://pharma0202.netlify.app', 
    'https://www.mysamoha.com'
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true); 
        
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
app.use(express.json()); 
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));


const productRoutes = require('./routes/productRoutes');
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);


app.get('/', (req, res) => res.send('Samoha API Running!'));

app.listen(port, () => console.log(`Server listening on port ${port}`));