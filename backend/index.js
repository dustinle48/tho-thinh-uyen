require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const httpServer = require("http").createServer(app);
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const name = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;
mongoose.connect(`mongodb+srv://${name}:${pass}@tho-thinh-uyen.p4svrbw.mongodb.net/poem?retryWrites=true&w=majority`, function() {
    console.log('Database connected')
})

app.use(bodyParser.urlencoded({ extended: false }));

const poemRouter = require('./api/poem/route/poemRouter');
app.use('/poems', poemRouter);

httpServer.listen(PORT, () => console.log(`Server is running on port ${PORT}`));