import express from 'express'
import GarcomController from '../controllers/GarcomController.js'

const router = express.Router()
const controle = new GarcomController()
const caminhobase = 'Garcom/'

// Rotas de cadastro
router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)

// Rotas de listagem e busca
router.get('/' + caminhobase + 'lst', controle.list)
router.post('/' + caminhobase + 'lst', controle.find)

// Rotas de edição
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)
router.post('/' + caminhobase + 'edt/:id', controle.Edt)

// Rota de exclusão
router.get('/' + caminhobase + 'del/:id', controle.Excluir)

export default router
