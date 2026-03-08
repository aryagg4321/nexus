import React from 'react';
import { MessageSquare, Settings, Command, Zap } from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} bg-slate-800 h-screen transition-all duration-300 flex flex-col border-r border-slate-700`}>
      {/* Logo Section */}
      <div className="p-6 flex items-center gap-4 text-blue-400">
        <Command size={28} />
        {isOpen && <span className="font-bold text-xl tracking-tight">NEXUS</span>}
      </div>
      
      {/* Navigation Links */}
      <div className="flex-1 px-4 space-y-2 mt-4">
        <div className="flex items-center gap-4 p-3 bg-slate-700 rounded-lg cursor-pointer text-white">
          <MessageSquare size={22} />
          {isOpen && <span className="font-medium">Chat</span>}
        </div>
        
        <div className="flex items-center gap-4 p-3 hover:bg-slate-700 rounded-lg cursor-pointer text-slate-400 transition-colors">
          <Zap size={22} />
          {isOpen && <span className="font-medium">Commands</span>}
        </div>
      </div>

      {/* Bottom Settings Section */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-4 p-3 hover:bg-slate-700 rounded-lg cursor-pointer text-slate-400 transition-colors">
          <Settings size={22} />
          {isOpen && <span className="font-medium">Settings</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;