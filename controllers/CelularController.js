//importar o Model
import Celular from '../models/Celular.js'

export default class CelularController
{

    constructor(caminhoBase = 'Celular/')
    {
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>
        {
            res.render(caminhoBase + "add")
        }
            this.Excluir = async(req, res)=>{
                await Celular.findByIdAndDelete(req.params.id)
                res.redirect('/' + this.caminhoBase + 'lst')
            }
        this.add = async(req, res)=>
        {
            await Celular.create
            (
                {
                    nome: req.body.nome,
                    modelo: req.body.modelo,
                    sistema: req.body.sistema,
                    armazenamento: req.body.armazenamento,
                    preco: req.body.preco,
                    fabricante: req.body.fabricante
                }

            )
            res.redirect('/' + caminhoBase + 'add')
        }
        this.list = async(req, res)=>
        {
            const resultado = await Celular.find({})
            res.render(caminhoBase + 'lst', {Celulares:resultado})
        }
        this.openEdt = async(req, res)=>
        {
            //passar quem eu quero editar
            const id = req.params.id
            const celular = await Celular.findById(id)
            console.log(celular)
            res.render(caminhoBase + 'edt', {Celular:celular})  
        }
        this.Edt = async(req, res)=>{
            await Celular.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/' + caminhoBase + 'lst')
        }

        this.find = async(req, res) =>{

            const filtro = req.body.celular
            const resultado = await Celular.find({nome: { $regex: filtro, $options: "i" }})
            res.render(caminhoBase + 'lst', {Celulares:resultado})
        }
    }
}