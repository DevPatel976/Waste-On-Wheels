'use client';

import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * WasteManagementChatbot - A self-contained chatbot specialized in waste management
 *
 * This component includes:
 * 1. The React component for the chatbot UI
 * 2. The Gemini AI integration for waste management
 * 3. All CSS styles needed for the component
 *
 * Just add this file to your project and use the component.
 */

// ============= GEMINI AI INTEGRATION =============

// Initialize the Gemini AI with API key
const initializeGemini = (apiKey) => {
  if (!apiKey) {
    throw new Error('Gemini API key is required');
  }
  return new GoogleGenerativeAI(apiKey);
};

// The system prompt to ensure the chatbot only responds to waste management questions
const WASTE_MANAGEMENT_SYSTEM_PROMPT = `
You are an AI assistant specialized in waste management. Your purpose is to help users with waste management related queries only.

You should ONLY respond to questions related to:
- Waste segregation and classification
- Recycling processes and best practices
- Composting methods and tips
- E-waste disposal
- Hazardous waste handling
- Landfill management
- Waste reduction strategies
- Sustainable waste management practices
- Waste-to-energy conversion
- Circular economy principles related to waste
- Local waste management regulations (when specified by the user)
- Environmental impact of improper waste disposal

If a user asks a question NOT related to waste management, politely explain that you are only trained to provide information about waste management and cannot assist with other topics.

Provide accurate, helpful, and educational responses about waste management topics.
`;

// Create a chat session with the waste management context
const createWasteChatSession = async (genAI) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chatSession = model.startChat({
    history: [],
    generationConfig: {
      temperature: 0.4,
      topP: 0.8,
      topK: 40,
      maxOutputTokens: 1024,
    },
    safetySettings: [
      {
        category: "HARM_CATEGORY_HARASSMENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE"
      },
      {
        category: "HARM_CATEGORY_HATE_SPEECH",
        threshold: "BLOCK_MEDIUM_AND_ABOVE"
      },
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE"
      },
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE"
      }
    ],
    systemInstruction: WASTE_MANAGEMENT_SYSTEM_PROMPT,
  });

  return chatSession;
};

// Send a message to the chat session and get a response
const sendMessageToGemini = async (chatSession, message) => {
  try {
    const result = await chatSession.sendMessage(message);
    return result.response.text();
  } catch (error) {
    console.error('Error communicating with Gemini:', error);
    return 'Sorry, I encountered an error processing your request about waste management. Please try again.';
  }
};

// ============= REACT COMPONENT =============

