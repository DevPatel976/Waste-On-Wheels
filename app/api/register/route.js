import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { User, connectDB } from "@/app/lib/config";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password , societyName } = await req.json();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).send('Username already exists. Choose a different email.');
    }
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);
    
  const newUser = new User({
    email,
    password: hashedPassword,
    societyName
  });
  
  await newUser.save();
  
  return NextResponse.json({ "message": "user successfully register" });
  } catch (error) {
    return NextResponse.json({ "error": error });
  }
}