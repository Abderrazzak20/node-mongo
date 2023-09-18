const   mongoose  = require("mongoose");

const url = 'mongodb+srv://abdir:cavallo@cluster0.ls35gut.mongodb.net/';

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  };


mongoose.connect(url,dbOptions)
.then(()=>{
    console.log("connessione al database risucita");
})
.catch((error)=>
{console.error(error);
}
)
module.exports= mongoose.connection;