const WasteManagementChatbot = ({ apiKey, position = 'bottom-right' }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your Waste Management Assistant. Ask me anything about waste disposal, recycling, or other waste management topics!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [error, setError] = useState(null);
  const [geminiInstance, setGeminiInstance] = useState(null);
  const [chatSession, setChatSession] = useState(null);
  const messagesEndRef = useRef(null);

  // Initialize Gemini on component mount
  useEffect(() => {
    const setupGemini = async () => {
      try {
        const genAI = initializeGemini(apiKey);
        setGeminiInstance(genAI);

        const session = await createWasteChatSession(genAI);
        setChatSession(session);
      } catch (err) {
        console.error('Failed to initialize Gemini:', err);
        setError('Failed to initialize the AI assistant. Please check your API key.');
      }
    };

    if (apiKey) {
      setupGemini();
    } else {
      setError('Gemini API key is missing. Please provide an API key.');
    }
  }, [apiKey]);

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Add CSS to the document when the component mounts
  useEffect(() => {
    // Create the style element
    const styleElement = document.createElement('style');
    styleElement.setAttribute('id', 'waste-management-chatbot-styles');

    // Add the CSS
    styleElement.textContent = `
      /* Waste Management Chatbot Styles */
      :root {
        --waste-chatbot-primary: #2e8b57;
        --waste-chatbot-secondary: #f0f4f0;
        --waste-chatbot-accent: #4caf50;
        --waste-chatbot-text: #333;
        --waste-chatbot-light-text: #666;
        --waste-chatbot-bg: #fff;
        --waste-chatbot-border: #ddd;
        --waste-chatbot-radius: 12px;
        --waste-chatbot-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        --waste-chatbot-user-bg: #e9f7ef;
        --waste-chatbot-assistant-bg: #f5f5f5;
        --waste-chatbot-error-bg: #fdecea;
        --waste-chatbot-error-text: #c62828;
      }

      /* Container positioning */
      .waste-chatbot-container {
        position: fixed;
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }

      .waste-chatbot-bottom-right {
        bottom: 20px;
        right: 20px;
      }

      .waste-chatbot-bottom-left {
        bottom: 20px;
        left: 20px;
      }

      .waste-chatbot-top-right {
        top: 20px;
        right: 20px;
      }

      .waste-chatbot-top-left {
        top: 20px;
        left: 20px;
      }

      /* Toggle button */
      .waste-chatbot-toggle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: var(--waste-chatbot-primary);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        box-shadow: var(--waste-chatbot-shadow);
        transition: transform 0.2s, background-color 0.2s;
      }

      .waste-chatbot-toggle:hover {
        transform: scale(1.05);
        background-color: var(--waste-chatbot-accent);
      }

      /* Chat window */
      .waste-chatbot-window {
        width: 350px;
        height: 500px;
        background-color: var(--waste-chatbot-bg);
        border-radius: var(--waste-chatbot-radius);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: var(--waste-chatbot-shadow);
        border: 1px solid var(--waste-chatbot-border);
      }

      /* Header */
      .waste-chatbot-header {
        background-color: var(--waste-chatbot-primary);
        color: white;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .waste-chatbot-title {
        font-weight: bold;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .waste-chatbot-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        line-height: 1;
      }

      /* Messages area */
      .waste-chatbot-messages {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .waste-chatbot-message {
        padding: 12px;
        border-radius: var(--waste-chatbot-radius);
        max-width: 85%;
        line-height: 1.5;
        font-size: 0.95rem;
        position: relative;
        word-wrap: break-word;
      }

      .waste-chatbot-user {
        background-color: var(--waste-chatbot-user-bg);
        color: var(--waste-chatbot-text);
        align-self: flex-end;
        border-bottom-right-radius: 4px;
      }

      .waste-chatbot-assistant {
        background-color: var(--waste-chatbot-assistant-bg);
        color: var(--waste-chatbot-text);
        align-self: flex-start;
        border-bottom-left-radius: 4px;
      }

      .waste-chatbot-error-message {
        background-color: var(--waste-chatbot-error-bg);
        color: var(--waste-chatbot-error-text);
        padding: 12px;
        border-radius: var(--waste-chatbot-radius);
        font-size: 0.9rem;
        margin-bottom: 12px;
      }

      /* Input form */
      .waste-chatbot-input-form {
        display: flex;
        border-top: 1px solid var(--waste-chatbot-border);
        padding: 12px;
        background-color: var(--waste-chatbot-bg);
      }

      .waste-chatbot-input {
        flex: 1;
        padding: 10px 14px;
        border: 1px solid var(--waste-chatbot-border);
        border-radius: 20px;
        outline: none;
        font-size: 0.95rem;
      }

      .waste-chatbot-input:focus {
        border-color: var(--waste-chatbot-primary);
      }

      .waste-chatbot-send {
        background-color: var(--waste-chatbot-primary);
        color: white;
        border: none;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        margin-left: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
      }

      .waste-chatbot-send:hover:not(:disabled) {
        background-color: var(--waste-chatbot-accent);
      }

      .waste-chatbot-send:disabled {
        background-color: var(--waste-chatbot-border);
        cursor: not-allowed;
      }

      /* Loading animation */
      .waste-chatbot-loading {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin: 10px 0;
        align-self: flex-start;
      }

      .waste-chatbot-loading-dot {
        width: 8px;
        height: 8px;
        background-color: var(--waste-chatbot-primary);
        border-radius: 50%;
        animation: waste-chatbot-pulse 1.5s infinite ease-in-out;
      }

      .waste-chatbot-loading-dot:nth-child(2) {
        animation-delay: 0.3s;
      }

      .waste-chatbot-loading-dot:nth-child(3) {
        animation-delay: 0.6s;
      }

      @keyframes waste-chatbot-pulse {
        0%, 100% {
          transform: scale(0.8);
          opacity: 0.5;
        }
        50% {
          transform: scale(1.2);
          opacity: 1;
        }
      }

      /* Responsive adjustments */
      @media (max-width: 480px) {
        .waste-chatbot-window {
          width: calc(100vw - 40px);
          height: 70vh;
          max-height: 500px;
        }
      }

      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        .waste-chatbot-container {
          --waste-chatbot-bg: #1a1a1a;
          --waste-chatbot-text: #e0e0e0;
          --waste-chatbot-light-text: #a0a0a0;
          --waste-chatbot-border: #444;
          --waste-chatbot-assistant-bg: #2a2a2a;
          --waste-chatbot-user-bg: #1e4a30;
        }
      }
    `;

    // Add style to head if it doesn't already exist
    if (!document.getElementById('waste-management-chatbot-styles')) {
      document.head.appendChild(styleElement);
    }

    // Clean up when component unmounts
    return () => {
      const existingStyle = document.getElementById('waste-management-chatbot-styles');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading || !chatSession) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await sendMessageToGemini(chatSession, userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      console.error('Error sending message to Gemini:', err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again with a waste management related question.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const toggleChat = () => {
    setChatOpen(prev => !prev);
  };

  // Render loading indicator
  const renderLoadingIndicator = () => (
    <div className="waste-chatbot-loading">
      <div className="waste-chatbot-loading-dot"></div>
      <div className="waste-chatbot-loading-dot"></div>
      <div className="waste-chatbot-loading-dot"></div>
    </div>
  );

  return (
    <div className={`waste-chatbot-container waste-chatbot-${position}`}>
      {chatOpen ? (
        <div className="waste-chatbot-window">
          <div className="waste-chatbot-header">
            <div className="waste-chatbot-title">
              <span role="img" aria-label="recycle">♻️</span> Waste Management Assistant
            </div>
            <button className="waste-chatbot-close" onClick={toggleChat}>&times;</button>
          </div>

          <div className="waste-chatbot-messages">
            {error && (
              <div className="waste-chatbot-error-message">
                {error}
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`waste-chatbot-message waste-chatbot-${message.role}`}
              >
                {message.content}
              </div>
            ))}

            {loading && renderLoadingIndicator()}

            <div ref={messagesEndRef} />
          </div>

          <form className="waste-chatbot-input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about waste management..."
              disabled={loading || !chatSession}
              className="waste-chatbot-input"
            />
            <button
              type="submit"
              disabled={loading || !chatSession || !input.trim()}
              className="waste-chatbot-send"
            >
              <span role="img" aria-label="send">📤</span>
            </button>
          </form>
        </div>
      ) : (
        <button className="waste-chatbot-toggle" onClick={toggleChat}>
          <span role="img" aria-label="chat">♻️</span>
        </button>
      )}
    </div>
  );
};

// ============= EXPORTS =============

// Helper function to customize colors
export const customizeChatbotColors = (colors = {}) => {
  const root = document.documentElement;

  if (colors.primary) {
    root.style.setProperty('--waste-chatbot-primary', colors.primary);
  }

  if (colors.accent) {
    root.style.setProperty('--waste-chatbot-accent', colors.accent);
  }

  if (colors.userBg) {
    root.style.setProperty('--waste-chatbot-user-bg', colors.userBg);
  }

  if (colors.assistantBg) {
    root.style.setProperty('--waste-chatbot-assistant-bg', colors.assistantBg);
  }
};

export default WasteManagementChatbot;
