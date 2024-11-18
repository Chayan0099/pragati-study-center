export default function Topbar() {
    return <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-between px-16 py-3">
        <div className="flex items-center gap-5">
            <div>Logo</div>
            <div className="flex flex-col ">
                <div className="text-white font-bold text-5xl">PRAGATI</div>
                <div className="tracking-[0.49rem] font-robo text-white font-semibold">STUDY CENTER</div>
            </div>
        </div>
        <div className="hover:bg-blue-700 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-12 hover:scale-125">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
            </svg>
        </div>
    </div>
}