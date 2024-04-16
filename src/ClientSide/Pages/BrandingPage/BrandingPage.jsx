import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Testimonial from "../HomePage/Testimonial/Testimonial";

import { useState } from "react";

// import { Link } from 'react-scroll';
import headerLogo from "/headerLogo.png"

import fb from "/fb.png";
import instra from "/instra.png";
import youtube from "/youtube.png"
import { SlMenu } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";

import { Fade } from 'react-awesome-reveal';
import CallToAction from './../HomePage/CallToAction/CallToAction';





const BrandingPage = () => {
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

    return (

        // Header 
        // portFoliohero.png
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
                                <Link to='/'   > <li className="desktopMenu">SERVICES</li> </Link>
                                <Link to="/"  > <li className=" desktopMenu">ABOUT</li> </Link>
                                <Link to="/" > <li className="desktopMenu ">PORTFOLIO</li> </Link>
                                <Link to="/" > <li className=" desktopMenu">BLOG</li> </Link>
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
                                                <Link to='/' smooth={true} duration={500}>
                                                    <li >SERVICES</li>
                                                </Link>
                                                <Link to="/" smooth={true} duration={600} >
                                                    <li >ABOUT</li>
                                                </Link>
                                                <Link to="/" smooth={true} duration={700}>
                                                    <li >PORTFOLIO</li>
                                                </Link>
                                                <Link to="/" smooth={true} duration={800}>
                                                    <li >BLOG</li>
                                                </Link>
                                                <Link to='/' smooth={true} duration={1000}>
                                                    <li className="cursor-pointer" onClick={contactBtn}> CONTACT</li>
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


            {/* ================ page body ================ */}
            <div className="bg-[#111111] 
            2xl:mt-[-100px] 2xl:rounded-t-[50px] 
            xl:mt-[-50px] xl:rounded-t-[50px]
            lg:mt-[-40px] lg:rounded-t-[40px]
            ">
                <div className=" brandigParent ">
                    <p className="pageTitle">Home . Our Service . Branding</p>
                    <h2 className="titleSubHeading block md:hidden lg:hidden xl:hidden 2xl:hidden
                            ">Branding</h2>
                    <div className="flex justify-between w-full flex-col-reverse md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">

                        <div className="2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[40%]  ">
                            <h2 className="titleSubHeading hidden md:block lg:block xl:block 2xl:block
                            ">Branding</h2>

                            <p className="brandingParaText">At <span className="text-[#FF0000] font-glaCailBold"> Fowzi Media</span> , we specialize in crafting captivating brand identities that resonate with your audience and leave a lasting impression. From logo design to website development, our comprehensive branding services are designed to propel your business forward and help you stand out in a crowded marketplace.</p>

                            <div className="barndingListItems">
                                <div className="flex flex-wrap gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[20px] 2xl:space-x-[30px]">
                                    <li>Brand Strategy</li>
                                    <li>Logo and Visual Identity</li>
                                </div>
                                <div className="flex flex-wrap gap-x-[20px] md:gap-x-[15px] lg:gap-x-[20px] xl:gap-x-[20px] 2xl:space-x-[30px]">
                                    <li>Brand Collateral</li>
                                    <li>Website Design</li>
                                    <li>Content Creation</li>
                                </div>
                                <div className="flex flex-wrap gap-x-[10px] md:gap-x-[15px]lg:gap-x-[20px] xl:gap-x-[20px]  2xl:space-x-[30px]">
                                    <li>Social Media Branding</li>
                                    <li>Brand Guidelines</li>
                                </div>
                            </div>

                        </div>

                        {/* right side img  */}

                        <div className="brandingImgParent">
                            <img className="h-full w-full xl:rounded-[30px] 2xl:rounded-[30px] lg:rounded-[15px] md:rounded-[10px]" src="/brandingLeft3.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* --------------our Process Section --------------- */}

                <div className="text-white leftRight">
                    <h4 className="titleSubHeading">Our Process</h4>
                    <div className="processParent">

                        <Fade delay={500} duration={500}>
                            <div className="brandingNumberParent">
                                <div >
                                    <div className="brandingNumber" >01</div>
                                </div>
                                <div>
                                    <h4 className="processHeading">Discovery :</h4>
                                    <p className="processPara">Gain a deep understanding of your business, audience, and objective.</p>
                                </div>
                            </div>
                        </Fade>

                        <Fade delay={800} duration={500} >
                            <div className="brandingNumberParent">
                                <div >
                                    <div className="brandingNumber" >02</div>
                                </div>
                                <div>
                                    <h4 className="processHeading">Strategy Development :</h4>
                                    <p className="processPara">Develop a tailored brand strategy based on insights gathered.</p>
                                </div>
                            </div>

                        </Fade>

                        <Fade delay={1100} duration={500}>
                            <div className="brandingNumberParent">
                                <div >
                                    <div className="brandingNumber" >03</div>
                                </div>
                                <div>
                                    <h4 className="processHeading">Creative Execution :</h4>
                                    <p className="processPara">Bring your brand to life through stunning designs and compelling content.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={1500} duration={500}>

                            <div className="brandingNumberParent">
                                <div >
                                    <div className="brandingNumber" >04</div>
                                </div>
                                <div>
                                    <h4 className="processHeading">Launch and Optimization:</h4>
                                    <p className="processPara">Roll out your new brand identity and continuously optimize based on performance metrics.</p>
                                </div>
                            </div>
                        </Fade>


                    </div>
                </div>


                {/* -------------------our work sections */}
                <div className="leftRight">
                    <div>
                        <h4 className="titleSubHeading">Our Works :</h4>
                    </div>
                    <div className="ourWorkParent">
                        <div>
                            <img className="WorkImgOne" src="/cardOne.png" alt="" />
                            <h4 className="ourWorksHead">Awad For Puntland</h4>
                            <p className="ourWorksPara">Your brand is more than just your logo. It's the overall image and reputation of your business or organization.</p>
                        </div>
                        <div>
                            <img className="WorkImgTwo" src="/cardTwo.jpeg" alt="" />
                            <h4 className="ourWorksHead">Jannah Fitwear</h4>
                            <p className="ourWorksPara" >Your brand is more than just your logo. It's the overall image and reputation of your business or organization.</p>
                        </div>
                        <div>
                            <img className="WorkImgThree" src="/cardThree.png" alt="" />
                            <h4 className="ourWorksHead">Friday Fashion</h4>
                            <p className="ourWorksPara" >Your brand is more than just your logo. It's the overall image and reputation of your business or organization.</p>
                        </div>
                        <div>
                            <img className="WorkImgOne" src="/cardFour.png" alt="" />
                            <h4 className="ourWorksHead">Puntland</h4>
                            <p className="ourWorksPara" >Your brand is more than just your logo. It's the overall image and reputation of your business or organization.</p>
                        </div>
                    </div>
                </div>

                {/* ----------Testimonial Sections -------------- */}

                <Testimonial></Testimonial>

                {/* -----------Call to Action Section ------------ */}

                <div className="xl:pt-[180px] 2xl:pt-[200px] lg:pt-[150px] md:pt-[100px] pt-0">
                    <CallToAction></CallToAction>
                </div>

                {/* footer section */}
                <Footer></Footer>
            </div>

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
        </div>
    );
};

export default BrandingPage;