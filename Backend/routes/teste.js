import { db } from "../db.js";

export const getdb=(req,res)=>{
    var q ="SELECT * FROM estado"
    db.query(q,(err,data)=>{
        if(err) 
            return res.json(err)
        else
            return res.json(data)
    })
   

}
