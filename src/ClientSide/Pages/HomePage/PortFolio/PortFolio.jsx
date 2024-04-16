
import { Fade } from "react-awesome-reveal";
import camera1 from "/camera1.png"
import camera2 from "/camera2.png"
import camera3 from "/camera3.png"
import camera4 from "/camera4.png"
import { Link } from "react-router-dom";
import { Element } from 'react-scroll';

const PortFolio = () => {
    return (
        <Element className="leftRight" name="portfolio">
            <h2 className="titleSubHeading">Portfolio</h2>
            <div className="grid grid-cols-4">

                {/* ---------------- Branding ------------------------ */}
                <Link to="/PortFolioBranding">
                    <Fade direction="left" >
                        <div className="relative   ">
                            <div className="2xl:h-[778px]  2xl:w-[405px] xl:h-[450.18px] overflow-hidden ">
                                <img className=" rounded-[2px] h-full w-full object-cover hover:scale-125 duration-1000" src={camera3} alt="" />
                            </div>
                            <p className="porfolioText">Branding</p>
                        </div>
                    </Fade>
                </Link>


                {/* ---------------- Web Design ------------------------ */}
                <Link to="/PortFolioWebDesign">
                    <Fade direction="left" duration={600} delay={500} >
                        <div className="relative  ">
                            <div className="2xl:h-[778px]  2xl:w-[405px]  xl:h-[450.18px] overflow-hidden">
                                <img className=" rounded-[2px] h-full w-full object-cover hover:scale-125 duration-1000" src={camera4} alt="" />
                            </div>

                            <p className="porfolioText">Web Design</p>
                        </div>
                    </Fade>
                </Link>

                {/* --------------- videoGraphy ----------------- */}
                <Link to="/PortFolioVideoGraphy">
                    <Fade direction="left" duration={600} delay={650}>
                        <div className="relative   ">
                            <div className="2xl:h-[778px]  2xl:w-[405px] xl:h-[450.18px] overflow-hidden ">
                                {/* <img className=" rounded-[2px] h-full w-full object-cover hover:scale-125 duration-1000" src={camera2} alt="" /> */}
                                <img className=" rounded-[2px] h-full w-full object-cover hover:scale-125 duration-1000" src={camera4} alt="" />

                            </div>
                            <p className="porfolioText">Videography</p>
                        </div>
                    </Fade>
                </Link>

                {/* --------------- Photography ----------------- */}
                

                <Fade direction="left" delay={800} duration={700} >
                    <Link to="/PortFolioPhotography">
                        <div className="relative    ">
                            <div className="2xl:h-[778px]  2xl:w-[405px] xl:h-[450.18px]  overflow-hidden ">
                                <img className=" rounded-[2px] h-full w-full object-cover hover:scale-125 duration-1000" src={camera1} alt="" />
                            </div>
                            <p className="porfolioText">Photography</p>
                        </div>
                    </Link>
                </Fade>







            </div>

        </Element>
    );
};

export default PortFolio;