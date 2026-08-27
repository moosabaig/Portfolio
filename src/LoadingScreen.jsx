import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Loading...",
    "Establishing a secure connection...",
  ];

  useEffect(() => {
    if (messageIndex >= messages.length) {
      setTimeout(() => {
        onComplete();
      }, 1000);
      return;
    }

    const fullText = messages[messageIndex];
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setMessageIndex(messageIndex + 1);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete, messageIndex]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white grid place-items-center h-screen">
      <div className="text-4xl font-mono font-bold animate-pulse">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>
    </div>
  );
};
