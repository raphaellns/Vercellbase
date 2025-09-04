import conexao from '../config/conexao.js'

const Prato = conexao.Schema({
    nome: {type:String, required:true},
    categoria:{type:String, required:true},
    preco:{type:Number, required:true},
    descricao:{type:String, required:true},
    tempoDePreparo:{type:Number, required:true},
    disponivel:{type:Boolean, required:true},
    ingredientes:{type:String, required:true}
})

export default conexao.model('Pratos',Prato)