// importar o Model
import Categoria from '../models/Categoria.js'

export default class CategoriaController {

    constructor(caminhoBase = 'Categoria/') {
        this.caminhoBase = caminhoBase

        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add")
        }

        this.Excluir = async (req, res) => {
            await Categoria.findByIdAndDelete(req.params.id)
            res.redirect('/' + this.caminhoBase + 'lst')
        }

        this.add = async (req, res) => {
            await Categoria.create({
                nome: req.body.nome,
                descricao: req.body.descricao
            })
            res.redirect('/' + caminhoBase + 'add')
        }

        this.list = async (req, res) => {
            const resultado = await Categoria.find({})
            res.render(caminhoBase + 'lst', { Categorias: resultado })
        }

        this.openEdt = async (req, res) => {
            const id = req.params.id
            const categoria = await Categoria.findById(id)
            console.log(categoria)
            res.render(caminhoBase + 'edt', { Categoria: categoria })
        }

        this.Edt = async (req, res) => {
            await Categoria.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/' + caminhoBase + 'lst')
        }

        this.find = async (req, res) => {
            const filtro = req.body.categoria
            const resultado = await Categoria.find({ nome: { $regex: filtro, $options: "i" } })
            res.render(caminhoBase + 'lst', { Categorias: resultado })
        }
    }
}
