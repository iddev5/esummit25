"use client";
import { useEffect, useRef } from "react";
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
  return <div className="min-w-[150px] min-h-[150px] md:min-w-[300px] md:min-h-[300px] bg-yellow-500 
    hover:scale-105 hover:rotate-[2deg] transition duration-300 active:scale-105 active:rotate-[2deg]"
  >
    Hii
  </div>;
}

export default function Home() {
  useEffect(() => {
    const startAnimation = (entries, observer) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("animate-zoom-in", entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: '0px', threshold: 0.8 }; 

    const element = document.getElementById('video-parent');
    observer.observe(element, options);

    const horizontalScrollContainer = document.getElementsByClassName('horizontal-scroll-container');
  
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const scrollX = -scrollY * 0.5;
      for (let h of horizontalScrollContainer)
        h.style.transform = `translateX(${scrollX}px)`;
    });
  }, []);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;

      try {
        video.play();
      } catch (error) {
        console.warn('Autoplay failed:', error);
      }
    }
  }, []);

  return (<>
    <div className="pt-22">Hero</div>
    <div>About</div>

      <div className="w-screen bg-[#171717] z-[200] flex items-center justify-center">
        <video id='video-parent' ref={videoRef} autoPlay muted loop className="w-[100vw] video-mask">
          <source src='./assets/teaser.mp4' type='video/mp4' />
          Video tag is not supported
        </video>
      </div>

    <div className="p-4 pb-12">
      <div className="relative w-full overflow-x-hidden">
        <div className="flex gap-2 md:gap-5 horizontal-scroll-container pb-2 md:pb-5">
          {Array(15).fill(0).map(() => <ImageCard />)}
        </div>
        <div className="relative left-[12.5%] flex gap-2 md:gap-5 horizontal-scroll-container pb-2 md:pb-5">
          {Array(15).fill(0).map(() => <ImageCard />)}
        </div>
        <div className="relative left-[25%] flex gap-2 md:gap-5 horizontal-scroll-container">
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
