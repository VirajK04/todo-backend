import express from "express";
import { getAllTodo, postCreateTodo, putUpdateTodo, deleteTodo } from "../controllers/todo.controller.js";

const router = express.Router();

//get todos
router.get("/", getAllTodo);

//create todo
router.post("/", postCreateTodo);

//update todo
router.put("/:id", putUpdateTodo);

//delete todo
router.delete("/:id", deleteTodo);

export default router