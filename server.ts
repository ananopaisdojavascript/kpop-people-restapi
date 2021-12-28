import express, { Request, Response } from 'express';
const app = express();
const port = process.env.PORT || 5000;

app.get('/people', (request: Request, response: Response) => {
    response.send("Hey!!!")
})

app.get('/people/:id', (request: Request, response: Response) => {
    const id = request.params.id;
    response.send("Uau!!! " + id)
})

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}! Uhu!!!!!`));