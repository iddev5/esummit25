import EventCard from "@/components/EventCard"
import EventCarousel from "@/components/EventCarousal"
import { events } from "@/constants"

export default function Events() {
    return (<>
        <div className='mt-24'>Event Hero</div>
        <div className="flex flex-col items-center">
            <h1 className="text-5xl w-full text-center">EVENTS</h1>
            <div className="w-screen flex items-center">
                <EventCarousel />
            </div>
        {/* <div className="flex w-[65vw] justify-center gap-8 my-8 flex-wrap">
            {events.map((it) =>
                <EventCard title={it.title} desc={it.desc} reg_url={it.reg_url} details_url={it.details_url} />
            )}
        </div> */}
        </div>
    </>)
}