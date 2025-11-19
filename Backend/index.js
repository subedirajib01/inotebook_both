const express = require("express");
const connectToMongo = require("./db");
const app = express();
const cors =require('cors')
connectToMongo();
const port = 5000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
console.log(`iNotebook backend listening at http://localhost:${port}`);
});


