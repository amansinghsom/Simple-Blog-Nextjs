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
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    }

})

// const User =  new mongoose.model('UserData',UserData)
function loadModel(modelName, modelSchema) {
  return mongoose.models[modelName] // Check if the model exists
    ? mongoose.model(modelName) // If true, only retrieve it
    : mongoose.model(modelName, modelSchema) // If false, define it
}

let User = loadModel('UserData',UserData)

export default User