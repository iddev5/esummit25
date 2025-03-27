"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import EventCard from "@/components/EventCard";

function SpeakerCard({photo, name, desig}) {
  return <div className="flex flex-col items-center gap-2">
    <div className="w-[150px] h-[150px] rounded-full bg-red-500"></div>
    <h1 className="text-xl">{name}</h1>
    <p className="text-sm">{desig}</p>
  </div>
}

function SponsorCard({photo, name}) {
  return <div className="flex flex-col items-center gap-2">
    <div className="w-[150px] h-[150px] rounded-full bg-red-500"></div>
    <h1 className="text-xl">{name}</h1>
  </div>
}

function ImageCard() {
  return <div className="min-w-[300px] min-h-[300px] bg-yellow-500 hover:scale-105 hover:rotate-[2deg] transition duration-300">Hii</div>;
}

export default function Home() {
  useEffect(() => {
    const horizontalScrollContainer = document.getElementsByClassName('horizontal-scroll-container');
  
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const scrollX = -scrollY * 0.5;
      for (let h of horizontalScrollContainer)
        h.style.transform = `translateX(${scrollX}px)`;
    });
  }, []);

  return (<>
    <div className="pt-22">Hero</div>
    <div>About</div>

    <div className="p-4 pb-12">
      <div className="relative w-full overflow-x-hidden">
        <div className="flex gap-5 horizontal-scroll-container pb-5">
          {Array(15).fill(0).map(() => <ImageCard />)}
        </div>
        <div className="relative left-[12.5%] flex gap-5 horizontal-scroll-container pb-5">
          {Array(15).fill(0).map(() => <ImageCard />)}
        </div>
        <div className="relative left-[25%] flex gap-5 horizontal-scroll-container">
          {Array(15).fill(0).map(() => <ImageCard />)}
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center">
      <h1 className="text-5xl w-full text-center">EVENTS</h1>
      <div className="flex w-[65vw] justify-between gap-8 my-8 flex-wrap">
        {(new Array(10)).fill(1).map(() =>
          <EventCard title="Hello" desc={"Some long text on event. ".repeat(7)} reg_url='https://www.google.com' details_url='/events' />
        )}
      </div>
    </div>
    <div className="flex flex-col items-center">
      <h1 className="text-5xl w-full text-center">PAST SPEAKERS</h1>
      <div className="relative flex overflow-x-hidden w-screen gap-10 my-12">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {Array(8).fill(0).map((it, i) => 
            <SpeakerCard name='Mr. Test' desig='Helping e-cell' />
          )}
        </div>
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {Array(8).fill(0).map(it => 
            <SpeakerCard name='Mr. Test' desig='Helping e-cell' />
          )}
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center">
      <h1 className="text-5xl w-full text-center">PAST SPONSORS</h1>
      <div className="relative flex overflow-x-hidden w-screen gap-10 my-12">
        <div className="flex gap-10 animate-marquee2 whitespace-nowrap">
          {Array(8).fill(0).map((it, i) => 
            <SponsorCard name='Company X' />
          )}
        </div>
        <div className="flex gap-10 animate-marquee2 whitespace-nowrap">
          {Array(8).fill(0).map(it => 
            <SponsorCard name='Company X' />
          )}
        </div>
      </div>
    </div>

  </>);
}
