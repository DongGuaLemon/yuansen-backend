let phonenumber = require('../models/phonenumber')

module.exports = (router) => {
router.post('/Getphonenumber',function(req,res,next){
    let body=req.body;
    console.log(body)
    body=(body.phone).toString();
    console.log(typeof(body))
    phonenumber.selectphone(body)
        .then(function(rows){
            if(rows==null){
                console.log(rows,'no data')
                return phonenumber.addphone(body)
            }
            else{
                console.log('have data')
                return phonenumber.updatephone(body)
            }
        })
        .then(function(rows){
             res.json({message:'OK','response':rows})
        })
        .catch(function(err){
            console.log(err);
        })
    // phonenumber.addphone(body,(response)=>{
    //     console.log(response)
    //     res.json({message:'OK','response':response})
    // })
    //res.json(body)
    //res.send('this is localhost:3000/test')
  });
}
//module.exports = router;