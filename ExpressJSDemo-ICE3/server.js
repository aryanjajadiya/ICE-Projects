const express = require("express");

const dotenv = require ("dotenv").config();
connectDb();
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(errorHandler);
app.use("/api/students", require("../routes/studentsRoutes"));

app.listen(port, ()=> {
        console.log(`Server running on port ${port}`);
})