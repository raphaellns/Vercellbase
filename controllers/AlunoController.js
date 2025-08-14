import Aluno from '../models/aluno.js'

export default class AlunoController{

    constructor(basePath = 'aluno/'){
        this.basePath = basePath

        this.openAdd = async(req, res)=>{
        res.render(basePath + "add")
        }

        this.add = async(req, res)=>{
            //Cria o Aluno

            await Aluno.create({
                name: req.body.name,
                registration: req.body.registration
            });
            res.redirect('/' + basePath + 'add')
        }
        this.list = async(req, res)=>{
            const result = await Aluno.find({})
            res.render(basePath + 'lst', {Alunos:result})
        }
    }
}