// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const connectDB = require('./config/db');
// require('dotenv').config(); // Load .env file

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to database
// connectDB();

// // Routes
// const authRoutes = require('./routes/authRoutes');
// app.use('/api/auth', authRoutes);

// const labRoutes = require('./routes/labRoutes');
// app.use('/api/labs', labRoutes);

// const seeBookingRoutes = require("./routes/seeBookingRoutes");
// app.use("/api/seebookings", seeBookingRoutes);





// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config(); // Load .env file

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to database
connectDB();

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const labRoutes = require('./routes/labRoutes');
app.use('/api/labs', labRoutes);

const seebookingRoutes = require("./routes/seeBookingRoutes");
app.use("/api/seebookings", seebookingRoutes);
// Routes
const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/eventbooking", bookingRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
