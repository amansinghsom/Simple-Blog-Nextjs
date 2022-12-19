import jwt from "jsonwebtoken";
import User from '../../connection/Connection'


let token = jwt.sign(
    {
      data: "foobar",
    },
    "secret",
    { expiresIn: 60 * 60 }
  );
  

  
  export default async function handler(req, res) {
    try{
      switch (req.method) {
        case "POST":
            if (req.body) {
              if ( req.body.email && req.body.password) {
                try {
  
                  let myPost = await  User.findOne({
                    email: req.body.email,
                  });
                  if(myPost){
                  return res.status(200).json({myPost,token});

                  }else{
                  return res.status(200).json({data:'data not found '});

                  }
                } catch (err) {
                 return  res.json({err});
                }
              }
              
            }
        break;
            
        case "GET":
          console.log('GET')
  
          res.json({ status: 200, data: "okk..." });
          break;
      }
    }catch(err){
      res.json('ok..')
    }
    
    
  
  }