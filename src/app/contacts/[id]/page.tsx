"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, Gift, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { getContactById } from "@/lib/mockData";

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  const score = payload.score;
  const ratio = Math.max(0, Math.min(1, (score - 16.5) / 40));
  const r = Math.round(59 + ratio * (255 - 59));
  const g = Math.round(130 + ratio * (90 - 130));
  const b = Math.round(246 + ratio * (95 - 246));
  const color = `rgb(${r}, ${g}, ${b})`;
  return <circle cx={cx} cy={cy} r={4} fill={color} stroke="white" strokeWidth={1.5} />;
};

const CustomChartTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const score = payload[0].value;
    const ratio = Math.max(0, Math.min(1, (score - 16.5) / 40));
    const r = Math.round(59 + ratio * (255 - 59));
    const g = Math.round(130 + ratio * (90 - 130));
    const b = Math.round(246 + ratio * (95 - 246));
    const color = `rgb(${r}, ${g}, ${b})`;
    return (
      <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-gray-100 flex items-center justify-center">
        <span style={{ color, fontWeight: 'bold', fontSize: '14px' }}>{score}℃</span>
      </div>
    );
  }
  return null;
};

const mockData = [
  { date: "1/20", score: 31.5 },
  { date: "1/27", score: 38.5 },
  { date: "2/03", score: 24.5 },
  { date: "2/10", score: 44.5 },
  { date: "2/17", score: 51.5 },
];

