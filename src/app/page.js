"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import { events } from "@/constants";

function SpeakerCard({ photo, name, desig }) {
  return (
    <div className="flex flex-col text-center items-center gap-2 min-w-[200px] md:min-w-[250px] px-4">
      <Image
        src={photo}
        className="h-[120px] w-[120px] md:h-[180px] md:w-[180px] aspect-square object-cover rounded-full"
        width={180}
        height={180}
        alt={name}
      />
      <h1 className="text-lg md:text-xl font-semibold">{name}</h1>
      <p className="text-xs md:text-sm text-gray-300">{desig}</p>
    </div>
  );
}

function SponsorCard({ photo, name }) {
  return (
    <div className="flex flex-col text-center items-center gap-2 min-w-[180px] md:min-w-[220px] px-4">
      <Image
        src={photo}
        className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] aspect-square object-cover rounded-full"
        width={150}
        height={150}
        alt={name}
      />
      <h1 className="text-lg md:text-xl font-semibold">{name}</h1>
    </div>
  );
}

function ImageCard() {
  return (
    <div
      className="min-w-[150px] min-h-[150px] md:min-w-[300px] md:min-h-[300px] bg-yellow-500 
    hover:scale-105 hover:rotate-[2deg] transition duration-300 active:scale-105 active:rotate-[2deg]"
    >
      Hii
    </div>
  );
}

const speakers = [
  {
    img: "/assets/past-speakers/khalid.jpg",
    name: "Khalid Wani",
    desig: "Founder & Ceo of KWCG, Director at ONE CAPITAL NBFC, TDEX SPEAKER",
  },
  {
    img: "/assets/past-speakers/satyajeet.jpg",
    name: "Satyajeet Pattnaik",
    desig: "Co-founder of Fydo",
  },
  {
    img: "/assets/past-speakers/archana.jpg",
    name: "Archana Tripathy",
    desig: "Tata-cumins, Co-founder of The Kalinga Heritage",
  },
  {
    img: "/assets/past-speakers/debabrata.jpeg",
    name: "Debabrata Giri",
    desig: "DGM of Tata-Motors",
  },
  {
    img: "/assets/past-speakers/chinmayee.jpeg",
    name: "Chinmay Satpathy",
    desig: "Founder & CEO of Village Kraft",
  },
  {
    img: "/assets/past-speakers/samar.jpg",
    name: "Samar Pratap Naayak",
    desig: "Founder & MD of Olive Ridley Media",
  },
  {
    img: "/assets/past-speakers/sasmita.jpeg",
    name: "Sasmita Samanta",
    desig: "Founder & Chairperson at SOUL Limited",
  },
  {
    img: "/assets/past-speakers/vvgiri.jpeg",
    name: "Vonkayala Venkata Giri",
    desig: "CTO at KFin Technologies",
  },
];

const sponsors = [
  { img: "/assets/past-sponsors/unstop.jpg", name: "Unstop" },
  { img: "/assets/past-sponsors/village Kraft.jpeg", name: "Village Kraft" },
  { img: "/assets/past-sponsors/scomm india.jpeg", name: "SCOMM India" },
  { img: "/assets/past-sponsors/pc.jpg", name: "Prabhu Chandra" },
  { img: "/assets/past-sponsors/nextgen.jpeg", name: "NexGen" },
  {
    img: "/assets/past-sponsors/entertainment kingdom.jpeg",
    name: "Entertainment Kingdom",
  },
  {
    img: "/assets/past-sponsors/burger company.jpg",
    name: "The Burger Company",
  },
];

