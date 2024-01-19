require('dotenv').config()

const express = require('express')
const cors = require('cors')

const mongoConfig = require('./config')

const Todo = require('./models/TodoModel')

const app = express()

const PORT = 8080

app.use(cors())
app.use(express.json())

app.get('/api/test', (req, res) => {
    console.log('test')
    res.json('Server says: Hello Client!')
})

// "index" route
app.get('/api/todos', async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
})

// "create" route
app.post('/api/todos', async (req, res) => {
    try {
        console.log('POST /api/todos')
        console.log(req.body)
        const todo = await Todo.create(req.body)
        res.status(200).json(todo)
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
})

// "delete" route
app.delete('/api/todos/:id', async (req, res) => {
    try {
        console.log('DELETE /api/todos/:id')
        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'successfully deleted' })
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
})

// "update" route
app.put('/api/todos/:id', async (req, res) => {
    try {
        console.log('PUT /api/todos/:id')
        await Todo.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: 'successfully updated' })
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
    mongoConfig()
})


