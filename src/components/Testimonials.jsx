import { Swiper, SwiperSlide } from "swiper/react";  

// Import Swiper styles  
import "swiper/css";  
import "swiper/css/navigation";  
import { Navigation } from "swiper/modules";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {  
    const reviews = [  
        {  
            img: <RiDoubleQuotesL />,
            review: "This product has completely transformed my life! The quality is outstanding, and the results are immediate.",  
            name: "Alice Johnson",  
            proficient: "Product Designer"  
        },  
        {  
            img: <RiDoubleQuotesL />,
            review: "I was skeptical at first, but this service exceeded my expectations. Highly recommend to anyone looking for a reliable solution.",  
            name: "David Smith",  
            proficient: "Software Engineer"  
        },  
        {  
            img: <RiDoubleQuotesL />,
            review: "Excellent customer service and a fantastic experience overall. I will definitely be coming back for more!",  
            name: "Maria Garcia",  
            proficient: "Marketing Specialist"  
        }  
    ];  

    return (  
        <section>  
            <Swiper  
                navigation={true}   
                modules={[Navigation]}   // Make sure you import Navigation properly  
                className="mySwiper"  
            >  
                {  
                    reviews.map((review, index) => (  
                        <SwiperSlide key={index}>  
                            <div className="flex flex-col items-center my-8 md:my-16 max-w-[920px] mx-auto"> 
                                <p className="p-4 rounded-full bg-[#14BCB2] bg-opacity-25 text-[#14BCB2] text-2xl">{review.img} </p>
                                <p className="py-8 px-10 text-[24px] md:text-[32px] font-light text-[#FFFFFF]">{review.review}</p>  
                                <h3 className="text-2xl font-semibold text-[#0FF1F6]">{review.name}</h3>  
                                <p className="font-normal text-xl text-[#96ACAF]">{review.proficient}</p>  
                            </div>  
                        </SwiperSlide>  
                    ))  
                }  
            </Swiper>  
        </section>  
    );  
};  

export default Testimonials;