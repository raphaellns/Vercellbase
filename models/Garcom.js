import conexao from '../config/conexao.js'

const Garcom = conexao.Schema({
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    turno: { type: String, enum: ['Manhã', 'Tarde', 'Noite'], default: 'Manhã' },
    salario: { type: Number, required: true },
    dataContratacao: { type: Date, default: Date.now },
    endereco: { type: String },
    ativo: { type: Boolean, default: true },
    adminNotes: { type: String }
})

export default conexao.model('Garcom', Garcom)
