import Garcom from '../models/Garcom.js'

export default class GarcomController {

    constructor(caminhoBase = 'Garcom/') {
        this.caminhoBase = caminhoBase

        this.openAdd = async (req, res) => {
            res.render(caminhoBase + "add")
        }

        this.Excluir = async (req, res) => {
            await Garcom.findByIdAndDelete(req.params.id)
            res.redirect('/' + this.caminhoBase + 'lst')
        }

        this.add = async (req, res) => {
    await Garcom.create({
        nome: req.body.nome,
        idade: req.body.idade,
        telefone: req.body.telefone,
        email: req.body.email,
        turno: req.body.turno,
        salario: req.body.salario,
        adminNotes: req.body.adminNotes
    })
    res.redirect('/' + caminhoBase + 'add')
}


        this.list = async (req, res) => {
            const resultado = await Garcom.find({})
            res.render(caminhoBase + 'lst', { Garcons: resultado })
        }

        this.openEdt = async (req, res) => {
            const id = req.params.id
            const garcom = await Garcom.findById(id)
            console.log(garcom)
            res.render(caminhoBase + 'edt', { Garcon: garcom })
        }

        this.Edt = async (req, res) => {
    const data = {
        ...req.body,
        ativo: req.body.ativo === 'on'
    }

    await Garcom.findByIdAndUpdate(req.params.id, data)
    res.redirect('/' + this.caminhoBase + 'lst')
}

        this.find = async (req, res) => {
            const filtro = req.body.garcon
            const resultado = await Garcom.find({ nome: { $regex: filtro, $options: "i" } })
            res.render(caminhoBase + 'lst', { Garcons: resultado })
        }
    }
}
