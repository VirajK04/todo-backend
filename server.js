import dotenv from "dotenv";
import express, { json } from "express";
import connectDB from "./config/db.js";

dotenv.config({
    path: "./.env"
})

//connecting the database
connectDB();

const app = express();

app.use(json({ extended: false }));

//routes
import todoRoute from "./routes/todo.route.js";
app.use("/todo", todoRoute);

app.get("/", (req, res) => res.send("Server up and running"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});