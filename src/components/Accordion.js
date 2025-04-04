"use client";
import { useState } from "react";

export default function Accordion({ title, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="w-full h-full py-3 border-b-2 border-solid border-[#ffd35b8e] bg-black px-1 decoration-0">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full text-3xl p-1 px-3"
      >
        <span className="p-1 main-font text-white">{title}</span>
        <svg
          className="fill-indigo-800 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out decoration-0 text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 decoration-0"
            : "grid-rows-[0fr] opacity-0 decoration-0"
        }`}
      >
        <div className="overflow-hidden mt-1 px-4 text-xl decoration-0 main-font text-white">
          {answer}
        </div>
      </div>
    </div>
  );
}
