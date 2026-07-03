"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Calendar as CalendarIcon, Heart, Search, Gift } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getContactById } from "@/lib/mockData";

export default function ResultPage() {
  const router = useRouter();
  const contact = getContactById("mock-mom-id");

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-gray-50 relative pb-5 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Header */}
      <header className="pt-5 px-4 pb-4 flex items-center justify-between bg-white sticky top-0 z-20 shadow-sm shrink-0">
        <button onClick={() => router.push("/calendar")} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-base font-bold text-gray-800">통화 분석</h1>
        <div className="w-10"></div>
      </header>

      <main className="px-5 py-2 space-y-8 pb-10">
        {/* Profile / Basic Info */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center text-center space-y-2 mt-4"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden mb-2 shadow-sm border-4 border-white bg-[#FF5A5F]/10 flex items-center justify-center">
            <img src={contact.imageUrl} alt={contact.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{contact.name}와의 통화</h2>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center text-xs text-gray-600 bg-white px-3 py-2 rounded-full border border-gray-100 shadow-sm font-medium">
              <CalendarIcon size={14} className="mr-1.5 text-gray-400" /> 2026.02.17
            </div>
            <div className="flex items-center text-xs text-[#FF5A5F] font-bold bg-white px-3 py-2 rounded-full border border-gray-100 shadow-sm">
              <Heart size={14} className="mr-1.5 fill-current" /> 15℃
            </div>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {[
            { text: "설날" },
            { text: "무릎 통증" },
            { text: "선물 약속" },
            { text: "본가 방문" }
          ].map(tag => (
            <span key={tag.text} className="border border-gray-200 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">
              #{tag.text}
            </span>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-3 ml-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-xs shadow-sm">📝</div>
            <h3 className="font-bold text-gray-800">통화 한 줄 요약</h3>
          </div>
          <div 
            className="p-5 rounded-3xl shadow-sm border border-[#e2d9c8] bg-[#fdfbf7] relative overflow-hidden"
            style={{
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e8dfce 31px, #e8dfce 32px)',
              backgroundAttachment: 'local'
            }}
          >
            <div className="absolute left-6 top-0 bottom-0 w-px bg-red-200/60 z-0"></div>
            <p className="text-gray-800 leading-[32px] font-medium relative z-10 pl-5 pt-1 font-serif tracking-tight">
              설날에 방문하지 못한 미안함을 전하고, 어머니의 무릎 건강을 챙기며 온열 찜질기와 실내화를 보내기로 약속했다.
            </p>
          </div>
        </motion.section>

        {/* Speaker Summary (Chat bubbles) */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-4 ml-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs shadow-sm">💬</div>
            <h3 className="font-bold text-gray-800">발화자별 요약</h3>
          </div>
          <div className="space-y-5">
            {/* My Bubble (Right) */}
            <div className="flex gap-3 flex-row-reverse">
              <div className="shrink-0 w-10 h-10 rounded-full overflow-hidden shadow-sm border-2 border-white">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop" alt="나" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#FF5A5F] text-white p-4 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%] relative">
                <p className="text-[13px] leading-relaxed font-medium">설날에 방문하지 못해 미안해하며, 어머니의 무릎 통증을 진심으로 걱정하고 선물(찜질기, 실내화)과 다음 방문을 약속함.</p>
              </div>
            </div>
            
            {/* Mom's Bubble (Left) */}
            <div className="flex gap-3">
              <div className="shrink-0 w-10 h-10 rounded-full overflow-hidden shadow-sm border-2 border-white">
                <img src={contact.imageUrl} alt={contact.name} className="w-full h-full object-cover" />
              </div>
              <div className="bg-white text-gray-700 p-4 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 max-w-[85%] relative">
                <p className="text-[13px] leading-relaxed font-medium">딸을 안심시키며 미안해하지 않도록 배려함. 무릎이 아파 설 직후 병원에 갈 예정이며 딸의 선물을 고맙게 받아들임.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Feedback */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-3 ml-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#FF5A5F] to-orange-400 flex items-center justify-center text-white text-xs shadow-sm">✨</div>
            <h3 className="font-bold text-gray-800">AI 통화 피드백</h3>
          </div>
          <div className="relative overflow-hidden p-6 rounded-3xl shadow-sm border border-gray-100 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF5A5F]/10 to-transparent rounded-full -mr-10 -mt-10 blur-xl pointer-events-none"></div>
            
            <div className="relative z-10 space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-[#FF5A5F] mt-0.5 font-bold">•</span>
                <p className="text-[13px] text-gray-700 leading-relaxed font-medium">
                  서로를 배려하는 <strong className="text-gray-900 font-bold">따뜻한 대화</strong>를 나누셨어요.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#FF5A5F] mt-0.5 font-bold">•</span>
                <p className="text-[13px] text-gray-700 leading-relaxed font-medium">
                  <strong className="text-[#FF5A5F] font-bold">3월 첫째 주 방문 약속</strong>을 잊지 마세요.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#FF5A5F] mt-0.5 font-bold">•</span>
                <p className="text-[13px] text-gray-700 leading-relaxed font-medium">
                  이번 주 내에 <strong className="text-gray-900 font-bold">병원 방문 확인 연락</strong>을 해보는 것을 권장합니다.
                </p>
              </div>
            </div>
            
            <div className="mt-5 pt-5 border-t border-gray-50 flex flex-col gap-2 relative z-10">
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A5F]"></div>
                다음 대화 추천
              </div>
              <div className="bg-gray-50 px-4 py-3 rounded-2xl rounded-tl-sm text-gray-700 font-medium text-sm">
                "엄마! 병원은 다녀오셨어? 의사 선생님이 뭐래?"
              </div>
            </div>
          </div>
        </motion.section>

        {/* Gift Recommendation */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-3 ml-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#FF5A5F] to-orange-400 flex items-center justify-center text-white text-xs shadow-sm">🎁</div>
            <h3 className="font-bold text-gray-800">AI 선물 추천</h3>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-[#FF5A5F]/20 space-y-4">
            <div className="text-[13px] text-gray-600 bg-gray-50/70 p-4 rounded-2xl font-medium leading-relaxed">
              <span className="font-bold text-gray-800">💡 추천 이유:</span> 무릎 통증과 발 시림 문제를 해결해주기 위해 대화 중 온열 찜질기와 실내화를 약속했습니다.
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center bg-white border border-gray-100 p-3 rounded-2xl shadow-sm hover:border-[#FF5A5F]/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#FF5A5F]/10 rounded-xl flex items-center justify-center text-[#FF5A5F]">
                    <Gift size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">무릎 온열 찜질기</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">대화 중 약속한 선물</p>
                  </div>
                </div>
                <button className="bg-gray-50 p-2.5 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-[#FF5A5F] transition-colors">
                  <Search size={16} />
                </button>
              </div>
              
              <div className="flex justify-between items-center bg-white border border-gray-100 p-3 rounded-2xl shadow-sm hover:border-[#FF5A5F]/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#FF5A5F]/10 rounded-xl flex items-center justify-center text-[#FF5A5F]">
                    <Gift size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">따뜻한 겨울용 실내화</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">대화 중 약속한 선물</p>
                  </div>
                </div>
                <button className="bg-gray-50 p-2.5 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-[#FF5A5F] transition-colors">
                  <Search size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
