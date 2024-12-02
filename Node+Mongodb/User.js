const mongoose = require('mongoose');

// Address Schema
const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  }
});

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
   },
     address: {
    type: mongoose.Schema.Types.ObjectId,   
    ref: 'Address',
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at  '
  },
  versionKey: false,
});


const User = mongoose.model('User', userSchema);
const Address = mongoose.model('Address', addressSchema);

module.exports = { User, Address };