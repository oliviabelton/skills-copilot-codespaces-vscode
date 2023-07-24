// Create web server
// Create web server for comment
//================================================

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//Handle request
router.get('/', commentController.comment_list)
router.get('create', commentController.comment.comment_create_generator)
router.post('create', commentController.comment_create_path)
router.get('/:id/delete' commentController.comment_delete)
