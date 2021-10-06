const mongoose = require("mongoose");

module.exports = async () => {
  try {
      await mongoose.connect("mongodb://localhost:27017/mean",
          {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            //   useCreateIndex: true
        });
    
    // const cat = mongoose.model('Cat', { name: String });
    // const kitty = new cat({ name: "Rishi" });
    // kitty.save().then( ()=> console.log("database connected and collection created"))
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Connectivity Error", error);
    throw new Error(error);
  }
};
