import Attributes from "./components/Attributes";
import HomeAdmission from "./components/HomeAdmission";
import SpecialOffer from "./components/SpecialOffer";
import Topbar from "./components/Topbar"
import './globals.css'; 

export default function Home() {
   return <div>
    <Topbar></Topbar>
    <SpecialOffer></SpecialOffer>
    <HomeAdmission></HomeAdmission>
    <Attributes></Attributes>
    
 </div>
}
