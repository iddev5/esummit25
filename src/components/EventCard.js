import Link from "next/link";
import Image from "next/image";
import styles from './event-card.module.css';

export default function EventCard({ logo, title, desc, reg_url, details_url }) {
  return <div className={styles['flip-card']}>
    <div className={styles['flip-card-inner']}>
      <div className={styles['flip-card-front']}>
        <Image src={logo} alt="Event" width={300} height={300} />
      </div>
      <div className={styles["flip-card-back"]}>
        <h1 className="uppercase font-semibold text-lg">{title}</h1>
        <p>{desc}</p>
        <div className="flex justify-between w-full text-center p-2 px-6 gap-2">
          {[
            <a href={reg_url} target="blank">
              Register
            </a>,
            <Link href={details_url}>Event&nbsp;Details</Link>,
          ].map((it) => (
            <div className="w-[125px] bg-[#171717] p-2 rounded-lg cursor-pointer hover:scale-105 transition">
              {it}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
}