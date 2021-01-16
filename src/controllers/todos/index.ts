import { Request, Response } from "express"
import { ITodo } from "./../../types/todo"
import Todo from "../../models/todo"

const getTodos = async (request: Request, response: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await Todo.find().sort({_id: "desc"})
        response.status(200).json({ todos })
    } catch (error) {
        throw error
    }
}

const addTodo = async (request: Request, response: Response): Promise<void> => {
    try {
        const body = request.body as Pick<ITodo, "name" | "description" | "status">

        const todo: ITodo = new Todo({
            name: body.name,
            description: body.description,
            status: body.status,
        })

        const newTodo: ITodo = await todo.save()
        const allTodos: ITodo[] = await Todo.find()

        response
            .status(201)
            .json({ message: "Todo added", todo: newTodo, todos: allTodos })
    } catch (error) {
        throw error
    }
}

const updateTodo = async (request: Request, response: Response): Promise<void> => {
    try {
        const { params: { id }, body } = request
        const updateTodo: ITodo | null = await Todo.findByIdAndUpdate({ _id: id }, body)

        const allTodos: ITodo[] = await Todo.find()

        response.status(200).json({
            message: "Todo updated.",
            todo: updateTodo,
            todos: allTodos
        })
    } catch (error) {
        throw error
    }
}

const deleteTodo = async (request: Request, response: Response): Promise<void> => {
    try {
        const { params: { id } } = request

        const deletedTodo: ITodo | null = await Todo.findByIdAndRemove({ _id: id })
        const allTodos: ITodo[] = await Todo.find()

        response.status(200).json({
            message: "Todo deleted",
            todo: deletedTodo,
            todos: allTodos
        })
    } catch (error) {
        throw error
    }
}

export { getTodos, updateTodo, addTodo, deleteTodo }
