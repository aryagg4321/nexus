import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import ChatWindow from './components/Chat/ChatWindow';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-slate-900 text-white overflow-hidden">
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header with Toggle Button */}
        <header className="h-16 border-b border-slate-700 flex items-center px-6 bg-slate-800">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hover:bg-slate-700 p-2 rounded-md transition-colors text-slate-300"
          >
            ☰
          </button>
          <h1 className="ml-4 font-semibold text-lg text-blue-400">Nexus Terminal</h1>
        </header>
        
        {/* The Chat Interface */}
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;