export default function Home() {
  useEffect(() => {
    {
      const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("animate-zoom-in", entry.isIntersecting);
        });
      };

      const observer = new IntersectionObserver(startAnimation);
      const options = { root: null, rootMargin: '0px', threshold: 0.8 }; 

      const element = document.getElementById('video-parent');
      observer.observe(element, options);
   }

   {
    const startAnimation = (entries, observer) => {
<<<<<<< HEAD
      entries.forEach((entry) => {
        entry.target.classList.toggle("animate-zoom-in", entry.isIntersecting);
=======
      entries.forEach(entry => {
        entry.target.classList.toggle("animate-fade-in", entry.isIntersecting);
>>>>>>> 2d47d65c670d4f4dbc8a0cb326cf5afaf598e84a
      });
    };

    const observer = new IntersectionObserver(startAnimation);
<<<<<<< HEAD
    const options = { root: null, rootMargin: "0px", threshold: 0.8 };

    const element = document.getElementById("video-parent");
    observer.observe(element, options);
=======
    const options = { root: null, rootMargin: '0px', threshold: 1.0 }; 

    const elements = document.querySelectorAll('.anim-toggle-fade-in');
    console.log(elements);
    elements.forEach(element => 
      observer.observe(element, options)
    );
  }

  {
    const startAnimation = (entries, observer) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("animate-rise", entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: '0px', threshold: 1.0 }; 

    const elements = document.querySelectorAll('.anim-rise');
    console.log(elements);
    elements.forEach(element => 
      observer.observe(element, options)
    );
  }
>>>>>>> 2d47d65c670d4f4dbc8a0cb326cf5afaf598e84a

    const horizontalScrollContainer = document.getElementsByClassName(
      "horizontal-scroll-container"
    );

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const scrollX = -scrollY * 0.5;
      for (let h of horizontalScrollContainer) {
        if (h.classList.contains('hsc-r'))
          h.style.transform = `translateX(${-scrollX}px)`;
        else
          h.style.transform = `translateX(${scrollX}px)`;
      }
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
        console.warn("Autoplay failed:", error);
      }
    }
  }, []);

  return (
    <>
      <div className="pt-22">Hero</div>

      <div className="text-center flex flex-col items-center justify-center gap-8 h-[50vh]">
        <h1 className="text-3xl md:text-6xl uppercase">What is E-Summit?</h1>
        <p className="md:text-lg w-[85vw] md:w-[60vw]">
          E-Summit 2025, the biggest entrepreneurial event of western Odisha
          hosted by E-Cell, VSSUT Burla, brings together industry leaders,
          visionaries, and budding entrepreneurs in a symphony of innovation and
          inspiration. It will act as a vibrant platform featuring panel
          discussions, workshops, and captivating keynote sessions.
        </p>
      </div>

      <div
        className="w-screen bg-[#171717] z-[200] flex items-center justify-center"
        style={{ "box-shadow": "inset 0px 10px 20px #171717" }}
      >
        <video
          id="video-parent"
          ref={videoRef}
          autoPlay
          muted
          loop
          className="w-[100vw] video-mask"
        >
          <source src="./assets/teaser.mp4" type="video/mp4" />
          Video tag is not supported
        </video>
      </div>

<<<<<<< HEAD
      <div className="p-4 pb-12">
        <div className="relative w-full overflow-x-hidden">
          <div className="flex gap-2 md:gap-5 horizontal-scroll-container pb-2 md:pb-5">
            {Array(15)
              .fill(0)
              .map(() => (
                <ImageCard />
              ))}
          </div>
          <div className="relative left-[12.5%] flex gap-2 md:gap-5 horizontal-scroll-container pb-2 md:pb-5">
            {Array(15)
              .fill(0)
              .map(() => (
                <ImageCard />
              ))}
          </div>
          <div className="relative left-[25%] flex gap-2 md:gap-5 horizontal-scroll-container">
            {Array(15)
              .fill(0)
              .map(() => (
                <ImageCard />
              ))}
          </div>
=======
    <div className="p-4 pb-12">
      <h1 className="text-center text-6xl m-6 mt-16">E-Summit '24 at a glance!</h1>
      <div className="relative w-full overflow-x-hidden">
        <div className="flex gap-2 md:gap-5 horizontal-scroll-container pb-2 md:pb-5">
          {Array(15).fill(0).map(() => <ImageCard />)}
        </div>
        <div className="relative left-[-75%] flex gap-2 md:gap-5 horizontal-scroll-container hsc-r pb-2 md:pb-5">
          {Array(15).fill(0).map(() => <ImageCard />)}
        </div>
        <div className="relative left-[25%] flex gap-2 md:gap-5 horizontal-scroll-container">
          {Array(15).fill(0).map(() => <ImageCard />)}
>>>>>>> 2d47d65c670d4f4dbc8a0cb326cf5afaf598e84a
        </div>
      </div>

<<<<<<< HEAD
      <div className="flex flex-col items-center">
        <h1 className="text-5xl w-full text-center">EVENTS</h1>
        <div className="flex w-[65vw] justify-center gap-8 my-8 flex-wrap">
          {events.map((it) => (
            <EventCard
              title={it.title}
              desc={it.desc}
              reg_url={it.reg_url}
              details_url={it.details_url}
            />
          ))}
          {/* {(new Array(10)).fill(1).map(() =>
          <EventCard title="Hello" desc={"Some long text on event. ".repeat(7)} reg_url='https://www.google.com' details_url='/events' />
        )} */}
=======
    <div className="flex flex-col items-center my-10">
      <div className="flex flex-col gap-5 w-[60vw] text-right">
        <div className="text-4xl relative uppercase bg-yellow-500 max-w-[80%] opacity-0 anim-rise p-3 py-8">
          <p className="absolute right-2 bottom-3">2000+&nbsp;Attendees</p>
        </div>
        <div className="text-4xl relative uppercase bg-yellow-500 max-w-[50%] opacity-0 anim-rise p-3 py-8">
          <p className="absolute right-2 bottom-3">30+&nbsp;Startups</p>
        </div>
        <div className="text-4xl relative uppercase bg-yellow-500 max-w-[30%] opacity-0 anim-rise p-3 py-8">
          <p className="absolute right-2 bottom-3">10+&nbsp;Events</p>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center mb-6">
      <h1 className="text-5xl w-full text-center opacity-0 anim-toggle-fade-in">EVENTS</h1>
      <div className="flex w-[65vw] justify-center gap-8 my-8 flex-wrap">
        {events.map((it) => 
          <EventCard title={it.title} desc={it.desc} reg_url={it.reg_url} details_url={it.details_url} />
        )}
      </div>
    </div>
    <div className="flex flex-col items-center">
      <h1 className="text-5xl w-full text-center opacity-0 anim-toggle-fade-in">PAST SPEAKERS</h1>
      <div className="relative flex overflow-x-hidden w-screen gap-10 my-12">
        <div className="flex gap-10 animate-marquee">
          {speakers.map((it) => 
            <SpeakerCard photo={it.img} name={it.name} desig={it.desig} />
          )}
        </div>
        <div className="flex gap-10 animate-marquee">
          {speakers.map((it) => 
            <SpeakerCard photo={it.img} name={it.name} desig={it.desig} />
          )}
>>>>>>> 2d47d65c670d4f4dbc8a0cb326cf5afaf598e84a
        </div>
      </div>
      <div className="flex flex-col items-center py-16 bg-[#1a1a1a]">
        <h1 className="text-3xl md:text-5xl font-bold w-full text-center mb-12">
          PAST SPEAKERS
        </h1>
        <div className="relative flex overflow-x-hidden w-full">
          <div className="flex whitespace-nowrap animate-marquee">
            {speakers.map((it, index) => (
              <SpeakerCard
                key={index}
                photo={it.img}
                name={it.name}
                desig={it.desig}
              />
            ))}
          </div>
          <div
            className="flex whitespace-nowrap animate-marquee"
            aria-hidden="true"
          >
            {speakers.map((it, index) => (
              <SpeakerCard
                key={`clone-${index}`}
                photo={it.img}
                name={it.name}
                desig={it.desig}
              />
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className="flex flex-col items-center py-16">
        <h1 className="text-3xl md:text-5xl font-bold w-full text-center mb-12">
          PAST SPONSORS
        </h1>
        <div className="relative flex overflow-x-hidden w-full">
          <div className="flex whitespace-nowrap animate-marquee2">
            {sponsors.map((it, index) => (
              <SponsorCard key={index} photo={it.img} name={it.name} />
            ))}
          </div>
          <div
            className="flex whitespace-nowrap animate-marquee2"
            aria-hidden="true"
          >
            {sponsors.map((it, index) => (
              <SponsorCard
                key={`clone-${index}`}
                photo={it.img}
                name={it.name}
              />
            ))}
          </div>
=======
    <div className="flex flex-col items-center">
      <h1 className="text-5xl w-full text-center opacity-0 anim-toggle-fade-in">PAST SPONSORS</h1>
      <div className="relative flex overflow-x-hidden w-screen gap-10 my-12">
        <div className="flex gap-10 animate-marquee2">
          {sponsors.map((it) => 
            <SponsorCard photo={it.img} name={it.name} />
          )}
        </div>
        <div className="flex gap-10 animate-marquee2">
          {sponsors.map((it) => 
            <SponsorCard photo={it.img} name={it.name} />
          )}
>>>>>>> 2d47d65c670d4f4dbc8a0cb326cf5afaf598e84a
        </div>
      </div>
    </>
  );
}
