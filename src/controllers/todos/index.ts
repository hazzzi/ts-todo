import { Request, Response } from "express"
import { ITodo } from "./../../types/todo"
import Todo from "./../../models/todo"

const getTodos = async (request: Request, response: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await Todo.find()
        response.status(200).json({ todos })
    } catch (error) {
        throw error
    }
}
