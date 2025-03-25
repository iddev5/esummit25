import Image from "next/image";
import Link from "next/link";

function EventCard({logo, title, desc, reg_url, details_url}) {
  return <div className="w-[280px] h-[295px] flex flex-col items-center justify-center hover:scale-105 transition group rounded-xl border-white border-2 border-solid">
    {/* <Image src={logo} /> */}
    <h1 className="group-hover:opacity-0 absolute">{title}</h1>
    <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity">
      <p>{desc}</p>
      <div className="flex justify-between w-full text-center p-2 gap-2">
        {
          [
            <a href={reg_url} target="blank">Register</a>,
            <Link href={details_url}>Event Details</Link>
          ].map((it) => 
            <div className="w-[125px] bg-black p-2 rounded-lg cursor-pointer hover:scale-105 transition">{it}</div>
          )
        }
      </div>
    </div>
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
  </>);
}
