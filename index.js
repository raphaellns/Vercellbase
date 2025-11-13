import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routes from './routes/route.js'; // rotas externas
import PratoRoutes from './routes/PratoRoutes.js'
import CategoriaRoutes from './routes/CategoriaRoutes.js'
import GarcomRoutes from './routes/GarcomRoutes.js'
import BebidaRoutes from './routes/BebidaRoutes.js'


const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


// Caminho correto das views e public
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Servir arquivos estáticos
app.use(express.static(join(__dirname, '/public')));
app.set('views', join(__dirname, '/views'));

// Rotas
app.use(PratoRoutes)
app.use(CategoriaRoutes)
app.use(GarcomRoutes)
app.use(BebidaRoutes)
app.use(routes)
app.listen(3000)
// Exporta o handler compatível com Vercel
export default app;