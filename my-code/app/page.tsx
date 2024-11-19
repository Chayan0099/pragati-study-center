import Attributes from "./components/Attributes";
import HomeAdmission from "./components/HomeAdmission";
import Topbar from "./components/Topbar"
import './globals.css'; 

export default function Home() {
 return <div>
    <Topbar></Topbar>
    <HomeAdmission></HomeAdmission>
    <Attributes></Attributes>
 </div>
}
