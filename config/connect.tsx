
export const mongoose = require("mongoose")

 async function connect(){
    try{
       await mongoose.connect("mongodb://127.0.0.1:27017/edtechdb",{
        useUnifiedTopology:true,
        useNewUrlParser:true,
       })
       console.log("connection successful");
   }
   catch(e){
    console.log(e)
    console.log("error connecting to db");
   }
 }

 module.exports={connect}