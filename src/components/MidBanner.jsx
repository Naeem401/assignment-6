import banner from "../assets/banner2.png";  
import { FaRegCheckCircle } from "react-icons/fa";  

function MidBanner() {  
    const iconText = [  
        {  
            img: <FaRegCheckCircle />,  
            text: "Quick to ramp"  
        },  
        {  
            img: <FaRegCheckCircle />,  
            text: "Easy to optimize"  
        },  
        {  
            img: <FaRegCheckCircle />,  
            text: "Quick to scale up"  
        },  
        {  
            img: <FaRegCheckCircle />,  
            text: "Works with all your existing tools"  
        },  
    ];  

    return (  
        <div  
            className="w-full bg-cover bg-center flex flex-col justify-center items-center p-8"  
            style={{ backgroundImage: `url(${banner})` }}  
        >  
            <div className="p-8">  
                <h2 className="text-left font-semibold text-[28px] md:text-[40px] text-[#FFFFFF]">  
                    Train your aiDR on your...  
                </h2>  
                <h2 className="text-left font-medium italic text-[28px] md:text-[40px] text-[#0FF1F6]">  
                    preferred email st|  
                </h2>  
                <p className="text-left max-w-[450px] text-[18px] md:text-2xl text-[#d2d1d1]">  
                    You’re in control. Train your aiDR on elements of your Marketing strategy.  
                </p>  
                <div className="grid grid-cols-1 md:grid-cols-2 py-8 mx-auto justify-center gap-4">  
                {  
                    iconText.map((item, index) => (  
                        <div key={index} className="flex items-center">  
                            {/* Render the icon directly, not as an <img> */}  
                            <div className="text-[#0FF1F6] md:text-[20px]">  
                                {item.img}  
                            </div>  
                            <p className="text-left md:text-[20px] text-[#14BCB2]">  
                                {item.text}  
                            </p>  
                        </div>  
                    ))  
                }  
            </div>  
            </div>  
           
        </div>  
    );  
}  

export default MidBanner;