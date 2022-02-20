const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://fahad:fahad@cluster0.c5l4d.mongodb.net/user?retryWrites=true&w=majority').then(() => {
    console.log("connected to mongo");
    
}).catch((err) => {
    console.log(err.message);
})

const data1=new mongoose.Schema({
    username:{
        type:"string",
        required:true,
        lowercase: true,
        unique: true
    },
    password:{
        type:"string",
        required:true
    }
},{timestamps:true}
)
module.exports=mongoose.model('data1', data1)