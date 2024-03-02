var express = require('express')
const pool = require('./queries')
var router = express.Router()


router.get('/actor', (req,res) => {
    pool.query('SELECT * FROM actor', (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json(result.rows)
    })
})


router.get('/film', (req,res) => {
    pool.query('SELECT * FROM film', (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json(result.rows)
    })
})

router.get('/film/:id', (req,res) => {
    pool.query(`SELECT * FROM film WHERE film_id=${req.params.id}`, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json(result.rows)
    })
})

router.get('/category', (req,res) => {
    pool.query('SELECT * FROM category', (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json(result.rows)
    })
})

router.get('/category/:id', (req,res) => {
    pool.query(`SELECT * FROM category WHERE category_id=${req.params.id}`, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json(result.rows)
    })
})


module.exports = router