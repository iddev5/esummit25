import Link from "next/link";

export default function EventCard({ logo, title, desc, reg_url, details_url }) {
  return (
    <div className="w-[350px] h-[500px] flex flex-col items-center justify-between hover:scale-105 transition rounded-xl border-white border-2 border-solid p-2">
      {/* <Image src={logo} /> */}
      <h1 className="">{title}</h1>
      <div className="text-center">
        <p>{desc}</p>
        <div className="flex justify-between w-full text-center p-2 px-6 gap-2">
          {[
            <a href={reg_url} target="blank">
              Register
            </a>,
            <Link href={details_url}>Event&nbsp;Details</Link>,
          ].map((it) => (
            <div className="w-[125px] bg-black p-2 rounded-lg cursor-pointer hover:scale-105 transition">
              {it}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
