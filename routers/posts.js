const express = require('express')
const router = express.Router();
const posts = require("../controllers/posts.js");

// index
router.get('/', posts.index);

// create
router.get('/create', function(req, res) {
    res.send('<h1>Creazione nuovo post</h1>');
    });

// show
router.get('/:slug', posts.show);

module.exports = router;