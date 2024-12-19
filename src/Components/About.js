import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import myimage from "../assets/image.png";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";
function About() {
    return (
        <div className="flex justify-between flex-col md:flex-row items-center w-11/12 lg:w-9/12 bg-hero2 shadow-[-35px_-35px_60px_-15px_rgba(0,0,0,0.3)] mb-10 ">
            <div className="w-full flex flex-col justify-end gap-12 pt-12 mt-6">
                <div className="flex flex-col items-center pr-5">
                    <div className="flex justify-center rounded-[50%]">
                        <img src={myimage} alt="myimage" className=" rounded-[50%] w-[60%] h-auto " />
                    </div>
                    <div className="font-bold text-2xl text-black mt-2">Shashank </div>
                    <div className="font-bold text-2xl text-black mb-2">Kumar</div>
                    <div className="bg-white w-20 h-1 rounded-sm my-2"></div>
                    <div className="text-2xl text-black mt-2 tracking-wider">MERN Developer</div>
                </div>

                <div className="bg-white w-[100%] p-5 flex justify-center items-center gap-4 text-2xl">
                    <a href="https://leetcode.com/u/s7351hashank/"  >
                        <SiLeetcode />
                    </a>
                    <a href="https://www.linkedin.com/in/shashank-kumar-62a2b1260/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className=" flex flex-col gap-4 justify-between items-start w-full md:w-[85%] h-full bg-hero3 p-10">
                <div className="font-bold text-6xl text-black">HELLO</div>
                <div className="font bold text-2xl text-black">This is Shashank Kumar.</div>
                <TypeAnimation
                    sequence={["I am Mern stack Developer.", 2000, "I am a UI/UX Developer.", 1000, ""]}
                    className="font-bold h-fit md:h-[80px] text-3xl text-[#9e8e69]"
                    cursor={false}
                    repeat={Infinity}
                    style={{
                        whiteSpace: "pre-line",
                        display: "block",
                    }}
                    omitDeletionAnimation={false}
                />
                <div className="flex justify-start gap-6 mt-4">
                    <Button active={true} linkto={"/resume"}>
                        Resume
                    </Button>
                    <Button active={false} linkto={"/projects"}>
                        Projects
                    </Button>
                </div>
                <div className="text-xl text-justify">I am a software/web developer and here is my portfolio website. you will learn my software journey as a software engineer.</div>
            </div>
        </div>
    );
}

export default About;