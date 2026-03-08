import React, { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';

const ChatWindow = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Welcome to Nexus. Type #joke to begin.", sender: "bot" }
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    // 1. Show user message on screen immediately
    const userMsg = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    
    // 2. Call your Flask Backend
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/handle', {
        message: currentInput
      });
      
      // 3. Show the bot's response from Flask
      setMessages(prev => [...prev, { text: response.data.response, sender: "bot" }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Nexus: Error connecting to server. Is Flask running?", sender: "bot" }]);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-900">
      {/* Messages Display */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl ${
              m.sender === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="p-4 bg-slate-800 border-t border-slate-700">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type #joke..."
            className="flex-1 bg-slate-700 text-white p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button 
            onClick={sendMessage}
            className="p-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-lg"
          >
            <Send size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;