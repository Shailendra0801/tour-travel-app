const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const morgan = require('morgan'); //for logging HTTPS req in development
const helmet = require('helmet'); //to set various HTTP headers for security
const rateLimit = require('express-rate-limit');  //to limit reqs from same IP



dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {useNewUrlparse: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => res.send("API is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port ${PORT"));

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: "Something went wrong!"});
});

app.use(helmet());

const limiter = rateLimit({
    windowMS: 15 * 60 * 1000, //for 15 minutes
    max: 100 //limit each IP to 100 reqs per windowMS
})
app.use(limiter);

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const isProduction = process.env.NODE_ENV === 'production';