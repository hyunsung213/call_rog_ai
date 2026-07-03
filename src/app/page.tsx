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
    <main className="flex-1 min-h-0 flex flex-col bg-white relative pb-20">
      {/* Header Area */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-5 px-6 pb-4 bg-white z-10 sticky top-0"
      >
        <h1 className="text-2xl font-bold text-gray-900 leading-snug">
          전화번호부
        </h1>
        <div className="mt-4 relative">
          <input 
            type="text" 
            placeholder="연락처 검색..." 
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]/20 focus:border-[#FF5A5F]"
          />
          <Search size={18} className="text-gray-400 absolute left-3 top-3.5" />
        </div>
      </motion.div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2">
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
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm border border-gray-100 bg-gray-50">
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
                        <button 
                          onClick={handleAddConversation}
                          className="flex-1 flex flex-col items-center justify-center gap-1.5 bg-gray-50 py-3 rounded-2xl hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={20} className="text-[#FF5A5F]" />
                          <span className="text-xs font-medium text-gray-700">기록 추가</span>
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

      {/* Floating Action Button (Optional, since we have inline add) */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="absolute bottom-24 right-6"
      >
        <Link href="/conversations/new" className="w-14 h-14 bg-[#FF5A5F] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#FF5A5F]/90 transition-colors">
          <Plus size={24} />
        </Link>
      </motion.div>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-around items-center py-4 pb-6 px-4">
        <Link href="/calendar" className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
          <Calendar size={22} />
          <span className="text-[10px]">달력</span>
        </Link>
        <Link href="/" className="flex flex-col items-center gap-1 text-[#FF5A5F]">
          <HomeIcon size={22} />
          <span className="text-[10px] font-medium">홈</span>
        </Link>
        <Link href="/settings" className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
          <User size={22} />
          <span className="text-[10px]">마이</span>
        </Link>
      </nav>
    </main>
  );
}
