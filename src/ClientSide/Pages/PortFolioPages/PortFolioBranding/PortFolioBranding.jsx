import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import headerLogo from "/headerLogo.png"
// import social icons
import fb from "/fb.png";
import instra from "/instra.png";
import youtube from "/youtube.png"
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";

import { Fade } from 'react-awesome-reveal';
import { useState } from "react";
import Slider from "react-slick";

import "../PortFolioPhotography/PortFolioPhotography.css"








const PortFolioBranding = () => {

    const [showContact , setShowContact] = useState(false);




// For contact button functions


    const adjustTextareaHeightContact = (element) => {
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
    };


    const handleDescriptionChangeContact = (e) => {


        adjustTextareaHeightContact(e.target);
    };


    const contactBtn = () => {
        setShowContact(true);
    }
    const closeContactForm = ()=> {
        setShowContact(false)
    }


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false)
    }

    const [popUp, setPopUp] = useState(false)


    const adjustTextareaHeight = (element) => {
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
    };

    const handleDescriptionChange = (e) => {

        adjustTextareaHeight(e.target);
    };

    const revealPrice = () => {
        setPopUp(true);
    }

    const closePopUp = () => {
        setPopUp(false);
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000

    };

    return (
        <div>
            <div className=" bg-[url('/portFoliohero.png')] bg-no-repeat bg-top-center w-[100%] bg-black 
   2xl:h-[100dvh] 
   xl:h-[100dvh] 
   lg:h-[100dvh] 
   md:h-[100dvh] 
   h-[70dvh] bg-top">

                {/*----------------- header menu ------------------ */}
                <div className='relative'>
                    <nav className=" 
       relative
       2xl:pl-[150px] 2xl:pr-[150px] 2xl:pt-[50px] 
       xl:pt-[50px] xl:pl-[60px] xl:pr-[60px] 
       lg:pt-[40px] lg:pl-[50px] lg:pr-[50px]
       md:pt-[40px] md:pl-[50px] md:pr-[50px]
       pt-[30px] pl-[20px] pr-[20px]

       flex justify-between items-center">

                        {/* ----------Desktop Menu ---------- */}
                        <div className="headerLogo">
                            <Link to="/"><img className="w-full h-full cursor-pointer" src={headerLogo} alt="logo" /></Link>
                        </div>

                        {/*-------------- Desktop Header Menu --------------- */}
                        <div className='hidden md:block lg:block xl:block 2xl:block'>
                            <ul className="headMenuLeftRight  z-auto  ">
                                <Link to="/"> <li className="desktopMenu   ">HOME</li> </Link>
                                <Link to="/"> <li className="desktopMenu">SERVICES</li> </Link>
                                <Link to="/" > <li className=" desktopMenu">ABOUT</li> </Link>
                                <Link to="/"> <li className="desktopMenu ">PORTFOLIO</li> </Link>
                                <Link to="/"> <li className=" desktopMenu">BLOG</li> </Link>
                                <Link> <li className="cursor-pointer" onClick={contactBtn}> CONTACT</li> </Link>
                            </ul>
                        </div>
                        {/* -----------------------Mobile Header Menu ------------------  */}


                        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
                            <button onClick={toggleMenu}><SlMenu className='text-[25px] text-white'></SlMenu></button>
                            {menuOpen && (
                                <div className=''>
                                    <div className={`mobile-menu ${menuOpen ? ' opacity-80' : ''}`}>

                                        <div className='flex justify-between items-center px-[20px] pt-[30px] border-b  border-gray-600 pb-[30px]'>
                                            <div>
                                                <img className='headerLogoMobile' src={headerLogo} alt="" />
                                            </div>
                                            <div>
                                                <RxCross1 onClick={closeMenu} className='text-[25px] hover:text-[#FF0101]'></RxCross1>
                                            </div>
                                        </div>
                                        <ul className='menuParent'>
                                            <Fade cascade duration={300}>
                                                <Link to="/">
                                                    <li>HOME</li>
                                                </Link>
                                                <Link to="/">
                                                    <li >SERVICES</li>
                                                </Link>
                                                <Link to="/" >
                                                    <li >ABOUT</li>
                                                </Link>
                                                <Link to="/">
                                                    <li >PORTFOLIO</li>
                                                </Link>
                                                <Link to="/">
                                                    <li >BLOG</li>
                                                </Link>
                                                <Link to="/">
                                                    <li className="cursor-pointer"> CONTACT</li>
                                                </Link>
                                            </Fade>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>



                        {/* --------------DeskTop Socail Icons -------------- */}
                        <div className="md:block lg:block  xl:block 2xl:block hidden">
                            <div className="flex items-center">

                                {/* ----------Facebook ------ */}
                                <div className="                       
                   2xl:h-[27px]  2xl:w-[14px] 2xl:mr-[18.91px]
                   xl:mr-[17.91px] xl:w-[13px] xl:h-[25px]
                   lg:mr-[15px] lg:w-[12px] lg:h-[25px]
                   md:mr-[10px] md:w-[10px] md:h-[20px]
                   cursor-pointer">
                                    <img className="w-full h-full " src={fb} alt="" />
                                </div>

                                {/* -------instragram ---------- */}
                                <div className="
                   2xl:h-[25.11px] 2xl:w-[25.6px] 2xl:mr-[18.49px]                       
                   xl:w-[24.24px] xl:h-[23.78px] xl:mr-[17.51px]  
                   lg:w-[25px] lg:h-[22px] lg:mr-[15px]
                   md:w-[20px] md:h-[19px] md:mr-[10px]

                   cursor-pointer">
                                    <img className=" h-full w-full " src={instra} alt="" />
                                </div>
                                {/* -------Youtube ---------- */}
                                <div className="
                   2xl:h-[24px] 2xl:w-[36px] 
                   xl:h-[22.73px] xl:w-[34.09px]
                   lg:h-[22px] lg:w-[30px]
                   md:h-[20px] md:w-[20px]

                   cursor-pointer">
                                    <img className=" w-full h-full object-cover" src={youtube} alt="" />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>




            </div>
            <div className="bg-[#111111] 2xl:mt-[-100px] 2xl:rounded-t-[50px] xl:mt-[-50px] xl:rounded-t-[50px]
            lg:mt-[-50px] lg:rounded-t-[50px]
            ">
                <div className=" brandigParent ">
                    <p className="pageTitle">Home . Portfolio . Branding</p>

                    {/* ==========Islamic sections ======= */}
                    <div className=" text-white">
                        <h2 className="titleSubHeading">Islamic</h2>
                        <div className="hidden md:block lg:block xl:block 2xl:block">
                            <div className="
                       
                       flex justify-center items-center xl:gap-x-[30px] 2xl:gap-x-[50px]  lg:gap-x-[25px] md:gap-x-[15px]
                       ">
                                <div>
                                    <FaArrowLeftLong></FaArrowLeftLong>
                                </div>
                                <div className=" grid 2xl:grid-cols-3 2xl:gap-x-[50px] 
                           xl:grid-cols-3 xl:gap-x-[30px] 
                           lg:grid-cols-3 lg:gap-x-[25px]
                           md:grid-cols-3 md:gap-x-[15px]
                           justify-between w-full">

                                    {/* ==========card One ====== */}
                                    <Link to="/SinglePortFolioBranding">
                                        <div className="relative cursor-pointer">
                                            <div className=" border-[4px] rounded-[15px]  relative overflow-hidden">
                                                <div >
                                                    <div className="PortraitImgOne ">
                                                        <img className="h-full w-full" src="/imageOne.png" alt="" />
                                                    </div>
                                                    <div className="overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100">
                                                        <div className="overlay-content text-white flex flex-col items-center justify-center  rounded-lg">
                                                            <h5 className="overlayText">View More</h5>
                                                            <p><FaArrowRightLong></FaArrowRightLong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className="potraitBottomText rounded-[15px] text-center">Healing Home</h4>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* ==========card Two ====== */}
                                    <Link to="/InduvisualBrandingTwo" >
                                        <div className="relative cursor-pointer">
                                            <div className=" border-[4px] rounded-[15px]  relative overflow-hidden">
                                                <div >
                                                    <div className="PortraitImgOne ">
                                                        <img className="h-full w-full" src="/imageTwo.png" alt="" />
                                                    </div>
                                                    <div className="overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100">
                                                        <div className="overlay-content text-white flex flex-col items-center justify-center  rounded-lg">
                                                            <h5 className="overlayText">View More</h5>
                                                            <p><FaArrowRightLong></FaArrowRightLong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className="potraitBottomText rounded-[15px] text-center">Rondo ADS</h4>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* ==========card Three ====== */}
                                    <Link to="/InduvisualBrandingThree">
                                    <div className="relative cursor-pointer">
                                        <div className=" border-[4px] rounded-[15px]  relative overflow-hidden">
                                            <div >
                                                <div className="PortraitImgOne ">
                                                    <img className="h-full w-full" src="/imageThree.png" alt="" />
                                                </div>
                                                <div className="overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100">
                                                    <div className="overlay-content text-white flex flex-col items-center justify-center  rounded-lg">
                                                        <h5 className="overlayText">View More</h5>
                                                        <p><FaArrowRightLong></FaArrowRightLong></p>
                                                    </div>
                                                </div>
                                                {/* <h4 className="potraitBottomText rounded-[15px] text-center">Lorem</h4> */}
                                            </div>
                                            <h4 className="potraitBottomText rounded-[15px] text-center">Wellbeing Care</h4>
                                        </div>

                                        </div>
                                    </Link>

                                </div>


                                <div>
                                    <FaArrowRightLong></FaArrowRightLong>
                                </div>
                            </div>
                        </div>

                        <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden">
                            <Slider {...settings} >
                                {/* ==========card One ====== */}
                                <Link to="/SinglePortFolioBranding">
                                    <div className="relative cursor-pointer ">
                                        <div className=" border-[1px] rounded-[15px]  relative overflow-hidden">
                                            <div >
                                                <div className="PortraitImgOne ">
                                                    <img className="h-full w-full" src="/imageOne.png" alt="" />
                                                </div>
                                                <div className="overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100">
                                                    <div className="overlay-content text-white flex flex-col items-center justify-center  rounded-lg">
                                                        {/* <h5 className="overlayText">View Website</h5> */}
                                                        <p><FaArrowRightLong></FaArrowRightLong></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="potraitBottomText rounded-[15px] text-center">Lorem</h4>
                                        </div>
                                    </div>
                                </Link>

                                {/* ==========card Two ====== */}
                                <Link to="/InduvisualBrandingTwo">
                                    <div className="relative cursor-pointer">
                                        <div className=" border-[1px] rounded-[15px]  relative overflow-hidden">
                                            <div >
                                                <div className="PortraitImgOne ">
                                                    <img className="h-full w-full" src="/imageTwo.png" alt="" />
                                                </div>
                                                <div className="overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100">
                                                    <div className="overlay-content text-white flex flex-col items-center justify-center  rounded-lg">
                                                        {/* <h5 className="overlayText">View Website</h5> */}
                                                        <p><FaArrowRightLong></FaArrowRightLong></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="potraitBottomText rounded-[15px] text-center">Lorem</h4>
                                        </div>
                                    </div>
                                </Link>
                                {/* ==========card Three ====== */}

                                <Link to="/InduvisualBrandingThree">

                                    <div className="relative cursor-pointer">
                                        <div className=" border-[1px] rounded-[15px]  relative overflow-hidden">
                                            <div >
                                                <div className="PortraitImgOne ">
                                                    <img className="h-full w-full" src="/imageThree.png" alt="" />
                                                </div>
                                                <div className="overlay absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100">
                                                    <div className="overlay-content text-white flex flex-col items-center justify-center  rounded-lg">
                                                        {/* <h5 className="overlayText">View Website</h5> */}
                                                        <p><FaArrowRightLong></FaArrowRightLong></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="potraitBottomText rounded-[15px] text-center">Lorem</h4>
                                        </div>
                                    </div>
                                </Link>



                            </Slider>
                        </div>



                    </div>

                </div>




                {/* -----------Call to Action Section ------------ */}

                <div className="
            leftRight 
            2xl:pb-[200px] 2xl:pt-[200px]
            xl:pb-[180px] xl:pt-[180px]
            lg:pb-[150px] lg:pt-[150px]
            md:pb-[100px] md:pt-[100px]
            pt-[60px] pb-[60px] 

        ">

                    <div className=" 
            2xl:rounded-[30px] 2xl:h-[400px] 
            xl:rounded-[30px] xl:h-[300px] 
            lg:rounded-[25px] lg:h-[200px]
            md:rounded-[20px] md:h-[180px]
            rounded-[15px] 
            
            bg-gradient-to-r from-white to-transparent   p-[1px]
            ">
                        <div className="
               2xl:rounded-[30px]
               xl:rounded-[30px]
               lg:rounded-[25px]
               md:rounded-[20px]
               rounded-[15px]
                text-white bg-black relative h-full w-full  "
                        >
                            <div className=" h-full w-full">
                                <div className="text-center md:text-left lg:text-left xl:text-left 2xl:text-left  px-[15px] md:px-0 lg:px-0 xl:px-0 2xl:px-0  md:flex lg:flex xl:flex 2xl:flex justify-center items-center h-full w-full">
                                    <div className="
                            2xl:max-w-[520px] 2xl:mr-[180px]
                            xl:max-w-[550px] xl:mr-[120px] 
                            lg:max-w-[400px] lg:mr-[100px]
                            md:max-w-[400px] md:mr-[80px]
                        ">
                                        <h2 className="ctaHeading">Ready to Bring Your Vision to Life?</h2>
                                        <p className="ctaPara">Don't settle for mediocre video content. Partner with Fowzi Media and unleash the power of professional videography to elevate your brand. Schedule a consultation today and let's create something extraordinary together.</p>
                                    </div>
                                    <div className="ctaBtnParent">
                                        <button className="ctaBtn" onClick={revealPrice}>Reveal Price</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                {/* --- cantact PopUp section -------- */}
                {
                    popUp && <>

                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-center justify-center min-h-screen">
                                <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" aria-hidden="true" ></div>
                                <div className="relative bg-gray-700 xl:rounded-3xl 2xl:rounded-3xl lg:rounded-2xl md:rounded-2xl rounded-xl  border w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] 2xl:w-[50%]  mx-auto overflow-hidden shadow-md transform transition-all ">
                                    <div className="px-6 py-4">

                                        <div className="flex justify-between items-start">
                                            <div className="text-lg text-gray-300 font-semibold mb-4 ">
                                                <h2 className="text-lg text-gray-300 font-semibold">Get a quote</h2>
                                                <p className="text-[12px] text-gray-300"></p>
                                            </div>
                                            <button className="text-md text-gray-300 py-2 rounded-md focus:outline-none font-semibold hover:text-red-600" onClick={closePopUp} ><RxCross1 /></button>
                                        </div>

                                        <div className=' grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]'>
                                            <input
                                                type="text"
                                                placeholder='Enter Your Name'


                                                className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                            />
                                            <input
                                                type="text"
                                                placeholder='Enter Your Phone Number'


                                                className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                            />

                                        </div>
                                        <div className=' grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]'>
                                            <input
                                                type="text"
                                                placeholder='Enter Your Company Name'


                                                className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                            />
                                            <input
                                                type="text"
                                                placeholder='Enter Your Email Address '


                                                className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                            />

                                        </div>
                                        <div className="grid grid-cols-1 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]">
                                            <textarea

                                                onChange={handleDescriptionChange}
                                                className='text-[14px] rounded-sm bg-transparent outline-none border border-gray-500 py-2 px-2 text-gray-300 resize-none overflow-hidden'
                                                placeholder='Project Brief'
                                                rows={2}
                                                style={{ minHeight: '3rem', maxHeight: '10rem' }}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="px-2 py-4 bg-gray-700 flex md:justify-end lg:justify-end xl:justify-end 2xl:justify-end justify-center">
                                        <div>
                                            <button className="text-md py-2 px-4 rounded-md focus:outline-none text-white font-semibold" >Submit</button>
                                            <button className="text-md py-2 px-4 rounded-md focus:outline-none text-white font-semibold" onClick={closePopUp} >Cancel</button>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </>
                }

{/* --- cantact PopUp section -------- */}
{
                showContact && <>


                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" aria-hidden="true" ></div>
                            <div className="relative bg-gray-700 xl:rounded-3xl 2xl:rounded-3xl lg:rounded-2xl md:rounded-2xl rounded-xl  border w-[90%] md:w-[70%] lg:w-[70%] xl:w-[70%] 2xl:w-[50%]  mx-auto overflow-hidden shadow-md transform transition-all ">
                                <div className="px-6 py-4">


                                    <div className="flex justify-between items-start">
                                        <div className="text-lg text-gray-300 font-semibold mb-4 ">
                                            <h2 className="text-lg text-gray-300 font-semibold">Contact Now</h2>
                                            <p className="text-[12px] text-gray-300"></p>
                                        </div>
                                        <button className="text-md text-gray-300 py-2 rounded-md focus:outline-none font-semibold hover:text-red-600" onClick={closeContactForm} ><RxCross1 /></button>
                                    </div>


                                    <div className=' grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]'>
                                        <input
                                            type="text"
                                            placeholder='Enter Your Name'




                                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                        />
                                        <input
                                            type="text"
                                            placeholder='Enter Your Phone Number'




                                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                        />


                                    </div>
                                    <div className=' grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]'>
                                        <input
                                            type="text"
                                            placeholder='Enter Your Company Name'




                                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                        />
                                        <input
                                            type="text"
                                            placeholder='Enter Email Address '




                                            className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
                                        />


                                    </div>
                                    <div className="grid grid-cols-1 gap-1 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 w-[90%]">
                                        <textarea


                                            onChange={handleDescriptionChangeContact}
                                            className='text-[14px] rounded-sm bg-transparent outline-none border border-gray-500 py-2 px-2 text-gray-300 resize-none overflow-hidden'
                                            placeholder='Message'
                                            rows={2}
                                            style={{ minHeight: '3rem', maxHeight: '10rem' }}
                                        ></textarea>
                                    </div>
                                </div>


                                <div className="px-2 py-4 bg-gray-700 flex md:justify-end lg:justify-end xl:justify-end 2xl:justify-end justify-center">
                                    <div>
                                        <button className="text-md py-2 px-4 rounded-md focus:outline-none text-white font-semibold" >Submit</button>
                                        <button className="text-md py-2 px-4 rounded-md focus:outline-none text-white font-semibold" onClick={closeContactForm} >Cancel</button>
                                    </div>
                                </div>


                            </div>




                        </div>
                    </div>
                </>
            }
                {/* footer section */}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default PortFolioBranding;