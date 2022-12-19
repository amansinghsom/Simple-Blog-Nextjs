import User_Comment from "../../connection/comments";

export default async function handler(req, res) {
  if(req.method=="POST"){
    try {
        if (req.body) {
          const data = await User_Comment.findById(req.body.commentID).populate('replies');
          return res.json({ data });
        } else {
          res.json("please provide some data ");
        }
      } catch (err) {
        res.json({ err });
      }
  }else{
    res.json("please provide some data ");

  }
}
