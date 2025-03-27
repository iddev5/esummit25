import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return <div className="w-screen fixed z-100 bg-black flex justify-between px-22 py-6">
        <Image 
            src='/assets/logo.png'
            width={619}
            height={288}
            className="h-[40px] w-auto object-contain"
        />
        <ul className="flex gap-10 text-lg">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/events">Events</Link>
            </li>
            <li>
                <Link href="/sponsors">Sponsors</Link>
            </li>
            <li>
                <Link href="/speakers">Speakers</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    </div>
}