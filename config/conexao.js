import mongoose from "mongoose";
const url = "mongodb+srv://marcelosiedler:ifsul@ifsul.fify4.mongodb.net/"
const conexao = await mongoose.connect(url)

export default conexao