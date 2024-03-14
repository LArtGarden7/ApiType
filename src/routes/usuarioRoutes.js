// routes/usuarioRoutes.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rutas para usuarios
router.post('/', usuarioController.create);
router.get('/:id', usuarioController.findById);
router.put('/:id', usuarioController.updateById);
router.delete('/:id', usuarioController.remove);

module.exports = router;
