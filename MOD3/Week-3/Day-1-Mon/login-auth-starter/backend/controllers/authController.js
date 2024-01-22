const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function register(req, res) {

    try {
        // 1. Check if the user exists 

        const foundUser = await User.findOne({ username: req.body.username })

        if (foundUser) {
            return res.status(400).json({ error: 'User already exists' })
        }

        // 2. If they don't (new user... good!) encrypt the password

        const encryptedPassword = await bcrypt.hash(req.body.password, 10)

        console.log(encryptedPassword)

        // 3. Add new user to the database (with the encrypted password)

        console.log({ ...req.body, password: encryptedPassword })

        const newUser = await User.create({ ...req.body, password: encryptedPassword })

        console.log(newUser)

        // 4. Generate a JWT token (the keys... permission slip... wrist band) and returning it to the user 
            
        const payload = { id: newUser._id, username: newUser.username }
        const token = jwt.sign(payload, 'super secret string', { expiresIn: 30 })

        console.log(token)

        res.status(200).json({ token })

    } catch(err) {
        console.log(err.message)
        res.status(400).json({ error: err.message })
    }

}

async function login(req, res) {
}

module.exports = {
    register,
    login
}