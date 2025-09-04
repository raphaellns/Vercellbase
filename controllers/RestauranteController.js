//importar o Model
import Prato from '../models/Restaurante.js'

export default class RestauranteController
{

    constructor(caminhoBase = 'Restaurante/')
    {
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>
        {
            res.render(caminhoBase + "add")
        }
            this.Excluir = async(req, res)=>{
                await Prato.findByIdAndDelete(req.params.id)
                res.redirect('/' + this.caminhoBase + 'lst')
            }
        this.add = async(req, res)=>
        {
            await Prato.create
            (
                {
                    nome: req.body.nome,
                    categoria: req.body.categoria,
                    preco: req.body.preco,
                    descricao: req.body.descricao,
                    tempoDePreparo: req.body.tempoDePreparo,
                    disponivel: req.body.disponibilidade,
                    ingredientes: req.body.ingredientes
                }

            )
            res.redirect('/' + caminhoBase + 'add')
        }
        this.list = async(req, res)=>
        {
            const resultado = await Prato.find({})
            res.render(caminhoBase + 'lst', {Pratos:resultado})
        }
        this.openEdt = async(req, res)=>
        {
            //passar quem eu quero editar
            const id = req.params.id
            const prato = await Prato.findById(id)
            console.log(prato)
            res.render(caminhoBase + 'edt', {Prato:prato})  
        }
        this.Edt = async(req, res)=>{
            await Prato.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/' + caminhoBase + 'lst')
        }
    }
}