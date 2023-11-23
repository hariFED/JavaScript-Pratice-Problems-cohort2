import  { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Datatypes, functionsQuestion, controlStatements, operators, loops } from "./Questions";





const Tabs = () => {

    const [active, setActive] = useState(0)

    const handleClick = (index) => {
        setActive(index)
    }


    return (

        <>
            <div>
                <div className="flex flex-row items-center justify-center mt-10 text-xl font-semibold text-center poppins sm:text-4xl">
                    JS 15 DAYS PRATICE PROBLEM
                </div>
                <div className="flex flex-col justify-center" >
                    <div>
                        <div className="flex flex-col flex-wrap items-center max-w-2xl mt-10 text-center sm:flex-row poppins justify-stretch" >
                            <div className={`sm:w-1/6 w-full sm:h-20 sm:py-5 py-2 bg-gray-100 border-b-2 cursor-pointer  hover:border-black hover:bg-white hover:text-black ${active === 0 ? "bg-white border-black" : ""}`} onClick={() => handleClick(0)}>About</div>
                            <div className={`sm:w-1/6 w-full sm:h-20 sm:py-5 py-2 bg-gray-100 border-b-2 cursor-pointer hover:border-black hover:bg-white hover:text-black ${active === 1 ? "bg-white border-black" : ""}`} onClick={() => handleClick(1)}>Datatypes</div>
                            <div className={`sm:w-1/6 w-full sm:h-20 sm:py-5 py-2 bg-gray-100 border-b-2 cursor-pointer hover:border-black hover:bg-white hover:text-black ${active === 2 ? "bg-white border-black" : ""}`} onClick={() => handleClick(2)}>Control Statements</div>
                            <div className={`sm:w-1/6 w-full sm:h-20 sm:py-5 py-2 bg-gray-100 border-b-2 cursor-pointer hover:border-black hover:bg-white hover:text-black ${active === 3 ? "bg-white border-black" : ""}`} onClick={() => handleClick(3)}>Operators</div>
                            <div className={`sm:w-1/6 w-full sm:h-20 sm:py-5 py-2 bg-gray-100 border-b-2 cursor-pointer hover:border-black hover:bg-white hover:text-black ${active === 4 ? "bg-white border-black" : ""}`} onClick={() => handleClick(4)}>Functions</div>
                            <div className={`sm:w-1/6 w-full sm:h-20 sm:py-5 py-2 bg-gray-100 border-b-2 cursor-pointer hover:border-black hover:bg-white hover:text-black ${active === 5 ? "bg-white border-black" : ""}`} onClick={() => handleClick(5)}>Loops</div>

                        </div>
                    </div>
                    <div>
                        <div >
                            <div className={` max-w-2xl p-8 text-justify   text-base poppins h-[662px]  `}>
                                <div className={active === 0 ? "block " : "hidden"}>
                                    <h1 className="px-2 text-2xl font-medium"> Hi !</h1>


                                    <p className="p-2">I have developed this page just for fun or just to get my basics recall for the <a href="https://100xdevs.com/new-courses/8-live-0-100-complete" target="_blank" rel="noreferrer" className="text-blue-500">cohort2</a> by <a href="https://twitter.com/kirat_tw?lang=en" className="text-blue-500">Harkirat Singh</a></p>
                                    <p className="p-2">This page includes the pratice problems for learning or recalling of JavaScript.This Pratice problem was given by the mentor Harkirat Singh in an Youtube Live through a roadmap.</p>
                                    <p className="p-2">So there are some more problems on the topic of Arrays, Strings and Objects which the links are given below:</p>
                                    <div className="p-2">
                                        <ol className="list-decimal list-inside">
                                            <li className="p-1">Arrays: <a className="text-blue-500 underline underline-offset-4" href="https://leetcode.com/problem-list/top-interview-questions/?topicSlugs=array&page=1&difficulty=EASY" > Click here for the problems</a></li>
                                            <li className="p-1">Strings: <a className="text-blue-500 underline underline-offset-4" href="https://leetcode.com/problem-list/top-interview-questions/?topicSlugs=string&page=1&difficulty=EASY" > Click here for the problems</a></li>
                                            <li className="p-1">Objects: <a className="text-blue-500 underline underline-offset-4" href="https://gist.github.com/9520prashant/1a047c6c850266d2e6dddb92bbc2d6cd" > Click here for the problems</a></li>
                                        </ol>
                                    </div>
                                    <div className="px-2 py-4">
                                        <h1 className="font-medium ">Sources</h1>
                                        <ul className="list-disc list-inside">
                                            <li className="py-2"><a className="text-blue-500 " href="https://whimsical.com/js-basics-roadmap-HxsoYtVkawZbjC1gcy61Cc" target="_blank" rel="noreferrer">JS basics in 15 Days RoadMap</a></li>
                                            <li className="py-2"><a className="text-blue-500 " href="https://github.com/ShubhChaturvedi/JavaScript-advance/tree/main/002_parctice" target="_blank" rel="noreferrer">Git Repo of solutions for the pratice problems</a></li>

                                        </ul>

                                    </div>

                                    <p className="px-2 py-5 text-2xl font-medium">Thank You</p>

                                    <div className="px-2">
                                        With regards
                                        <ul className="flex gap-5 py-2 ">
                                            <li className="text-2xl cursor-pointer "><a href="https://github.com/hariFED" target="_blank" rel="noreferrer"><FaGithub />   </a>  </li>
                                            <li className="text-2xl cursor-pointer "><a href="https://www.linkedin.com/in/hariharan-baskaran-588b401aa" target="_blank" rel="noreferrer"><FaLinkedin /> </a>  </li>
                                            <li className="text-2xl cursor-pointer "><a href="https://twitter.com/hari_haran_js" target="_blank" rel="noreferrer"><FaXTwitter /> </a>  </li>
                                        </ul>
                                    </div>

                                </div>
                                <div className={active === 1 ? "block " : "hidden"}>
                                    <h1 className="px-2 text-xl font-medium"> DataTypes : </h1>
                                    {Datatypes.map((x, index) => (

                                        <p className="p-2" key={index}>{index + 1}.{x}</p>
                                    ))}
                                </div>
                                <div className={active === 2 ? "block " : "hidden"}>
                                    <h1 className="px-2 text-xl font-medium"> Control Statements : </h1>
                                    {controlStatements.map((x, index) => (
                                        <p className="p-2" key={index}>{index + 1}.{x}</p>
                                    ))}
                                </div>
                                <div className={active === 3 ? "block" : "hidden"}>
                                    <h1 className="px-2 text-xl font-medium"> Operators : </h1>
                                    {operators.map((x, index) => (
                                        <p className="p-2" key={index}>{index + 1}.{x}</p>
                                    ))}
                                </div>
                                <div className={active === 4 ? "block" : "hidden"}>
                                    <h1 className="px-2 text-xl font-medium"> Functions : </h1>
                                    {functionsQuestion.map((x, index) => (
                                        <p className="pt-3 " key={index}>{index + 1}.{x}</p>
                                    ))}
                                </div>
                                <div className={active === 5 ? "block" : "hidden"}>
                                    <h1 className="px-2 text-xl font-medium"> Loops : </h1>
                                    {loops.map((x, index) => (
                                        <p className="p-2" key={index}>{index + 1}.{x}</p>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Tabs;