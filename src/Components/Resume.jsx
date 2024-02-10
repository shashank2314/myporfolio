import resume from "../assets/Shashank Kumar Resume.pdf"
import { Education } from "../Data/Education";
import { IoLocation } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { Skills } from "../Data/Skill";
export default function Resume() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 w-11/12 lg:w-9/12 pb-10 ">
            <div className=' font-bold text-3xl'>Resume</div>
            <div className=" flex flex-col justify-center items-center gap-8 w-full">
                <div className=" flex justify-between items-center lg:w-9/12 sm:w-11/12">
                    <div className="font-semibold text-2xl">Education</div>
                    <div>
                        <a href={resume} download={`resume`} className={`text-center text-[13px] sm:text-[16px] px-6 py-2 rounded-[25px] font-bold  shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-blue-900 text-white border-white  border-2 hover:bg-white hover:text-blue-900 hover:border-blue-900 hover:shadow-none hover:scale-95 transition-all duration-200 `}>
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-10 w-full">
                    {
                        Education.map((data) => (
                            <div key={data.id} className="flex flex-col md:flex-row justify-center rounded-md bg-white w-full lg:w-9/12 sm:w-11/12 px-10 py-4 text-xl shadow-[-35px_-35px_120px_-15px_rgba(0,0,0,0.3)] gap-2">
                                <div className="w-full flex flex-col gap-4">
                                    <h2 className="flex items-center text-cyan-400 font-semibold text-2xl gap-1"><GiDuration className="text-[30px]" />{data.year}</h2>
                                    <div className="flex items-center gap-1">
                                        <FaUniversity className="text-[30px]" />{data.University}
                                    </div>
                                    <div className="flex items-start gap-1"><FaGraduationCap className="text-[30px] w-[35px]" />{data.Standard}</div>
                                    <div className="flex items-center gap-1"><LuFileSpreadsheet className="text-[30px]" />{data.Grade}%</div>
                                </div>
                                <div className="flex items-start gap-1">
                                    <IoLocation className="text-[35px] md:text-[60px]" />
                                    {data.Location}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="lg:w-9/12 sm:w-11/12"><div className="font-semibold text-3xl mt-10 mb-4">Skills</div></div>
            
            <div className="flex flex-col justify-center rounded-md bg-white w-full lg:w-9/12 sm:w-11/12 px-10 py-4 text-xl shadow-[-35px_-35px_120px_-15px_rgba(0,0,0,0.3)] gap-6">
                    <div className="flex flex-col items-start">
                        <h2 className="font-semibold text-2xl">Professional Skillset</h2>
                        {
                            Skills.map((Skill,index)=>(
                                <div key={index} className="flex gap-x-8 items-center text-gray-800 flex-wrap">
                                    {
                                        Skill.Professional.map((data,ind)=>(
                                            <li key={ind}><span>{data}</span></li>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="font-semibold text-2xl">Programming Languages</h2>
                        {
                            Skills.map((Skill,index)=>(
                                <div key={index} className="flex gap-x-8 items-center text-gray-800 flex-wrap">
                                    {
                                        Skill.Languages.map((data,ind)=>(
                                            <li key={ind}><span className="relative -left-2">{data}</span></li>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="font-semibold text-2xl">Development Skills</h2>
                        {
                            Skills.map((Skill,index)=>(
                                <div key={index} className="flex gap-x-8 items-center flex-wrap text-gray-800">
                                    {
                                        Skill.Development.map((data,ind)=>(
                                            <li key={ind}><span className="relative -left-2">{data}</span></li>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
            </div>
        </div>
    );
}