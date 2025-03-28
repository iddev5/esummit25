function Team({photo, name, post, x, fb, ln, ig}) {
    return <div className="w-[200px] h-[200px] group hover:scale-115 transition rounded-md border-solid border-2 border-green-500">
        <div className="p-4 w-full h-full bg-red-500 flex flex-col items-center justify-center">
            <div className="bg-green-500 w-[150px] h-[150px] z-[100] group-hover:rounded-full rounded-lg"></div> {/* IMAGE */}
            <h1 className="text-xl">{name}</h1>
            <p className="opacity-0 absolute group-hover:relative group-hover:opacity-100 transition">{post}</p>
        </div>
    </div>
}

export default function Contact() {
    return (<>
        <div className="flex flex-col items-center mt-24">
            <h1 className="text-5xl w-full text-center">THE TEAM</h1>
            <div className="flex flex-col w-[85vw] md:w-[65vw] items-center text-center gap-8 my-8 flex-wrap">
                <h1 className="text-3xl uppercase">For any website related queries:</h1>
                <div className="flex flex-col md:flex-row gap-10">
                    <Team name="Someone" post="Tech Lead" />
                    <Team name="Someone" post="Tech Lead" />
                </div>
            </div>
        </div>
    </>);
}