const mongoose = require('mongoose')

const connectUri = 'mongodb+srv://root:root@cluster0.v2whlsu.mongodb.net/myblog'

async function s() {
    try {
      const client = await mongoose.connect(connectUri);
    } catch (error) {
      throw error;
    }
}

s()

const UserData =  new mongoose.Schema({
   
    text:{
        type:String,
        required:true
    },
   
    commentID:
    {

        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }   

    

})

// const User =  new mongoose.model('UserData',UserData)
function loadModel(modelName, modelSchema) {
  return mongoose.models[modelName] // Check if the model exists
    ? mongoose.model(modelName) // If true, only retrieve it
    : mongoose.model(modelName, modelSchema) // If false, define it
}

let User_Reply = loadModel('Replie',UserData)

export default User_Reply