import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css';
import profile from "/profile.png"
import pic1 from "/pic-1.png"
import pic3 from "/pic-3.png"
import pic4 from "/pic-4.png"
import line from "/line.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from 'react';



const CustomPrevArrow = (props) => (
    

<button {...props} className="arrow-button" aria-label="Previous" type="button">
    <FaArrowRightLong></FaArrowRightLong>
</button>
);

const CustomNextArrow = (props) => (
    <button {...props} className="arrow-button2" aria-label="Next" type="button">
        <FaArrowLeftLong></FaArrowLeftLong>
    </button>
);

const Testimonial = () => {

    // const [show, setShow] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };


    // const showBtn = () => {
    //     setShow(!show)
    // }


    return (
        <div className="leftRight">
            <h1 className="titleSubHeading">Testimonial</h1>

            <Slider {...settings}>
                <div >
                    <div className='relative flex flex-col xl:justify-between xl:flex-row 2xl:flex-row 2xl:justify-between '>
                        <div className='  '>
                            <div className='flex items-center '>
                                <div>
                                    <img
                                        src={pic4}
                                        className="block 2xl:w-[51px] 2xl:h-[51px] xl:w-[42px] xl:h-[42px] w-[30px]"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className='text-white 2xl:ml-[20px] xl:ml-[15px] ml-[5px]'>
                                    <h3 className='testHeading'>Suud Olat</h3>
                                    <div className='flex items-center'>
                                        {/* <h4 className='testSubHeading'>Graphics Designer</h4> */}
                                        {/* <h3 className='2xl:ml-[10px] 2xl:mt-[10px] xl:ml-[5px] xl:mt-[5px] ml-1 mt-1'><img className='h-[1px] xl:w-[25px] 2xl:w-[34px] w-[10px]' src={line} alt="" /></h3> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[1180px] xl:w-[781px] 2xl:ml-[200px] '>
                            <p className="text-white 2xl:text-[25px] 2xl:leading-[37.5px] 2xl:mt-0
                            xl:text-[18px] xl:leading-[25px] xl:mt-0
                            text-[14px] mt-[20px] 
                            font-glacialBase  xl:bg-[url('/testimonialBg.png')] 2xl:bg-[url('/testimonialBg.png')] bg-[url('/testimonialBgMobile.png')]   bg-no-repeat bg-left-top">
                               Very professional and reliable. Was very satisfied with the job they’ve done. They also able to provide quality service on time. Kudos folks.
                            </p>
                            {/* <p className="pt-[5px] text-[#FF0101]" onClick={()=>showBtn()}>{show? "Show More" : "Show Less"}</p> */}
                        </div>
                    </div>
                </div>
                <div >
                    <div className='relative flex flex-col xl:justify-between xl:flex-row 2xl:flex-row 2xl:justify-between '>
                        <div className='  '>
                            <div className='flex items-center '>
                                <div>
                                    <img
                                        src={pic1}
                                        className="block 2xl:w-[51px] 2xl:h-[51px] xl:w-[42px] xl:h-[42px] w-[30px]"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className='text-white 2xl:ml-[20px] xl:ml-[15px] ml-[5px]'>
                                    <h3 className='testHeading'>Liban Yasin</h3>
                                    <div className='flex items-center'>
                                        {/* <h4 className='testSubHeading'>Graphics Designer</h4> */}
                                        {/* <h3 className='2xl:ml-[10px] 2xl:mt-[10px] xl:ml-[5px] xl:mt-[5px] ml-1 mt-1'><img className='h-[1px] xl:w-[25px] 2xl:w-[34px] w-[10px]' src={line} alt="" /></h3> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[1180px] xl:w-[781px] 2xl:ml-[200px] '>
                            <p className="text-white 2xl:text-[25px] 2xl:leading-[37.5px] 2xl:mt-0
                            xl:text-[18px] xl:leading-[25px] xl:mt-0
                            text-[14px] mt-[20px] 
                            font-glacialBase  xl:bg-[url('/testimonialBg.png')] 2xl:bg-[url('/testimonialBg.png')] bg-[url('/testimonialBgMobile.png')]   bg-no-repeat bg-left-top">
                               They provided me with a high quality work for a friendly price and responded to feedback in a timely way. I will highly recommend to using Fowzi Media's services. A very satisfied client. Thanks
                            </p>
                            {/* <p className="pt-[5px] text-[#FF0101]" onClick={()=>showBtn()}>{show? "Show More" : "Show Less"}</p> */}
                        </div>
                    </div>
                </div>
                <div >
                    <div className='relative flex flex-col xl:justify-between xl:flex-row 2xl:flex-row 2xl:justify-between '>
                        <div className='  '>
                            <div className='flex items-center '>
                                <div>
                                    <img
                                        src={pic3}
                                        className="block 2xl:w-[51px] 2xl:h-[51px] xl:w-[42px] xl:h-[42px] w-[30px]"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div className='text-white 2xl:ml-[20px] xl:ml-[15px] ml-[5px]'>
                                    <h3 className='testHeading'>Rondo Services</h3>
                                    <div className='flex items-center'>
                                        {/* <h4 className='testSubHeading'>Graphics Designer</h4> */}
                                        {/* <h3 className='2xl:ml-[10px] 2xl:mt-[10px] xl:ml-[5px] xl:mt-[5px] ml-1 mt-1'><img className='h-[1px] xl:w-[25px] 2xl:w-[34px] w-[10px]' src={line} alt="" /></h3> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='2xl:w-[1180px] xl:w-[781px] 2xl:ml-[200px] '>
                            <p className="text-white 2xl:text-[25px] 2xl:leading-[37.5px] 2xl:mt-0
                            xl:text-[18px] xl:leading-[25px] xl:mt-0
                            text-[14px] mt-[20px] 
                            font-glacialBase  xl:bg-[url('/testimonialBg.png')] 2xl:bg-[url('/testimonialBg.png')] bg-[url('/testimonialBgMobile.png')]   bg-no-repeat bg-left-top">
                               The Fowzi Media team has been excellent to work with. From start to finish, the communication was on point. The design was done exceptionally well per our requirements and was delivered to all locations on time. We highly recommend this company for all digital and web design needs!
                            </p>
                            {/* <p className="pt-[5px] text-[#FF0101]" onClick={()=>showBtn()}>{show? "Show More" : "Show Less"}</p> */}
                        </div>
                    </div>
                </div>
          

            </Slider>
        </div>
    );
};

export default Testimonial;
