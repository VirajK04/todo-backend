import { Todo } from "../models/todo.models.js";


const getAllTodo = async (req, res) => {
    await Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json("Error: " + err));
}

const postCreateTodo = async(req, res) => {
    await Todo.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add todo", error: err.message })
        );
};

const putUpdateTodo = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update todo", error: err.message })
        );
};

const deleteTodo = async (req, res) => {
    await Todo.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "todo deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};

export { getAllTodo, postCreateTodo, putUpdateTodo, deleteTodo }