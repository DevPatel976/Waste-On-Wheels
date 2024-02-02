"use client"
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react'

const Signup = () => {
  const user = useUser();
  console.log(user);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [societyName,setSocietyName] = useState("");
  const signUp = async () => {
    const response = await fetch("/api/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        societyName,
      })
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type='password' value={societyName} onChange={(e) => setSocietyName(e.target.value)} />
      <button onClick={signUp}>SignUp</button>
    </div>
  )
}

export default Signup