var express = require('express');
var usuarioController = require('../controllers/usuarioController');
var authController = require('../controllers/authController');
var router = express.Router();

router.route('/signin').post(authController.signin);

router.route('/me')
    .get(authController.autenticar,
        usuarioController.getMe,
        usuarioController.findOneUsuario);

router.route('/:id').get(usuarioController.findOneUsuario);

router.route('/').post(usuarioController.createUsuario);
router.route('/')
module.exports = router;