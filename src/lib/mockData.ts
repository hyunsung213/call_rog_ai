// 수정 가능한 더미 데이터 모음

export interface MockContact {
  id: string;
  name: string;
  emoji: string;
  imageUrl: string;
  relationship: string;
  lastConversationDate: string;
  averageScore: number;
  recentTopics: string[];
}

export const mockContacts: MockContact[] = [
  {
    id: "mock-mom-id",
    name: "엄마",
    emoji: "🌷",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    relationship: "가족",
    lastConversationDate: "2026.02.17",
    averageScore: 51.5,
    recentTopics: ["설날", "건강", "선물 약속", "본가 방문"]
  },
  {
    id: "mock-dad-id",
    name: "아버지",
    emoji: "🌿",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    relationship: "가족",
    lastConversationDate: "2026.02.15",
    averageScore: 42.5,
    recentTopics: ["취미", "날씨"]
  },
  {
    id: "mock-friend-id",
    name: "민수",
    emoji: "☕",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop",
    relationship: "친구",
    lastConversationDate: "2026.02.22",
    averageScore: 51.5,
    recentTopics: ["커피", "이직", "운동"]
  },
  {
    id: "mock-lover-id",
    name: "지은",
    emoji: "❤️",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
    relationship: "연인",
    lastConversationDate: "2026.02.16",
    averageScore: 54.5,
    recentTopics: ["데이트", "영화", "저녁 식사"]
  }
];

export const getContactById = (id: string) => {
  return mockContacts.find(contact => contact.id === id) || mockContacts[0];
};

// 캘린더용 일별 기록 (day를 key로 사용)
export const mockCalendarRecords: Record<number, { contactId: string; sentiment: string; summary: string }> = {
  17: { contactId: "mock-mom-id", sentiment: "💖", summary: "설날 안부 인사와 무릎 통증 걱정, 3월 첫째 주 본가 방문 약속" },
  15: { contactId: "mock-dad-id", sentiment: "🌿", summary: "가족 식사 약속 잡기" },
  22: { contactId: "mock-friend-id", sentiment: "☕", summary: "오랜만의 근황 토크" },
  14: { contactId: "mock-lover-id", sentiment: "❤️", summary: "발렌타인데이 데이트 약속" },
};
