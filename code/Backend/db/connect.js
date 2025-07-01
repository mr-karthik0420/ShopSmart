const mongoose = require("mongoose");
const db= 'mongodb+srv://shopsmart:sam123@cluster0.rnhpuac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// Connect to MongoDB using the connection string

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {   
  console.log(`No connection: ${e}`);   
});
