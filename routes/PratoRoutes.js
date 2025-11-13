import express from 'express'
import multer from 'multer'
import PratoController from '../controllers/PratoController.js'

const router = express.Router()

const storage = multer.memoryStorage()
const upload = multer({ storage })

const controle = new PratoController()
const caminhobase = 'Prato/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', upload.single('imagem'), controle.add)

router.get('/' + caminhobase + 'lst', controle.list)
router.post('/' + caminhobase + 'lst', controle.find)

router.get('/' + caminhobase + 'edt/:id', controle.openEdt)
router.post('/' + caminhobase + 'edt/:id', controle.Edt)

router.get('/' + caminhobase + 'del/:id', controle.Excluir)

export default router
