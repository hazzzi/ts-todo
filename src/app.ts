import express, { Request, Response, NextFunction } from "express";
import router from "./router/router";

const app = express();

app.get('/', (request: Request, response: Response) => {
    response.send('hello');
})

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('start server');
})