import conexao from '../config/conexao.js'

const Prato = conexao.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    preco: { type: Number, required: true },
    categoria: { type: String, required: true },
    imagem: { type: Buffer, required: true },
    destaque: { type: Boolean, default: false }
})

export default conexao.model('Prato', Prato)