import Bebida from '../models/Bebida.js'

export default class BebidaController {
    constructor(caminhoBase = 'Bebida/') {
        this.caminhoBase = caminhoBase

        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add")
        }

        this.add = async (req, res) => {
            await Bebida.create({
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: parseFloat(req.body.preco)
            })
            res.redirect('/' + caminhoBase + 'add')
        }

        this.list = async (req, res) => {
            const resultado = await Bebida.find({})
            res.render(caminhoBase + 'lst', { Bebidas: resultado })
        }

        this.openEdt = async (req, res) => {
            const bebida = await Bebida.findById(req.params.id)
            res.render(caminhoBase + 'edt', { Bebida: bebida })
        }

        this.Edt = async (req, res) => {
            await Bebida.findByIdAndUpdate(req.params.id, {
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: parseFloat(req.body.preco)
            })
            res.redirect('/' + caminhoBase + 'lst')
        }

        this.Excluir = async (req, res) => {
            await Bebida.findByIdAndDelete(req.params.id)
            res.redirect('/' + caminhoBase + 'lst')
        }

        this.find = async (req, res) => {
            const filtro = req.body.bebida
            const resultado = await Bebida.find({ nome: { $regex: filtro, $options: "i" } })
            res.render(caminhoBase + 'lst', { Bebidas: resultado })
        }
    }
}
