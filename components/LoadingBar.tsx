// components/LoadingBar.tsx
import React from "react"

export function LoadingBar() {
  return (
    <div className="fixed inset-x-0 top-0 h-1 bg-gray-200 z-50">
      <div className="h-full bg-accent animate-[loading_2s_infinite]"></div>

      <style jsx>{`
        @keyframes loading {
          0% { width: 0%;  left: 0; }
          50% { width: 80%; left: 0; }
          100% { width: 0%;  left: 100%; }
        }
        .animate-\[loading_2s_infinite\] {
          position: relative;
          animation: loading 2s infinite;
        }
      `}</style>
    </div>
  )
}
