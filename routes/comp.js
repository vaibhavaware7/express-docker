const express = require('express')

const router=express()

const db = require('../db')

router.get("/",(request,response)=>{

    const connection=db.connect();

    const statement="select * from company"

    connection.query(statement,(err,res)=>{
        if(err==null)
        {
            response.send(JSON.stringify(res))
        }
        else{
            response.send(JSON.stringify(err))
        }
        connection.end;
    })
})

module.exports=router