import React from "react";
import PhoneFrame from "./PhoneFrame";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#F5F5F3] flex items-center justify-center md:py-8">
      <PhoneFrame>
        {children}
      </PhoneFrame>
    </div>
  );
}
