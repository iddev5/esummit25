import EventCard from "@/components/EventCard"

export default function Events() {
    return (<>
        <div className='mt-24'>Event Hero</div>
        <div className="flex flex-col items-center">
        <h1 className="text-5xl w-full text-center">EVENTS</h1>
        <div className="flex w-[65vw] justify-between gap-8 my-8 flex-wrap">
            {(new Array(10)).fill(1).map(() =>
            <EventCard title="Hello" desc={"Some long text on event. ".repeat(7)} reg_url='https://www.google.com' details_url='/events' />
            )}
        </div>
        </div>
    </>)
}