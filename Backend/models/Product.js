const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true }, 
  unit: { type: String, default: '60 Tablets' }, 
  category: { type: String, default: 'General Wellness' },
  isFeatured: { type: Boolean, default: false },
});

module.exports = mongoose.model('Product', productSchema);