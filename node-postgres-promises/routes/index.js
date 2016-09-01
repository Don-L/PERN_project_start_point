const express = require('express');
const router = express.Router();

const db = require('../queries');

router.get('/table_name', db.getAllItems);
// router.get('/items/:id', db.getSingleItem);
// router.post('/items', db.createItem);
// router.put('/items/:id', db.updateItem);
// router.delete('/items/:id', db.removeItem);

module.exports = router;
