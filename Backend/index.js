const express = require('express');
const server = express();
server.get('/',(req,res)=>{
    return res.json({mensagem:"api top"})
})
server.get('/usuario',(req,res)=>{
    return res.json({usuario:"caique"})
})
server.listen(5000,()=>{
    console.log('servidor funcionando');
    
})