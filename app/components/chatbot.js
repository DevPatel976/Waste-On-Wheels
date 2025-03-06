"use client"; // Add this line at the top to mark it as a Client Component

import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [conversation, setConversation] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const retryWithBackoff = async (fn, retries = 3, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
      try {
        return await fn();
      } catch (error) {
        if (error.response?.status === 429 && i < retries - 1) {
          await new Promise((resolve) => setTimeout(resolve, delay * (2 ** i)));
        } else {
          throw error;
        }
      }
    }
  };

  const handleUserInput = async (e) => {
    e.preventDefault();
    if (!userInput || isTyping) return;

    setConversation([...conversation, { role: "user", content: userInput }]);
    setUserInput("");
    setIsTyping(true);

    try {
      await retryWithBackoff(async () => {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: conversation,
          },
          {
            headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}` },
          }
        );
        setConversation((prev) => [
          ...prev,
          { role: "assistant", content: response.data.choices[0].message.content },
        ]);
      });
    } catch (error) {
      if (error.response?.status === 429) {
        alert("You are sending requests too frequently. Please wait a few moments and try again.");
      } else {
        console.error("Error:", error);
      }
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '10px',
          width: '100%',
          maxWidth: '600px',
          height: '400px',
          overflowY: 'auto',
          marginBottom: '10px',
          backgroundColor: '#f8f8f8',
        }}
      >
        {conversation.map((msg, index) => (
          <div key={index} style={{ margin: '5px 0' }}>
            <strong>{msg.role === "user" ? "You:" : "Bot:"}</strong> {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleUserInput} style={{ display: 'flex', width: '100%', maxWidth: '600px' }}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask something..."
          style={{
            flexGrow: 1,
            padding: '10px',
            borderRadius: '10px 0 0 10px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            borderRadius: '0 10px 10px 0',
            border: '1px solid #ccc',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer',
          }}
          disabled={isTyping}
        >
          {isTyping ? "Typing..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;

