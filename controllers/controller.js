export default class GeralController {
    constructor() {
        // Admin
        this.home = async (req, res) => {
            res.render('index'); 
        };

        // Usuário
        this.homeUsuario = async (req, res) => {
            res.render('home'); 
        };

        // Listas
        this.lstPratos = async (req, res) => {
            res.render('Prato/lst');
        };
        this.lstBebidas = async (req, res) => {
            res.render('Bebida/lst');
        };
        this.lstGarcons = async (req, res) => {
            res.render('Garcom/lst');
        };
        this.lstCategorias = async (req, res) => {
            res.render('Categoria/lst');
        };

        this.teste = async (req, res) => {
            const resultado = "teste";
            res.render('index2', { teste: resultado });
        };

        this.formulario = async (req, res) => {
            res.render('index');
        };
    }
}
