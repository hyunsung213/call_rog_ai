"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Upload, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function NewConversationPage() {
  const router = useRouter();
  const [step, setStep] = useState<"upload" | "preview" | "analyzing">("upload");
  const [textData, setTextData] = useState(`딸: 엄마, 새해 복 많이 받아. 설날인데 못 내려가서 미안해.
엄마: 그래, 너도 새해 복 많이 받아. 바쁜 건 아는데 설날에 얼굴 좀 봤으면 좋았을 텐데.
딸: 나도 마음이 계속 걸렸어. 회사 일이 갑자기 밀려서 이번에는 도저히 못 내려갔어.
엄마: 일 때문에 그런 거면 어쩔 수 없지. 그래도 집이 조용하니까 좀 허전하더라.
딸: 엄마 혼자 음식 많이 한 거 아니지?
엄마: 많이는 안 했어. 떡국이랑 나물만 조금 했어. 그래도 네가 없으니까 맛이 덜하더라.
딸: 그런 말 들으니까 더 미안해진다.
엄마: 미안해하지 마. 그냥 보고 싶어서 그런 거야.
딸: 엄마는 몸 괜찮아? 지난번에 무릎 아프다고 했잖아.
엄마: 아직 조금 아파. 계단 내려갈 때만 좀 불편해.
딸: 병원은 가봤어?
엄마: 아직 안 갔어. 설 지나고 한 번 가보려고.
딸: 엄마, 자꾸 참지만 말고 꼭 가봐. 내가 병원 예약 알아봐줄까?
엄마: 괜찮아. 내가 알아서 갈 수 있어. 네가 이렇게 물어봐주는 것만으로도 좋다.
딸: 그래도 걱정돼. 무릎은 오래 참으면 안 좋잖아.
엄마: 알았어. 이번 주 지나면 꼭 가볼게.
딸: 그리고 이번에 못 내려가서 뭐라도 보내고 싶은데 필요한 거 있어?
엄마: 뭘 보내. 그냥 네가 건강하게 지내면 됐지.
딸: 엄마 전기찜질기 오래됐다고 하지 않았어?
엄마: 오래되긴 했는데 아직 쓸 만해.
딸: 아니야. 무릎도 아프다며. 내가 온열 찜질기 하나 새로 보내줄게.
엄마: 돈 아껴. 요즘 물가도 비싼데.
딸: 나 괜찮아. 이번 설에 못 간 대신 내가 마음이라도 전하고 싶어.
엄마: 마음은 고맙다. 너무 비싼 거 말고 실용적인 걸로 해.
딸: 알겠어. 온열 찜질기랑 편한 실내화도 같이 볼게.
엄마: 실내화는 좋겠다. 겨울에는 발이 좀 시리더라.
딸: 그럼 따뜻한 실내화도 같이 보내줄게.
엄마: 네 생활비도 생각해야 하는데 괜히 부담 주는 것 같네.
딸: 부담 아니야. 엄마가 편하게 쓰면 나도 좋아.
엄마: 고맙다. 말이라도 참 든든하네.
딸: 이번 설에 못 내려간 대신 다음 달에는 꼭 내려갈게.
엄마: 정말 올 수 있어?
딸: 응. 3월 첫째 주 주말에 일정 비워둘게.
엄마: 그럼 네 방 이불도 미리 꺼내놔야겠다.
딸: 엄마 그런 말 들으니까 진짜 집에 가고 싶다.
엄마: 집은 언제든 네 자리 그대로 있지.
딸: 엄마, 앞으로는 주말마다 한 번씩은 꼭 전화할게.
엄마: 말만 하지 말고 진짜 해야 한다.
딸: 진짜 할게. 요즘 내가 너무 연락을 못 했지?
엄마: 바쁜 건 알지만, 가끔은 목소리라도 들으면 좋지.
딸: 미안해. 내가 더 자주 챙길게.
엄마: 미안하다는 말보다 잘 지내는 모습 보여주는 게 더 좋다.
딸: 알겠어. 그리고 엄마 생신 4월이잖아. 그때는 미리 내려갈 수 있게 준비할게.
엄마: 생신까지 기억하고 있었어?
딸: 당연하지. 이번엔 그냥 넘어가지 않을 거야.
엄마: 비싼 거 하지 말고 그냥 얼굴만 보여줘.
딸: 그래도 꽃이랑 맛있는 식사는 준비하고 싶어.
엄마: 네가 오는 게 제일 큰 선물이지.
딸: 그래도 내가 잘 챙겨볼게. 엄마 건강이 제일 중요해.
엄마: 나도 네 건강이 제일 중요하다. 밥은 잘 챙겨 먹고 다니니?
딸: 응, 잘 챙겨 먹고 있어.
엄마: 설날인데 떡국은 먹었어?
딸: 아직 못 먹었어. 저녁에 간단하게 먹으려고.
엄마: 에휴, 설날에 떡국도 제대로 못 먹고. 다음에 오면 엄마가 많이 끓여줄게.
딸: 응. 엄마 떡국 먹고 싶다.
엄마: 오면 전도 부쳐주고 잡채도 해줄게.
딸: 무릎 아프다면서 너무 많이 하지 마.
엄마: 네가 온다는데 어떻게 가만히 있니.
딸: 그러면 내가 내려가서 같이 하자. 엄마 혼자 하지 말고.
엄마: 그래. 그 말은 마음에 든다.
딸: 오늘 저녁에 영상통화할까? 얼굴이라도 보자.
엄마: 지금은 얼굴이 말이 아니다. 저녁에 하자.
딸: 그럼 저녁 8시에 내가 먼저 걸게.
엄마: 그래. 그때 얼굴 보자.
딸: 다시 한번 설날에 못 내려가서 미안해. 새해에는 내가 더 자주 챙길게.
엄마: 괜찮아. 네 마음은 다 안다.
딸: 엄마도 새해에는 건강하고, 무릎 꼭 병원 가봐.
엄마: 알았어. 너도 너무 무리하지 말고 건강 잘 챙겨.
딸: 사랑해 엄마.
엄마: 나도 사랑한다. 저녁에 보자.
딸: 응, 저녁에 영상통화할게.`);
  const [detectedSpeakers, setDetectedSpeakers] = useState<string[]>([]);
  const [selectedContact, setSelectedContact] = useState("엄마");
  const [conversationDate, setConversationDate] = useState("2026-02-17");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setTextData(result);
        
        // Mock simple speaker detection
        const speakers = new Set<string>();
        const lines = result.split("\n");
        lines.forEach(line => {
          if (line.includes(":")) {
            speakers.add(line.split(":")[0].trim());
          }
        });
        setDetectedSpeakers(Array.from(speakers).filter(s => s));
        
        setStep("preview");
      };
      reader.readAsText(file);
    }
  };

  const handleAnalyze = () => {
    setStep("analyzing");
    // Mock analysis delay
    setTimeout(() => {
      router.push("/conversations/result-mock-id");
    }, 3000);
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Header */}
      <header className="pt-5 px-4 pb-4 flex items-center justify-between border-b border-gray-100 shrink-0">
        <button onClick={() => router.back()} className="p-2 -ml-2 text-gray-800">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-base font-bold text-gray-800">새 대화 기록 추가</h1>
        <div className="w-10" />
      </header>

      <main className="flex-1 overflow-y-auto px-6 py-6">
        <AnimatePresence mode="wait">
          {step === "upload" && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900 leading-snug">
                  발화자별로 정리된<br />TXT 파일을 올려주세요.
                </h2>
                <p className="text-gray-500 mt-2 text-sm">
                  AI가 대화를 읽고 요약, 피드백, 선물 추천까지 도와드립니다.
                </p>
              </div>

              <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center relative hover:bg-gray-100 transition-colors">
                <input 
                  type="file" 
                  accept=".txt" 
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                />
                <div className="bg-white p-4 rounded-full shadow-sm text-[#FF5A5F] mb-4">
                  <Upload size={32} />
                </div>
                <h3 className="font-bold text-gray-800">TXT 파일 업로드</h3>
                <p className="text-xs text-gray-500 mt-2 max-w-[200px]">
                  또는 대화 내용을 복사해서 아래 입력창에 붙여넣으세요.
                </p>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-800 mb-2 block">직접 붙여넣기</label>
                <textarea 
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm h-40 focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]/20 focus:border-[#FF5A5F]"
                  placeholder="예시:&#13;&#10;나: 오늘 하루 어땠어?&#13;&#10;엄마: 그냥 그렇지 뭐."
                  value={textData}
                  onChange={(e) => setTextData(e.target.value)}
                />
                <button 
                  onClick={() => {
                    if (textData.trim().length > 0) {
                      setDetectedSpeakers(["나", "엄마"]); // Mock detection
                      setStep("preview");
                    }
                  }}
                  className="mt-3 w-full bg-gray-100 text-gray-600 font-medium py-3 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  입력 완료
                </button>
              </div>
            </motion.div>
          )}

          {step === "preview" && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6 pb-20"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900 leading-snug">
                  분석 전에<br />대화 내용을 확인해 주세요.
                </h2>
              </div>

              <div className="space-y-4 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">감지된 발화자</label>
                  <div className="flex flex-wrap gap-2">
                    {detectedSpeakers.map(s => (
                      <span key={s} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">대화 내용</label>
                  <div className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm h-64 overflow-y-auto text-gray-700 whitespace-pre-wrap">
                    {textData}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-gray-800 block mb-2">누구와의 대화인가요?</label>
                  <select 
                    value={selectedContact}
                    onChange={(e) => setSelectedContact(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]/20 focus:border-[#FF5A5F]"
                  >
                    <option value="엄마">엄마</option>
                    <option value="아버지">아버지</option>
                    <option value="지은">지은 (연인)</option>
                    <option value="새로운 연락처">새로운 연락처 추가...</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-800 block mb-2">대화 날짜</label>
                  <input 
                    type="date" 
                    value={conversationDate}
                    onChange={(e) => setConversationDate(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A5F]/20 focus:border-[#FF5A5F]"
                  />
                </div>
              </div>

              <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-20 absolute-in-phone">
                <button 
                  onClick={handleAnalyze}
                  className="w-full bg-[#FF5A5F] text-white py-4 rounded-xl font-bold shadow-md hover:bg-[#FF5A5F]/90 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                >
                  <CheckCircle2 size={20} />
                  <span>AI 분석 시작하기</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === "analyzing" && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full space-y-8 mt-20"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="w-32 h-32 border-4 border-dashed border-[#FF5A5F]/30 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center text-[#FF5A5F]"
                >
                  <FileText size={48} />
                </motion.div>
              </div>
              <div className="text-center space-y-2">
                <h2 className="text-xl font-bold text-gray-800">대화 속 중요한 마음을<br />정리하고 있어요.</h2>
                <p className="text-gray-500 text-sm">감정과 기억할 내용을 살펴보고 있습니다...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      {/* CSS for fixed positioning within the PhoneFrame context */}
      <style dangerouslySetInnerHTML={{__html: `
        .absolute-in-phone {
          position: absolute;
          bottom: 0;
          border-bottom-left-radius: 32px;
          border-bottom-right-radius: 32px;
        }
      `}} />
    </div>
  );
}
