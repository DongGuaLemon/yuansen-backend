let answercheck = require('../models/answer')
module.exports = (router) => {
    router.post('/answercheck',function(req,res,next){
        let body=req.body;
        console.log(body,3);
        answercheck.selectanswer(body,(response)=>{
            // let check = response
            console.log(Object.keys(response).length,4)
            if(Object.keys(response).length==0){
                res.json({message:'ok',data:false})
            }
            else{
                res.json({message:'ok',data:true})
            }
            })
    })
}