import Link from "next/link"

export default function EventCard({logo, title, desc, reg_url, details_url}) {
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