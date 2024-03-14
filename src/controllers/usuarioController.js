// controllers/usuarioController.js

const Usuario = require('../models/Usuario');

exports.create = (req, res) => {
    const nuevoUsuario = req.body;
    Usuario.create(nuevoUsuario, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Error al crear usuario'
            });
        } else {
            res.send(data);
        }
    });
};

exports.findById = (req, res) => {
    Usuario.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.message === 'Usuario no encontrado') {
                res.status(404).send({
                    message: 'Usuario no encontrado'
                });
            } else {
                res.status(500).send({
                    message: 'Error al buscar usuario por ID'
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.updateById = (req, res) => {
    Usuario.updateById(req.params.id, req.body, (err, data) => {
        if (err) {
            if (err.message === 'Usuario no encontrado') {
                res.status(404).send({
                    message: 'Usuario no encontrado'
                });
            } else {
                res.status(500).send({
                    message: 'Error al actualizar usuario'
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.remove = (req, res) => {
    Usuario.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.message === 'Usuario no encontrado') {
                res.status(404).send({
                    message: 'Usuario no encontrado'
                });
            } else {
                res.status(500).send({
                    message: 'Error al eliminar usuario'
                });
            }
        } else {
            res.send({ message: 'Usuario eliminado exitosamente' });
        }
    });
};
