import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function Layout() {
  return (
    <>
    <div className="bg-[#002228] w-full">
<NavBar/>
    <Outlet/>
    <Footer/>
    </div>
    
    </>
  )
}