export default function ContactDetailPage() {
  const router = useRouter();
  const params = useParams();
  const contactId = typeof params.id === 'string' ? params.id : 'mock-mom-id';
  const contact = getContactById(contactId);

  const [selectedDay, setSelectedDay] = useState<number | null>(17);
  const callRecords: Record<number, string> = {
    3: "간단한 안부 확인 및 주말 약속",
    10: "가족 식사 관련 의논",
    17: "설날 안부 인사와 무릎 통증 걱정, 방문 약속"
  };

  let bgClass = "bg-[#FF5A5F]/10 text-[#FF5A5F]";
  let scoreColor = contact.averageScore > 36.5 ? "text-[#FF5A5F]" : "text-[#3b82f6]";
  let strokeColor = "#FF5A5F";
  if (contact.name === "아버지") {
    bgClass = "bg-blue-50 text-blue-600";
    scoreColor = "text-blue-500";
    strokeColor = "#3b82f6";
  }
  if (contact.name === "민수") {
    bgClass = "bg-amber-50 text-amber-600";
    scoreColor = "text-amber-500";
    strokeColor = "#f59e0b";
  }
  if (contact.name === "지은") {
    bgClass = "bg-pink-50 text-pink-600";
    scoreColor = "text-pink-500";
    strokeColor = "#ec4899";
  }

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-gray-50 relative pb-10 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <header className="bg-white shrink-0 flex items-center justify-center relative h-14 overflow-hidden">
        <button onClick={() => router.back()} className="absolute left-2 p-2 text-gray-800 z-10">
          <ChevronLeft size={24} />
        </button>
        <img src="/logo.png" alt="마음통화" className="h-24 object-contain absolute" />
      </header>

      <main className="px-5 py-2 space-y-8 pb-10">
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center text-center space-y-2 mt-4"
        >
          <div className={`w-20 h-20 ${bgClass} rounded-full flex items-center justify-center mb-2 shadow-sm overflow-hidden shrink-0`}>
            <img src={contact.imageUrl} alt={contact.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{contact.name}</h2>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex flex-col items-center bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm min-w-[80px]">
              <span className="text-[10px] font-bold text-gray-400">대화 횟수</span>
              <span className="font-bold text-gray-800 text-sm mt-0.5">12회</span>
            </div>
            <div className="flex flex-col items-center bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm min-w-[80px]">
              <span className="text-[10px] font-bold text-gray-400">평균 온도</span>
              <span className={`font-bold ${scoreColor} text-sm mt-0.5`}>{contact.averageScore}℃</span>
            </div>
          </div>
        </motion.div>

        {/* Conversation Calendar */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-4 ml-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xs shadow-sm">🗓️</div>
            <h3 className="font-bold text-gray-800">통화 기록 달력</h3>
            <span className="text-xs font-bold text-gray-400 ml-auto mr-1">2026년 2월</span>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-7 text-center mb-2">
              {['일', '월', '화', '수', '목', '금', '토'].map((day, i) => (
                <div key={day} className={`text-[10px] font-bold ${i === 0 ? 'text-[#FF5A5F]' : 'text-gray-400'}`}>
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-y-2 text-center">
              {Array.from({ length: 28 }, (_, i) => i + 1).map(day => {
                const hasRecord = !!callRecords[day];
                const isSelected = selectedDay === day;
                return (
                  <button 
                    key={day}
                    onClick={() => hasRecord ? setSelectedDay(day) : setSelectedDay(null)}
                    className="flex flex-col items-center justify-center py-1 relative group"
                  >
                    <span className={`text-xs font-medium w-7 h-7 flex items-center justify-center rounded-full transition-all ${isSelected && hasRecord ? 'bg-[#FF5A5F] text-white shadow-md scale-110' : hasRecord ? 'bg-gray-50 text-gray-800 hover:bg-gray-100' : 'text-gray-400'}`}>
                      {day}
                    </span>
                    {hasRecord && !isSelected && (
                      <div className="w-1 h-1 rounded-full mt-1 bg-[#FF5A5F]/50"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {selectedDay && callRecords[selectedDay] && (
              <div className="mt-5 p-4 bg-gray-50/70 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A5F]"></div>
                  <span className="text-xs font-bold text-gray-800">2월 {selectedDay}일 통화</span>
                </div>
                <p className="text-[13px] text-gray-600 font-medium leading-relaxed ml-3">{callRecords[selectedDay]}</p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Relationship Trend Chart */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4 ml-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs shadow-sm">📈</div>
            <h3 className="font-bold text-gray-800">통화 온도 변화</h3>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
            <div className="h-48 w-full outline-none" style={{ WebkitTapHighlightColor: 'transparent' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData} margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
                  <defs>
                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF5A5F" stopOpacity={1} />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} dy={10} />
                  <YAxis 
                    domain={[16.5, 56.5]} 
                    ticks={[56.5, 46.5, 36.5, 26.5, 16.5]}
                    tickFormatter={(value) => `${value}℃`}
                    width={38}
                    tick={{ fontSize: 10, fill: '#9ca3af' }}
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                  />
                  <ReferenceLine y={56.5} stroke="#f3f4f6" strokeDasharray="3 3" />
                  <ReferenceLine y={46.5} stroke="#f3f4f6" strokeDasharray="3 3" />
                  <ReferenceLine y={36.5} stroke="#e5e7eb" strokeDasharray="3 3" />
                  <ReferenceLine y={26.5} stroke="#f3f4f6" strokeDasharray="3 3" />
                  <ReferenceLine y={16.5} stroke="#f3f4f6" strokeDasharray="3 3" />
                  <Tooltip content={<CustomChartTooltip />} cursor={{ stroke: '#f3f4f6', strokeWidth: 2 }} />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="url(#splitColor)"
                    strokeWidth={3}
                    dot={<CustomDot />}
                    activeDot={{ r: 6, fill: '#FF5A5F' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.section>

        {/* AI Feedback Summary */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-3 ml-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#FF5A5F] to-orange-400 flex items-center justify-center text-white text-xs shadow-sm">✨</div>
            <h3 className="font-bold text-gray-800">AI 관계 피드백</h3>
          </div>
          <div className="relative overflow-hidden p-6 rounded-3xl shadow-sm border border-gray-100 bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF5A5F]/10 to-transparent rounded-full -mr-10 -mt-10 blur-xl pointer-events-none"></div>
            
            <p className="text-[13px] text-gray-700 leading-relaxed font-medium relative z-10">
              최근 대화에서 <strong className="text-gray-900">건강에 대한 걱정</strong>이 자주 등장하고 있습니다. 전반적으로 따뜻하고 안정적인 관계를 유지하고 있으나, 간헐적으로 걱정이나 잔소리로 이어질 수 있으니 <strong className="text-[#FF5A5F]">주의가 필요합니다.</strong>
            </p>
            
            <div className="mt-5 pt-5 border-t border-gray-50 relative z-10">
              <span className="text-[11px] font-bold text-gray-400 block mb-3">반복 등장 주제</span>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] bg-gray-50 border border-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium">#건강</span>
                <span className="text-[11px] bg-gray-50 border border-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium">#병원</span>
                <span className="text-[11px] bg-gray-50 border border-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium">#식사</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Things to remember */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-3 ml-1">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-xs shadow-sm">✅</div>
            <h3 className="font-bold text-gray-800">챙겨야 할 일</h3>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 hover:border-purple-200 transition-colors">
            <div className="w-12 h-12 bg-purple-50 rounded-2xl text-purple-500 flex items-center justify-center shrink-0">
              <Gift size={22} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">무릎 온열 찜질기 선물하기</h4>
              <p className="text-[11px] text-gray-500 mt-1 font-medium">다음 주 병원 방문 전 선물 추천 (2/17 대화)</p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
