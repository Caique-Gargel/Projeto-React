import { db } from "../db.js";

var getdb=(req,res)=>{
var q ="SELECT * FROM estado"
db.query(q,(err,data)=>{
    if(err) 
        return res.json(err)
    else
        return res.json(data)
})
   
}
export default{
    getdb:getdb,
    aux:"batata"
};