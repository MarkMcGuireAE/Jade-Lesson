const express = require('express')

const router = express.Router()

const fruits = require('./models/fruits')

// "index" route
router.get('/fruits', (req, res) => {
    res.render('Index', { fruits: fruits })
})

// "new" route
router.get('/fruits/new', (req, res) => {
    res.render('New')
})

// "show" route
router.get('/fruits/:index', (req, res) => {
    res.render('Show', { fruit: fruits[req.params.index], index: req.params.index })
    // res.send(fruits[req.params.index])
})

// "create" route
router.post('/fruits', (req, res) => {
    console.log(req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
})

// "edit" route
router.get('/fruits/:index/edit', (req, res) => {
    res.render('Edit', { fruit: fruits[req.params.index], index: req.params.index })
})

// "destroy" route
router.delete('/fruits/:index', (req, res) => {
    fruits.splice(req.params.index, 1)
    console.log('deleting')
    res.redirect('/fruits')
})

// "update" route
router.put('/fruits/:index', (req, res) => {
    console.log('update')
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits[req.params.index] = req.body
    res.redirect(`/fruits/${req.params.index}`)
})

module.exports = router