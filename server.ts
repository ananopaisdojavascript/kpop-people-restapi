import express, { Request, Response } from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.get('/people', (request: Request, response: Response) => {
    const query = 'SELECT * FROM people';
    connection.query(query, (error, results, fields) => {
        if (error) throw error;
        response.send(JSON.stringify(results));
    })
})

app.get('/people/:id', (request: Request, response: Response) => {
    const id = request.params.id;
    const query = `SELECT * FROM people WHERE id = ${id}`;
    connection.query(query, (error, results, fields) => {
        if (error) throw error;
        response.send(JSON.stringify(results));
    })
})

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}! Uhu!!!!!`));