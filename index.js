require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(cors());  // Enable CORS for all domains
app.use(express.json());  // For parsing application/json

// Database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/books', bookRoutes);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




