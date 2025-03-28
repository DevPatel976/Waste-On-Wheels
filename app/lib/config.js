import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://pateldev:Rahuldev1814@@cluster0.dm2xkcg.mongodb.net/?retryWrites=true&w=majority")
    console.log("successfully connected");
  } catch (error) {
    console.log(error);
  }
}

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  societyName: String
});


export const User = mongoose.models.User || mongoose.model('User', UserSchema);