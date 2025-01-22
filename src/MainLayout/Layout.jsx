import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


export default function Layout() {
  return (
    <>
    <div className="bg-[#002228] w-full">
<NavBar/>
    <Outlet/>
    </div>
    
    </>
  )
}
