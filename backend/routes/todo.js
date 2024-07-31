const express =require('express');
const router = express.Router();
const controller = require('../controller/Ctodo');

router.get('/todos', controller.getTodo);
router.get('/todos/:id', controller.getTodo);
router.patch('/todos')
router.patch('/todos/:id', controller.patchTodo);
router.delete('/todos/:id', controller.deleteTodo)
module.exports = router;