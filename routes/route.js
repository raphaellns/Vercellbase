import express from 'express';
const router = express.Router();
import controller from '../controllers/controller.js';
const controle = new controller();

// Admin
router.get('/', controle.home); // index.ejs

// Usuário
router.get('/home', controle.homeUsuario); // home.ejs

// Exemplos de lista
router.get('/Prato/lst', controle.lstPratos);
router.get('/Bebida/lst', controle.lstBebidas);
router.get('/Garcom/lst', controle.lstGarcons);
router.get('/Categoria/lst', controle.lstCategorias);

export default router;
