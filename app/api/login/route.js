import { User, connectDB } from "@/app/lib/config";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    
  const user = await User.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {
    // Successful login
    // req.session.userId = user._id;
    console.log(user);
  } else {
    // Invalid login credentials
    res.status(401).send('Invalid username or password');
  }
  return NextResponse.json({ message:"user login successfully" });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}