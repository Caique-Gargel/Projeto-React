import express from "express"
import { getdb } from "./routes/teste.js";
const app = express();
app.get('/',(req,res)=>{
    return res.json({mensagem:"api top"})
})
app.use('/teste',getdb)
app.listen(5000,()=>{
    console.log('servidor funcionando');
    
})
