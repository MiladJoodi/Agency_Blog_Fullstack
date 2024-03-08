const { default: mongoose } = require("mongoose");

const connectToDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
      } catch (error) {
        console.log(error)
        throw new Error("Error connecting to database")
      }
}