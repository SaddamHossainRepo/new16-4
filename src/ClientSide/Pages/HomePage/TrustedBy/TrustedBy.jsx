
import client from "/trustedLogoOne.png"
import clientTwo from "/trustedLogoTwo.png"
import clientThree from "/trustedLogoThree.png"
import clientFour from "/trustedLogoFour.png"
import clientFive from "/trustedLogoFive.png"
import clientSix from "/trustedLogoSix.png"
import clientSeven from "/trustedLogoSeven.png"
import clientEight from "/eight.png"
import Marquee from "react-fast-marquee"
const TrustedBy = () => {
    return (
        <div className="leftRight">
            <h2 className="titleSubHeading text-center">Trusted By</h2>
            <Marquee autoFill={true} pauseOnHover={true}>
                <div className="flex justify-between  items-center 2xl:gap-[50px] xl:gap-[40px] lg:gap-[40px] md:gap-[30px] gap-[30px]">
                    <div className="
                2xl:w-auto 2xl:h-[70.42px] 
                xl:w-[95.44px] xl:h-[39px]
                lg:w-[80px]
                
                w-[55px]  ">
                        <img className="w-full h-full object-cover" src={clientFive} alt="" />
                    </div>

                    <div className="
                2xl:w-auto  2xl:h-[70.44px] 
                xl:w-[104px] xl:h-[38px] 
                lg:w-[90px]
                
                w-[45px]   ">
                        <img className="w-full h-full object-cover" src={clientSeven} alt="" />
                    </div>


                    <div className="
                2xl:w-auto  2xl:h-[70.42px]
                xl:w-[68.44px] xl:h-[38px] 
                lg:w-[80px]  
                w-[55px]  ">
                        <img className="w-full h-full object-cover" src={client} alt="" />
                    </div>

                    <div className="
                2xl:w-auto  2xl:h-[70.44px] 
                xl:h-[38px] xl:w-[104px]
                lg:w-[70px]
                
                w-[45px]   ">
                        <img className="w-full h-full object-cover" src={clientFour} alt="" />
                    </div>


                    <div className="
                2xl:w-auto  2xl:h-[70.42px]  
                xl:w-[97px] xl:h-[38px] 
                lg:w-[80px]
                w-[55px]  ">
                        <img className="w-full h-full object-cover" src={clientThree} alt="" />
                    </div>

                    <div className="
                2xl:w-auto 2xl:h-[70.44px]               
                xl:h-[34px] xl:w-[38px] 
                lg:w-[35px] 
                w-[25px]  ">
                        <img className="w-full h-full object-cover" src={clientSix} alt="" />
                    </div>

                    <div className="
                2xl:w-[153px] 2xl:h-[15.42px] 2xl:mr-[50px]
                xl:h-[15.42px]  xl:w-[153px]   xl:mr-[40px]
                lg:w-[120px]  lg:mr-[40px]
                w-[55px] mr-[30px]  ">
                        <img className="w-full h-full object-cover" src={clientEight} alt="" />
                    </div>
                    {/* <div className="2xl:w-auto xl:w-[75.61px] 2xl:h-[70.44px] xl:h-[51.83px] w-[45px]  ">
                    <img className="w-full h-full object-cover" src={clientTwo} alt="" />
                </div> */}
                </div>
            </Marquee>


        </div>
    );
};

export default TrustedBy;