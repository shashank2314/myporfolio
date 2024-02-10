
import { myprojects } from "../Data/ProjectData"
import Button from "./Button";

function Project() {
    return (
        <div className='flex justify-between flex-col items-center w-11/12 lg:w-9/12 gap-10 pb-10'>
            <div className=' font-bold text-3xl'>Projects</div>
            <div className="w-full flex flex-col justify-center items-center gap-10">{
                myprojects.map((project) =>
                (
                    <div key={project?.id} className="flex justify-center items-center bg-white w-full lg:w-11/12 p-4 shadow-[-35px_-35px_60px_-15px_rgba(0,0,0,0.3)] gap-2">
                        <div className="w-full lg:w-[110%] flex flex-col justify-between items-center gap-5">
                            <div className="w-full bg-[#dccaa0] pl-2 py-1 flex items-center gap-2">
                                <div className="text-blue-800 font-bold text-3xl ">{project.id}</div>
                                <div>
                                    <h1 className="text-blue-800 font-bold text-xl">{project.name}</h1>
                                    <p className=" text-gray-950 font-sans">{project.usedtech}</p>

                                </div>
                            </div>


                            <div className="px-4 text-black text-justify">{project.description}</div>
                            <div className="flex justify-between items-center w-full px-10">
                                
                                    <a href={project.link} className={`text-center text-[13px] sm:text-[16px] px-6 py-2 rounded-[25px] font-bold  shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-blue-900 text-white border-white  border-2 hover:bg-white hover:text-blue-900 hover:border-blue-900 hover:shadow-none hover:scale-95 transition-all duration-200 `}>Go to Website</a>
                                
                                
                                    <a href={project.codelink} className={`text-center text-[13px] sm:text-[16px] px-6 py-2 rounded-[25px] font-bold  shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-white border-blue-900 text-blue-900 border-2 hover:border-white hover:text-white hover:bg-blue-900 hover:shadow-none hover:scale-95 transition-all duration-200 `}>Visit to Code</a>
                                
                            </div>
                        </div>
                        <div className=" hidden md:flex">
                            <img src={`${project.image}`} alt="projectimage" width={800} className="aspect-[4/3] rounded-lg my-5" />
                        </div>

                    </div>
                )
                )
            }

            </div>
            <div>
            <a href="https://github.com/shashank2314" className={`text-center text-[16px] sm:text-[20px] px-6 py-3 rounded-[25px] font-bold  shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-blue-900 text-white border-white  border-2 hover:bg-white hover:text-blue-900 hover:border-blue-900 hover:shadow-none hover:scale-95 transition-all duration-200 `}>Go to my Github</a>
            </div>
        </div>)
}

export default Project;