const User = require('../models/User')
const bcrypt = require('bcrypt')

async function register(req, res) {

    // 1. Check if the user exists 

    const foundUser = await User.findOne({ username: req.body.username })

    if (foundUser) {
        return res.status(400).json({ error: 'User already exists' })
    }

    // 2. If they don't (new user... good!) encrypt the password

    const encryptedPassword = await bcrypt.hash(req.body.password, 10)

    console.log(req.body.password)
    console.log(encryptedPassword)

    // 3. Add new user to the database (with the encrypted password)

    // 4. Generate a JWT token (the keys... permission slip... wrist band) and returning it to the user 
        
}

async function login(req, res) {
}

module.exports = {
    register,
    login
}