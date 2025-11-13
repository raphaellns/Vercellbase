import conexao from '../config/conexao.js'

const Categoria = conexao.Schema({
    nome: { type: String, required: true },
    descricao: { type: String }
})

export default conexao.model('Categoria', Categoria)