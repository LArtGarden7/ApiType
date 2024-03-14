// models/Usuario.js

const db = require('../config/dbconfig');

const Usuario = {};

Usuario.create = (nuevoUsuario, result) => {
    db.query('INSERT INTO Usuarios SET ?', nuevoUsuario, (err, res) => {
        if (err) {
            console.log('Error al crear usuario: ', err);
            result(err, null);
            return;
        }
        console.log('Usuario creado: ', { id: res.insertId, ...nuevoUsuario });
        result(null, { id: res.insertId, ...nuevoUsuario });
    });
};

Usuario.findById = (id, result) => {
    db.query('SELECT * FROM Usuarios WHERE ID = ?', id, (err, res) => {
        if (err) {
            console.log('Error al buscar usuario por ID: ', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Usuario encontrado: ', res[0]);
            result(null, res[0]);
            return;
        }
        result({ message: 'Usuario no encontrado' }, null);
    });
};

Usuario.updateById = (id, usuario, result) => {
    db.query('UPDATE Usuarios SET ? WHERE ID = ?', [usuario, id], (err, res) => {
        if (err) {
            console.log('Error al actualizar usuario: ', err);
            result(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            result({ message: 'Usuario no encontrado' }, null);
            return;
        }
        console.log('Usuario actualizado: ', { id: id, ...usuario });
        result(null, { id: id, ...usuario });
    });
};

Usuario.remove = (id, result) => {
    db.query('DELETE FROM Usuarios WHERE ID = ?', id, (err, res) => {
        if (err) {
            console.log('Error al eliminar usuario: ', err);
            result(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            result({ message: 'Usuario no encontrado' }, null);
            return;
        }
        console.log('Usuario eliminado con ID: ', id);
        result(null, res);
    });
};

module.exports = Usuario;
