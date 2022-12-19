import User_Reply from '../../connection/Replies'
import User_Comment from '../../connection/comments'


export default async function handler(req,res){
    if(req.method==="POST"){
        try{
            if(req.body){

                const data=await  User_Comment.findById(
                    req.body.commentID,

        
              )
                console.log("ss")
                const data1=await new User_Reply({
                    text:req.body.text,
                    commentID:req.body.commentID
        
                })
                await data1.save()
                data.replies.push(data1._id)
                await data.save()
                return res.json({data1,data})
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