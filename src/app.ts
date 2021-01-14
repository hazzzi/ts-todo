import express, { Express } from "express";
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./router/router"

const app: Express = express();
const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(express.json()) // request.body가 undefined일때 해결
app.use(todoRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.4q1gs.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
    .connect(uri, options)
    .then(() => {
        app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))
    })
    .catch(error => {
        throw error
    })