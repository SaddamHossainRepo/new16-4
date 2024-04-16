import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const CallToAction = () => {

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


    return (
        <div>
            <div className="
            leftRight 
            2xl:pb-[200px] 2xl:pt-0
            xl:pb-[180px] xl:pt-0
            lg:pb-[150px] lg:pt-0
            md:pb-[100px] md:pt-0 
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
                                    <h2 className="ctaHeading">Ready to Elevate Your Brand?</h2>
                                    <p className="ctaPara">Don't settle for mediocrity. Partner with Fowzi Media and take your brand to new heights. Schedule a consultation today and discover how our branding services can transform your business.</p>
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

                    <div className="fixed z-50 inset-0 overflow-y-auto">
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
        </div>
    );
};

export default CallToAction;
