import p1 from "../assets/img/BackHub logo.png"
import p2 from '../assets/img/CableLabs logo.png'
import p3 from '../assets/img/DBS logo.png'
import p4 from '../assets/img/EasyEuro logo.png'
import p5 from '../assets/img/AMD logo.png'

function Sponser() {
  return (
    <div className="py-10">
        <h2 className="text-[#0FF1F6] text-center uppercase">our trusted partners</h2>
        <div className="flex justify-center space-x-10 mt-10 flex-wrap">
            <img src={p1} alt="" />
            <img src={p2} alt="" />
            <img src={p3} alt="" />
            <img src={p4} alt="" />
            <img src={p5} alt="" />
        </div>
    </div>
  )
}

export default Sponser