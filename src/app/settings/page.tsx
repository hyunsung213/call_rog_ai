"use client";

import React from "react";
import { ChevronRight, Calendar as CalendarIcon, Users, User, Home, Settings, LogOut, Bell, CircleHelp, CreditCard, HomeIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MyPage() {
  return (
    <div className="flex flex-col h-full bg-gray-50 relative pb-20">
      {/* Header */}
      <div className="pt-5 px-6 pb-4 bg-white z-10 sticky top-0 border-b border-gray-100 shrink-0">
        <div className="flex items-end justify-between">
          <h1 className="text-2xl font-bold text-gray-900 leading-snug">
            마이페이지
          </h1>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {/* Profile Card */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5"
        >
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop" alt="내 프로필" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-lg">김사용자</h2>
            <p className="text-sm text-gray-500 mt-0.5">user@example.com</p>
            <button className="text-xs text-[#FF5A5F] font-bold mt-2 bg-[#FF5A5F]/10 px-3 py-1 rounded-full hover:bg-[#FF5A5F]/20 transition-colors">
              프로필 수정
            </button>
          </div>
        </motion.section>

        {/* Menu List */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="flex flex-col divide-y divide-gray-100">
            <button className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 text-gray-700">
                <Bell size={20} className="text-gray-400" />
                <span className="font-medium text-sm">알림 설정</span>
              </div>
              <ChevronRight size={18} className="text-gray-300" />
            </button>
            <button className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 text-gray-700">
                <Settings size={20} className="text-gray-400" />
                <span className="font-medium text-sm">일반 설정</span>
              </div>
              <ChevronRight size={18} className="text-gray-300" />
            </button>
            <button className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 text-gray-700">
                <CreditCard size={20} className="text-gray-400" />
                <span className="font-medium text-sm">결제 및 구독</span>
              </div>
              <ChevronRight size={18} className="text-gray-300" />
            </button>
            <button className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 text-gray-700">
                <CircleHelp size={20} className="text-gray-400" />
                <span className="font-medium text-sm">고객 센터</span>
              </div>
              <ChevronRight size={18} className="text-gray-300" />
            </button>
          </div>
        </motion.section>

        {/* Logout */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button className="w-full bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-gray-500">
            <LogOut size={18} />
            <span className="font-medium text-sm">로그아웃</span>
          </button>
        </motion.section>

      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-around items-center py-4 pb-6 px-4 z-10">
        <Link href="/calendar" className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
          <CalendarIcon size={22} />
          <span className="text-[10px]">달력</span>
        </Link>
        <Link href="/" className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
          <HomeIcon size={22} />
          <span className="text-[10px]">홈</span>
        </Link>
        <Link href="/settings" className="flex flex-col items-center gap-1 text-[#FF5A5F]">
          <User size={22} />
          <span className="text-[10px] font-medium">마이</span>
        </Link>
      </nav>
    </div>
  );
}
