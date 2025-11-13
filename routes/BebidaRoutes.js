import express from 'express'
import BebidaController from '../controllers/BebidaController.js'

const router = express.Router()
const controle = new BebidaController()
const caminhobase = 'Bebida/'

// Add
router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)

// Listar / Buscar
router.get('/' + caminhobase + 'lst', controle.list)
router.post('/' + caminhobase + 'lst', controle.find)

// Editar
router.get('/' + caminhobase + 'edt/:id', controle.openEdt)
router.post('/' + caminhobase + 'edt/:id', controle.Edt)

// Deletar
router.get('/' + caminhobase + 'del/:id', controle.Excluir)

export default router
