import { useState, useEffect } from "react";

const messages = [
  "Loading...",
  "Establishing a secure connection...",
];

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Skip the animation for users who prefer reduced motion.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    if (messageIndex >= messages.length) {
      const done = setTimeout(onComplete, 1000);
      return () => clearTimeout(done);
    }

    const fullText = messages[messageIndex];
    let index = 0;
    let next;
    const interval = setInterval(() => {
      index++;
      setText(fullText.slice(0, index));
      if (index >= fullText.length) {
        clearInterval(interval);
        next = setTimeout(() => setMessageIndex((i) => i + 1), 500);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(next);
    };
  }, [onComplete, messageIndex]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black text-white grid place-items-center h-screen cursor-pointer"
      onClick={onComplete}
      title="Click to skip"
    >
      <div className="text-2xl md:text-4xl font-mono font-bold px-4 text-center">
        {text}<span className="animate-blink ml-1">|</span>
      </div>
    </div>
  );
};
