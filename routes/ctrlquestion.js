let ctrlQA = require('../models/ctrlQA')
module.exports = (router) => {
    router.get('/displayquestion',function(req,res,next){
        ctrlQA.displayQA(response=>{
            console.log(response)
            res.json({message:'OK',data:response})
        })
    })
    router.post('/addquestion',function(req,res,next){
        let body=req.body;
        console.log(body);
        ctrlQA.addQA(body,(response)=>{
            console.log(response)
            res.json({message:'OK',data:response})
        })
    })
    router.post('/delquestion',function(req,res,next){
        let body=req.body.id;
        console.log(body);
        ctrlQA.delQA(body,(response)=>{
            res.json({message:'OK',data:response})
        })
    })
}