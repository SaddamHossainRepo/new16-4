
import { Link } from "react-router-dom";
// import blog1 from "/blogImg1.webp"
import blog1 from "/blogOne.png"
// import blog2 from "/blogImg2.webp"
import blog2 from "/blogTwo.jpg"
import blog3 from "/blogImg3.webp"
import profile from "/profile.png"
import { BsThreeDotsVertical } from "react-icons/bs";
import {  Element } from 'react-scroll';



const Blog = () => {
    return (
        <Element name="blog">
            <div className="leftRight 2xl:pb-[200px] xl:pb-[180px] lg:pb-[100px] md:pb-[50px] pb-[10px] ">
                <h2 className="titleSubHeading">Case Studies</h2>
                <div className="md:flex lg:flex xl:flex 2xl:flex   justify-between ">
                    <Link to='#' target="_blank">
                        <div

                        // 2xl:bg-[url('/largeBorder.png')] xl:bg-[url('/mdBlogBorder.png')] 

                            className="  2xl:w-[494px]  2xl:mr-[55px] 2xl:mb-0
                            xl:w-[368.06px]  xl:mb-0
                            mb-[40px]
                            lg:mr-[30px]
                            md:mr-[15px]
                           border rounded-[15px] ">

                            <img className="blogImg" src={blog1} alt="" />

                            <div
                                className="2xl:px-[15px] 2xl:pt-[25px] 2xl:pb-[25px]
                                xl:px-[11px] xl:pt-[19px] xl:pb-[19px]
                                px-[5px] pt-[10px] pb-[10px]
                                flex justify-between items-center">
                                {/* <div className="flex items-center">
                                    <div>
                                        <img className="xl:h-[25px] xl:w-[25px] h-[30px] w-[30px] object-cover" src={profile} alt="" />
                                    </div>
                                    <div className="2xl:ml-[10px] xl:ml-[7.24px] ml-[10px]">
                                        <h3 className="blogUserTitle">Hossen Noor</h3>
                                        <h3 className="blogDate">Dec 28, 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p><BsThreeDotsVertical className="text-white"></BsThreeDotsVertical></p>
                                </div> */}
                            </div>
                            <p className="blogHeading">Awad For Puntland</p>
                            {/* <p className="blogPara">
                                Video is an increasingly important tool for businesses looking to market themselves effectively in today digital world.. <span className="font-glaCailBold underline underline-offset-2">read more</span>
                            </p> */}
                           
                        </div>
                    </Link>

                    {/* card two */}
                    <Link to='#' target="_blank">
                    <div
                            className="   2xl:w-[494px]    2xl:mr-[55px] 2xl:mb-0
                            xl:w-[368.06px]  xl:mb-0
                            mb-[40px]
                            lg:mr-[30px]
                            md:mr-[15px]
                            border rounded-[15px]
                            object-cover bg-no-repeat">

                            <img className="blogImg" src={blog2} alt="" />

                            <div
                                className="2xl:px-[15px] 2xl:pt-[25px] 2xl:pb-[25px]
                                xl:px-[11px] xl:pt-[19px] xl:pb-[19px]
                                px-[5px] pt-[10px] pb-[10px]
                                flex justify-between items-center">
                                {/* <div className="flex items-center">
                                    <div>
                                        <img className="xl:h-[25px] xl:w-[25px] h-[30px] w-[30px] object-cover" src={profile} alt="" />
                                    </div>
                                    <div className="2xl:ml-[10px] xl:ml-[7.24px] ml-[10px]">
                                        <h3 className="blogUserTitle">Hossen Noor</h3>
                                        <h3 className="blogDate">Dec 28, 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p><BsThreeDotsVertical className="text-white"></BsThreeDotsVertical></p>
                                </div> */}
                            </div>
                            <p className="blogHeading">Jannah Fitwear</p>
                            {/* <p className="blogPara">
                                Video is an increasingly important tool for businesses looking to market themselves effectively in today digital world.. <span className="font-glaCailBold underline underline-offset-2">read more</span>
                            </p> */}
                            
                        </div>
                    </Link>

                    {/* card three */}
                    <Link to='#' target="_blank">
                    <div
                            className="   2xl:w-[494px]    2xl:mr-[55px] 2xl:mb-0
                            xl:w-[368.06px]  xl:mb-0

                            border rounded-[15px]
                            object-cover bg-no-repeat">

                            <img className="blogImg" src={blog3} alt="" />

                            <div
                                className="2xl:px-[15px] 2xl:pt-[25px] 2xl:pb-[25px]
                                xl:px-[11px] xl:pt-[19px] xl:pb-[19px]
                                px-[5px] pt-[10px] pb-[10px]
                                flex justify-between items-center">
                                {/* <div className="flex items-center">
                                    <div>
                                        <img className="xl:h-[25px] xl:w-[25px] h-[30px] w-[30px] object-cover" src={profile} alt="" />
                                    </div>
                                    <div className="2xl:ml-[10px] xl:ml-[7.24px] ml-[10px]">
                                        <h3 className="blogUserTitle">Hossen Noor</h3>
                                        <h3 className="blogDate">Dec 28, 2022</h3>
                                    </div>
                                </div>
                                <div>
                                    <p><BsThreeDotsVertical className="text-white"></BsThreeDotsVertical></p>
                                </div> */}
                            </div>
                            <p className="blogHeading">The Importance of Using Video to Market Your Products or Services</p>
                            {/* <p className="blogPara">
                                Video is an increasingly important tool for businesses looking to market themselves effectively in today digital world.. <span className="font-glaCailBold underline underline-offset-2">read more</span>
                            </p> */}
                          
                        </div>
                    </Link>
                </div>


               
                {/* See more button for show all blogs */}
                {/* <Link><button className="blogSeeMore">See More</button></Link> */}
            </div>



        </Element>
    );
};

export default Blog;