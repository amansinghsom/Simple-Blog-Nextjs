const mongoose = require('mongoose')

const connectUri = ''

async function s() {
    try {
      const client = await mongoose.connect(connectUri);
    } catch (error) {
      throw error;
    }
}

s()

const UserData =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
   
    replies:[
        {

            type: mongoose.Schema.Types.ObjectId,
            ref:'Replie'
        }   

    ]

})

// const User =  new mongoose.model('UserData',UserData)
function loadModel(modelName, modelSchema) {
  return mongoose.models[modelName] // Check if the model exists
    ? mongoose.model(modelName) // If true, only retrieve it
    : mongoose.model(modelName, modelSchema) // If false, define it
}

let User_Comment = loadModel('Comment',UserData)

export default User_Comment