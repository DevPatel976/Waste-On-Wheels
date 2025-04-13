'use client';
import React from 'react'
import Signup from './components/Signup'
import Front from './components/Front'
import WasteManagementChatbot from './components/WasteManagementChatbot';

const Home = async () => {
  return (
    <div>
      <Front/>
      <WasteManagementChatbot apiKey={process.env.NEXT_PUBLIC_GEMINI_API_KEY} position='bottom-right'/>
    </div>
  )
}

export default Home