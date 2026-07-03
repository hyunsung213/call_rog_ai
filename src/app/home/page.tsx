"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Calendar, Users, User, Phone, FileText, Search, Home as HomeIcon, MessageSquare } from "lucide-react";
import { mockContacts } from "@/lib/mockData";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const router = useRouter();

  const handleCall = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    alert(`${name}님에게 전화를 겁니다... (데모)`);
  };

  const handleAddConversation = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/conversations/new");
  };

  return (
    <main className="flex-1 min-h-0 flex flex-col bg-white relative pb-14">
      <div className="flex-1 overflow-y-auto pb-6">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 py-2 bg-white"
        >
          <div className="flex justify-center items-center h-12 overflow-hidden relative">
            <img src="/logo.png" alt="마음통화" className="h-24 object-contain absolute" />
          </div>
          <div className="mt-3 relative">
            <input 
              type="text" 
              placeholder="연락처 검색..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]/20 focus:border-[#FF5A5F]"
            />
            <Search size={18} className="text-gray-400 absolute left-3 top-3.5" />
          </div>
        </motion.div>
        </div>

        <div className="px-6 pt-2">
        {/* Contact List */}
        <div className="space-y-1">
          {mockContacts.map((contact, index) => {
            const isExpanded = expandedId === contact.id;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
                key={contact.id} className="border-b border-gray-50 last:border-0"
              >
                <div 
                  className="py-4 flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : contact.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm bg-gray-50">
                      <img src={contact.imageUrl} alt={contact.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                        {contact.name}
                        <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">{contact.relationship}</span>
                      </h2>
                      <p className="text-xs text-gray-500 mt-1">최근 통화: {contact.lastConversationDate}</p>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => handleCall(e, contact.name)}
                    className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 hover:bg-green-100 transition-colors"
                  >
                    <Phone size={18} className="fill-current" />
                  </button>
                </div>
                
                {/* Expanded Action Area */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex gap-3 pb-4 pt-1">
                        <button 
                          onClick={(e) => handleCall(e, contact.name)}
                          className="flex-1 flex flex-col items-center justify-center gap-1.5 bg-gray-50 py-3 rounded-2xl hover:bg-gray-100 transition-colors"
                        >
                          <Phone size={20} className="text-green-600 fill-current" />
                          <span className="text-xs font-medium text-gray-700">통화하기</span>
                        </button>
                        <Link 
                          href={`/contacts/${contact.id}`}
                          className="flex-1 flex flex-col items-center justify-center gap-1.5 bg-gray-50 py-3 rounded-2xl hover:bg-gray-100 transition-colors"
                        >
                          <MessageSquare size={20} className="text-blue-500" />
                          <span className="text-xs font-medium text-gray-700">상세 보기</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>



      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-around items-center py-2 pb-3 px-4">
        <Link href="/calendar" className="flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors p-2">
          <Calendar size={24} />
        </Link>
        <Link href="/home" className="flex items-center justify-center text-[#FF5A5F] p-2">
          <HomeIcon size={24} />
        </Link>
        <Link href="/settings" className="flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors p-2">
          <User size={24} />
        </Link>
      </nav>
    </main>
  );
}
