import express from 'express';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './routes/users.js';

/*  CONFIGURATION  */

dotenv.config()

const uri = process.env.MONGO_URI
const PORT = process.env.PORT || 3001
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

const mongoConnect = async () => {
        await mongoose.connect(uri)
        console.log(`MongoDB connection was successfully established`.cyan.underline);
}
mongoConnect()

/*  ROUTES  */
app.use('/users', router)

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`.blue);
})