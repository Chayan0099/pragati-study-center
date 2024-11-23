import Image from "next/image"
import { oswald, poppins, raleway } from "../fonts/font"

export default function Attributes() {
    return <div className="mt-4 grid grid-cols-10 h-full lg:max-w-[50%] self-center"> 
        <div className={`${oswald.className} bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg col-start-2 col-span-6 h-28 flex justify-center
         text-white text-xl mt-6 shadow-lg shadow-blue-500/50`}>
          <div className="self-end">
          <Image src={'/school-boy-crossing-his-fingers.png'} height={144} width={144} alt="Image"></Image>
          </div>
          <div className="self-center pr-1 text-right">
            <div>Where</div>
            <div>Meets</div>
          </div>
        </div>
        <div className={`${oswald.className} flex flex-col justify-center items-start text-blue-500 text-xl pl-1 mt-6`}>
          <div>Knowledge</div>
          <div>Excellence</div>
        </div>
        <div className={`${poppins.className} self-start w-[80%] bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg col-span-7 col-start-4 text-white font-bold text-xl py-2 px-2 mt-4 shadow-lg shadow-orange-500/50 sm:row-span-full sm:col-span-6 sm:col-start-6`}>Our Speciality?</div>
        <div className={`${poppins.className} col-start-2 col-span-7 mt-4 border border-blue-500 border-4 rounded-lg p-2 shadow-lg shadow-blue-500/40 flex flex-col gap-2 text-blue-500 font-semibold`}>
            <div className='flex gap-2'>
                <ComputerMark></ComputerMark>
                <div>Digital Board</div>
            </div> 
            <div className="flex gap-2">
                <BookMark></BookMark>
                <div>Specialized Notes</div>
            </div>
            <div className="flex gap-2">
                <QuestionMark></QuestionMark>
                <div>Doubt Clearing Sessions</div>
            </div>
            <div className="flex gap-2">
                <PencilMark></PencilMark>
                <div>Reagular Tests</div>
            </div>
            <div className="flex gap-2">
                <GlassMark></GlassMark>
                <div>Personalized Attention </div>
            </div>
            <div className="flex gap-2">
                <FireMark></FireMark>
                <div>Monthly Motivation</div>
            </div>
        </div>
    </div>
}

function QuestionMark() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
</svg>
}

function PencilMark(){
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
</svg>
}

function BookMark(){
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
  <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
</svg>
}

function ComputerMark() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
  <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
</svg>
}

function FireMark(){
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
</svg>
}

function GlassMark(){
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="size-6">
  <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
</svg>
}