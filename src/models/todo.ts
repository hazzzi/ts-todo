import { ITodo } from "./../types/todo"
import { model, Schema } from "mongoose"

/**
 * Todo 모델
 */
const todoSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
)

export default model<ITodo>("Todo", todoSchema)