import mongoose from "mongoose";
const url = "mongodb+srv://Raphaell:123@cluster0.w1qyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const conexao = await mongoose.connect(url)

export default conexao