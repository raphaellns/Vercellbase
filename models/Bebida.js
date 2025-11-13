import conexao from '../config/conexao.js'

const BebidaSchema = conexao.Schema({
    nome: { type: String, required: true },
    descricao: { type: String },
    preco: { type: Number, required: true }
})

export default conexao.model('Bebida', BebidaSchema)
