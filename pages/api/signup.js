// import User from "../../connection/Connection";
import jwt from "jsonwebtoken";
import User from '../../connection/Connection'

export default async function handler(req, res) {
  try{
    switch (req.method) {
      case "POST":
          if (req.body) {
            console.log(req.body)
            if (req.body.name && req.body.email && req.body.password) {
              try {
                console.log("POST")

                let myPost = await new User({
                  name: req.body.name,
                  email: req.body.email,
                  password: req.body.password,
                });
                await myPost.save();
                console.log(myPost)
                return res.status(200).json({myPost});
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