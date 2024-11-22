import { imperial, oswald, poppins, raleway } from "../fonts/font"

export default function HomeAdmission() {
    return <div className="flex bg-gradient-to-br from-green-500 to-green-700 mt-3 mx-4 rounded-lg py-2 px-3 gap-3 items-center shadow-lg shadow-green-700/50">
        <div className="flex flex-col items-center">
            <div className={`${oswald.className} text-3xl text-yellow-500 animate-bounce`}>Admissions</div>
            <div className={`${oswald.className} text-xl mt-2 text-white`}>Open For</div>
            <div className={`${imperial.className} text-6xl text-yellow-500`}>2025</div>
        </div>
        <div className="flex flex-col items-center">
           <div className={`${poppins.className} bg-gradient-to-br from-orange-500 to-yellow-500 py-1 px-2 rounded-lg text-white hover:bg-gradient-to-tl font-semibold`}>Get Admission</div>
           <div className={`${poppins.className} text-yellow-500 font-semibold mt-2`}>Call Or Whatsapp</div>
           <Down></Down>
           <div className={`${oswald.className} text-white font-bold`}>10000 00000</div>
           <div className={`${oswald.className} text-white font-bold`}>10000 00000</div>
        </div>
    </div>
}

function Down() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6 animate-bounce">
  <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
</svg>
}