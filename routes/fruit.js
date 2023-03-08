const express = require('express')
const router = express.Router()

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.get('/', (req, res) => {
    res.json(fruits)
})

router.get('/:id', (req, res) => {
    const fruit = fruits[req.params.id - 1]
    res.json(fruit)
})


//Exercise 2 - CRUD Routers

router.post('/', (req, res) => {
    const newFruit = req.body
    console.log("new fruit: ", newFruit)
    fruits.push(newFruit)
    res.json(fruits)
})

router.put('/:id', (req, res) => {
    const updatedFruit = req.body
    console.log("update fruit: ", updatedFruit)
    //let index = req.params.id 
    Object.assign(fruits[req.params.id -1], updatedFruit)
    res.json(fruits)
})

router.delete('/:id', (req, res) => {
    fruits.splice((req.params.id - 1), 1)
    res.json(fruits)
})

module.exports = router