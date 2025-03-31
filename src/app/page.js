"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import EventCard from "@/components/EventCard";
import { events } from "@/constants";
import Parallax from "@/components/Parallax";
import EventCarousel from "@/components/EventCarousal";
import Accordion from "@/components/Accordion";
import LoadingAnimation from "@/components/LoadingAnimation";

function SpeakerCard({ photo, name, desig }) {
  return (
    <div className="flex flex-col text-center items-center gap-2 min-w-[200px] md:min-w-[250px] px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={photo}
          className="h-[120px] w-[120px] md:h-[180px] md:w-[180px] aspect-square object-cover rounded-full"
          width={180}
          height={180}
          alt={name}
        />
      </motion.div>
      <h1 className="text-lg md:text-xl font-semibold">{name}</h1>
      <p className="text-xs md:text-sm text-gray-300">{desig}</p>
    </div>
  );
}

function SponsorCard({ photo, name }) {
  return (
    <div className="flex flex-col text-center items-center gap-2 min-w-[180px] md:min-w-[220px] px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={photo}
          className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] aspect-square object-cover rounded-full"
          width={150}
          height={150}
          alt={name}
        />
      </motion.div>
      <h1 className="text-lg md:text-xl font-semibold">{name}</h1>
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingAnimation loadingComplete={!isLoading} />

      <div>
        <Parallax />
      </div>

      <motion.div
        className="flex flex-col items-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-3xl md:text-8xl font-bold text-[#ffd35b] w-full text-center opacity-80 my-10"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.8 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          EVENTS
        </motion.h1>
        <div className="flex w-[65vw] justify-center gap-8 my-8 flex-wrap">
          {events.map((it, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <EventCard
                logo={it.logo}
                title={it.title}
                desc={it.desc}
                reg_url={it.reg_url}
                details_url={it.details_url}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-col items-center py-16">
        <motion.h1
          className="text-3xl md:text-8xl font-bold text-[#ffd35b] w-full text-center opacity-80 mb-15 mt-20"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.8 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          PAST SPEAKERS
        </motion.h1>
        <div className="relative flex overflow-x-hidden w-full">
          <motion.div
            className="flex animate-marquee"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {speakers.map((it, index) => (
              <SpeakerCard
                key={index}
                photo={it.img}
                name={it.name}
                desig={it.desig}
              />
            ))}
          </motion.div>
          <motion.div
            className="flex animate-marquee"
            aria-hidden="true"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {speakers.map((it, index) => (
              <SpeakerCard
                key={`clone-${index}`}
                photo={it.img}
                name={it.name}
                desig={it.desig}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col items-center py-16">
        <motion.h1
          className="text-3xl md:text-8xl font-bold text-[#ffd35b] w-full text-center opacity-80 mb-15 mt-20"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.8 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          PAST SPONSORS
        </motion.h1>
        <div className="relative flex overflow-x-hidden w-full">
          <motion.div
            className="flex animate-marquee2"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {sponsors.map((it, index) => (
              <SponsorCard key={index} photo={it.img} name={it.name} />
            ))}
          </motion.div>
          <motion.div
            className="flex animate-marquee2"
            aria-hidden="true"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {sponsors.map((it, index) => (
              <SponsorCard
                key={`clone-${index}`}
                photo={it.img}
                name={it.name}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col items-center py-16">
        <motion.h1
          className="text-3xl md:text-8xl font-bold text-[#ffd35b] w-full text-center opacity-80 mb-15 mt-15"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.8 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          FAQ
        </motion.h1>
        <div className="w-[80vw] md:w-[60vw] p-4 rounded-lg flex flex-col mb-10">
          <Accordion
            title="Who should attend E-Summit?"
            answer="E-Summit is designed for aspiring and established entrepreneurs, startup founders, investors, industry professionals, students interested in entrepreneurship, and anyone looking to learn, network, and be inspired in the world of innovation and business."
          />
          <Accordion
            title="How can I register for E-Summit?"
            answer="You can register for E-Summit by visiting our official website and following the registration process. Ensure you provide accurate details to complete your registration successfully."
          />
          <Accordion
            title="Will E-Summit be held in person or virtually?"
            answer="E-Summit will be held in a hybrid format, offering both in-person and virtual attendance options to accommodate participants from different locations."
          />
          <Accordion
            title="What kind of speakers will be at E-Summit?"
            answer="E-Summit features a wide range of speakers, including successful entrepreneurs, industry experts, investors, and thought leaders. Our speakers come from various sectors, including technology, business, and sustainability."
          />
          <Accordion
            title="Will there be opportunities for networking at E-Summit?"
            answer="Yes, networking is a key aspect of E-Summit. We will have dedicated networking sessions, social events, and opportunities to connect with speakers, investors, mentors, and fellow attendees throughout the summit."
          />
        </div>
      </div>
    </>
  );
}
