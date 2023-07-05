const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')['development']);

app.get('/', (req, res) => {
    res.send('application is up and running')
})

app.listen(port, () => {
    console.log('your knex and express are running successfully')
})

app.get('/pets', (req, res) => {
    knex('pet')
        .select('*')
        .then(pets => {
            res.json(pets);
        })
})