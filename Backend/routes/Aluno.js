import { db } from "../db.js";

var getaluno=(req,res)=>{
var q ="SELECT * FROM aluno"
db.query(q,(err,data)=>{
    if(err) 
        return res.json(err)
    else
        return res.json(data)
})
   
}
export default{
    getaluno:getaluno,
   
};