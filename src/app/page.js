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

export default function Home() {
  return (<>
    <div>Hero</div>
    <div>About</div>
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
