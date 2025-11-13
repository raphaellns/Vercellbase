import Prato from '../models/Prato.js'
import Categoria from '../models/Categoria.js'

export default class PratoController {

    constructor(caminhoBase = 'Prato/') {
        this.caminhoBase = caminhoBase

        this.openAdd = async (req, res) => {
    try {
        const categorias = await Categoria.find({});
        res.render(caminhoBase + 'add', { Categorias: categorias });
    } catch (err) {
        console.error(err);
        res.send('Erro ao carregar categorias');
    }
};


        this.Excluir = async (req, res) => {
            await Prato.findByIdAndDelete(req.params.id)
            res.redirect('/' + this.caminhoBase + 'lst')
        }

        this.add = async (req, res) => {
            await Prato.create({
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                categoria: req.body.categoria,
                imagem: req.file.buffer,
                destaque: req.body.destaque === 'on'
            })
            res.redirect('/' + caminhoBase + 'add')
        }

        this.list = async (req, res) => {
            const resultado = await Prato.find({})

            const resposta = resultado.map(prato => ({
                id: prato._id,
                nome: prato.nome,
                descricao: prato.descricao,
                preco: prato.preco,
                categoria: prato.categoria,
                destaque: prato.destaque,
                imagem: prato.imagem && Buffer.isBuffer(prato.imagem)
                    ? `data:image/png;base64,${prato.imagem.toString('base64')}`
                    : null
            }))

            res.render(caminhoBase + 'lst', { Pratos: resposta })
        }

        this.openEdt = async (req, res) => {
            const id = req.params.id
            const prato = await Prato.findById(id)
            res.render(caminhoBase + 'edt', { Prato: prato })
        }

        this.Edt = async (req, res) => {
            await Prato.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/' + caminhoBase + 'lst')
        }

        this.find = async (req, res) => {
            const filtro = req.body.prato
            const resultado = await Prato.find({ nome: { $regex: filtro, $options: "i" } })
            res.render(caminhoBase + 'lst', { Pratos: resultado })
        }
    }
}
