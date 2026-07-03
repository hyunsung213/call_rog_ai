"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Users, User, Gift, Home, HomeIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { mockContacts, mockCalendarRecords, getContactById } from "@/lib/mockData";

export default function CalendarPage() {
  const router = useRouter();

  // Mock days
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDayOffset = 3; // e.g. Wed

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-white relative pb-14">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-3 px-6 pb-2 bg-white z-10 sticky top-0 border-b border-gray-100 flex items-end justify-between shrink-0"
      >
        <h1 className="text-2xl font-bold text-gray-900 leading-snug">
          통화 달력
        </h1>
        <div className="flex space-x-3 text-gray-800 items-center pb-1">
          <button><ChevronLeft size={20} /></button>
          <span className="font-bold text-sm">2026년 2월</span>
          <button><ChevronRight size={20} /></button>
        </div>
      </motion.div>

      <main className="flex-1 overflow-y-auto bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white px-2 py-4 shadow-sm border-b border-gray-100"
        >
          {/* Calendar Grid Header */}
          <div className="grid grid-cols-7 text-center mb-2">
            {['일', '월', '화', '수', '목', '금', '토'].map((day, i) => (
              <div key={day} className={`text-xs font-bold ${i === 0 ? 'text-[#FF5A5F]' : 'text-gray-400'}`}>
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-y-4">
            {Array.from({ length: startDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} className="h-16"></div>
            ))}
            {days.map(day => {
              const record = mockCalendarRecords[day];
              const hasRecord = !!record;
              return (
                <div key={day} className="h-16 flex flex-col items-center relative">
                  <span className={`text-sm font-medium ${day === 17 ? 'bg-[#FF5A5F] text-white w-6 h-6 rounded-full flex items-center justify-center' : 'text-gray-700'}`}>
                    {day}
                  </span>
                  {hasRecord && (
                    <div className="mt-1 flex flex-col items-center gap-0.5">
                      {record && (() => {
                        const contact = getContactById(record.contactId);
                        let bgClass = "bg-[#FF5A5F]/10 text-[#FF5A5F]";
                        if (contact.name === "아버지") bgClass = "bg-blue-50 text-blue-600";
                        if (contact.name === "민수") bgClass = "bg-amber-50 text-amber-600";
                        if (contact.name === "지은") bgClass = "bg-pink-50 text-pink-600";
                        return (
                          <span className={`text-[10px] ${bgClass} pr-1.5 pl-1 py-0.5 rounded-full font-medium whitespace-nowrap flex items-center gap-1`}>
                            <img src={contact.imageUrl} alt={contact.name} className="w-3 h-3 rounded-full object-cover shrink-0" />
                            {contact.name}
                          </span>
                        );
                      })()}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Selected Day Details */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6"
        >
          <h3 className="font-bold text-gray-800 mb-4">2월 17일 통화 내역</h3>
          <Link href="/conversations/result-mock-id">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <img src={getContactById("mock-mom-id").imageUrl} alt="엄마" className="w-5 h-5 rounded-full object-cover shrink-0" />
                  <span className="font-bold text-gray-900">{getContactById("mock-mom-id").name}</span>
                  <span className="text-xs px-2 py-0.5 bg-[#FF5A5F]/10 text-[#FF5A5F] rounded-full font-bold">{getContactById("mock-mom-id").averageScore}℃</span>
                </div>
                <p className="text-xs text-gray-500">{mockCalendarRecords[17].summary}</p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-around items-center py-2 pb-3 px-4">
        <Link href="/calendar" className="flex flex-col items-center gap-0.5 text-[#FF5A5F]">
          <CalendarIcon size={18} />
          <span className="text-[9px] font-medium">달력</span>
        </Link>
        <Link href="/" className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-gray-600 transition-colors">
          <HomeIcon size={18} />
          <span className="text-[9px]">홈</span>
        </Link>
        <Link href="/settings" className="flex flex-col items-center gap-0.5 text-gray-400 hover:text-gray-600 transition-colors">
          <User size={18} />
          <span className="text-[9px]">마이</span>
        </Link>
      </nav>
    </div>
  );
}
