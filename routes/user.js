//import packages 
const express = require('express')
const router = express.Router()


// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

router.get('/', (req, res) => {
    res.json(users)
})

router.get('/:id', (req, res) => {
    const user = users[req.params.id - 1]
    res.json(user)
})

/*
Create POST /users route handler for creating a new user in the user Express router.

Create PUT /users/<id> route handler for updating a user in the user Express Router.

Create DELETE /users/<id> route handler for removing a user in the user Express Router.
*/

router.post('/', (req, res) => {
    const newUser = req.body
    console.log("new user: ", newUser)
    users.push(newUser)
    res.json(users)
})

router.put('/:id', (req, res) => {
    const updatedUser = req.body
    console.log("update user: ", updatedUser)
    //let index = req.params.id 
    Object.assign(users[req.params.id -1], updatedUser)
    res.json(users)
})

router.delete('/:id', (req, res) => {
    users.splice((req.params.id - 1), 1)
    res.json(users)
})


module.exports = router