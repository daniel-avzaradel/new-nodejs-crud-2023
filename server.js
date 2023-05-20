const express = require('express');
const cors = require('cors');
const colors = require('colors')
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config()

const PORT = process.env.PORT || 3001
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}))

const mongoConnect = async () => {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connection was successfully established`.cyan.underline);
}
mongoConnect()

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`.blue);
})