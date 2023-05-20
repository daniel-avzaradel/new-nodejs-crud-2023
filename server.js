const express = require('express');
const cors = require('cors');
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 3001
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})