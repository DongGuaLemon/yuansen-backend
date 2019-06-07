let question= require('../models/question')

module.exports = (router) => {
    router.post('/Getquestion',function(req,res,next){
        let body=req.body;
        console.log(body,1);
        body=body.number;
        question.selectquestion(body,(response)=>{
            delete response[0].Answer
            //console.log(response[0])
            res.json({message:'ok',data:response})
        })
        
    })

}