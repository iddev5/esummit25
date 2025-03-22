import Link from 'next/link';

export default function Header() {
    return <div className="w-screen flex justify-between px-22 py-6">
        <p>LOGO</p>
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