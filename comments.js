// create web server
// express is a function
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { Comment } = require('../models/comment');
const { User } = require('../models/user');

// path: /api/comments
// get all comments
router.get('/', async (req, res) => {
    const comments = await Comment.find().sort('date');
    res.send(comments);
});

// path: /api/comments/:id
// get comment by id
