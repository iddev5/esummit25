import Link from "next/link";
import Image from "next/image";
import styles from './event-card.module.css';

export default function EventCard({ logo, title, desc, reg_url, details_url }) {
  return <div className="flex flex-col items-center p-4 rounded-lg gap-2 border-1 border-solid border-[#ffd35b8e]">
    <div className={styles['flip-card']}>
      <div className={styles['flip-card-inner']}>
        <div className={styles['flip-card-front']}>
          <Image src={logo} alt="Event" width={300} height={300} className="rounded-lg" />
        </div>
        <div className={styles["flip-card-back"]}>
          <p>{desc}</p>
        </div>
      </div>
    </div>
    <h1 className="uppercase font-semibold text-lg">{title}</h1>
    <div className="flex justify-around w-full text-center p-2 px-0 gap-2">
      {[
        <a href={reg_url} target="blank">
          Register
        </a>,
<<<<<<< HEAD
        <Link href={details_url}>Event&nbsp;Details</Link>,
      ].map((it,idx) => (
        <div key={idx} className="w-[150px] bg-black p-2 px-4 text-center rounded-lg cursor-pointer hover:scale-105 transition">
=======
        <Link href={`/events/details/${details_url}`}>Event&nbsp;Details</Link>,
      ].map((it) => (
        <div className="w-[150px] bg-black p-2 px-4 text-center rounded-lg cursor-pointer hover:scale-105 transition">
>>>>>>> a5443b043c2417894ea4ee8c9b9003c79df007ea
          {it}
        </div>
      ))}
    </div>
  </div>
}