import User_Comment from '../../connection/comments'

export default async function handler(req,res){
    if(req.method==="POST"){
        try{
            if(req.body){
                const data=await new User_Comment({
                    name:req.body.name,
                    comment:req.body.comment,
                                
        
                })
                await data.save()
                console.log(data)

                const data1=await  User_Comment.find().populate('replies')
                console.log(data1)
                return res.json({data1})
            }else{
                res.json("please provide some data ")
            }
        }catch(err){
            res.json({err})
        }
    }else{
        res.json(" post request only ")
    }
}