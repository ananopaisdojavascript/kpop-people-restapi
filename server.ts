import express, { Request, Response } from 'express';
import mysql from 'mysql';
const app = express();
const port = process.env.PORT || 5000;

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/people', (request: Request, response: Response) => {
    const query = 'SELECT * FROM people';
    connection.query(query, (error, results, fields) => {
        if (error) throw error;
        response.send(JSON.stringify(results));
    })
})

app.get('/people/:id', (request: Request, response: Response) => {
    const id = request.params.id;
    response.send("Uau!!! " + id)
})

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}! Uhu!!!!!`));