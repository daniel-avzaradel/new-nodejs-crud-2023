import User from "../models/user";

export const getUsers = async (req, res) => {
    try {
        User.find()
        .then(users => res.json(users))
        .catch(err => console.log('error: ' + err.message))
    } catch (error) {
        res.status(500).json({err: error.message})
    }
}

export const addUser = async (req, res) => {
    try {
        const { username, email, password, firstName, lastName, country } = req.body;
        const newUser = new User({ username, email, password, firstName, lastName, country })
        newUser.save()
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).json({error: err.message}))
    } catch (error) {
        res.status(500).json({err: error.message})
    }
}