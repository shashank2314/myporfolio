import logo from "../assets/logo.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { IoReorderThreeSharp } from "react-icons/io5";
function Navbar({active, setactive}) {

    const [toggle, settoggle] = useState(true);
    

    return (
        <div className="flex flex-row justify-between w-screen lg:px-20 lg:py-10 p-5 items-center md:fixed text-2xl md:text-xl bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-1000">
            <Link to={"/"} className="flex lg:flex-row flex-col items-center justify-center gap-1" onClick={
                        () => {
                            setactive("");
                        }
                    }>
                <div className="flex items-center justify-center gap-2">
                    <img src={logo} className="w-12 h-12 " alt="logo" />
                    <div className="font-bold text-xl">Shashank Kumar</div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <div>/</div>
                    <div>Web Developer</div>
                </div>
            </Link>
            <div className="md:flex gap-4 hidden">
                <Link to={"/"}
                    onClick={
                        () => {
                            setactive("");
                        }
                    }
                    className={`${active === "" ? "text-cyan-400" : "text-black"}`}>ABOUT ME</Link>
                <Link to={"/resume"} onClick={() => {
                    setactive("resume");
                }} className={`${active === "resume" ? "text-cyan-400" : "text-black"}`}>RESUME</Link>
                <Link to={"/projects"} onClick={() => {
                    setactive("projects");
                }} className={`${active === "projects" ? "text-cyan-400" : "text-black"}`}>PROJECTS</Link>
                <Link to={"/contact"} onClick={() => {
                    setactive("contact");
                }} className={`${active === "contact" ? "text-cyan-400" : "text-black"}`}>CONTACT</Link>
            </div>
            <div className="md:hidden ">
                {/* <img src={toggle?menu:close} alt="menu" onClick={toggleChanger}/> */}
                {
                    toggle ?
                        <div onClick={()=>{settoggle(!toggle)}}><IoReorderThreeSharp className="text-4xl mr-2" /></div>
                        :
                        <div onClick={()=>{settoggle(!toggle)}}> <ImCross className="text-xl mr-3" /></div>

                }
                <div className={`${toggle ? "hidden" : "flex"} p-6 absolute flex-col top-[100px] right-5 left-20 my-2 min-w-[140px] z-10 rounded-xl bg-slate-500`}>
                    <Link to={"/"} onClick={() => {
                        setactive("");
                        settoggle(!toggle);
                    }} className={`${active === "" ? "text-cyan-400" : "text-black"}`}>ABOUT ME</Link>
                    <Link to={"/resume"} onClick={() => {
                        setactive("resume");
                        settoggle(!toggle);
                    }} className={`${active === "resume" ? "text-cyan-400" : "text-black"}`}>RESUME</Link>
                    <Link to={"/projects"} onClick={() => {
                        setactive("projects");
                        settoggle(!toggle);
                    }} className={`${active === "projects" ? "text-cyan-400" : "text-black"}`}>PROJECTS</Link>
                    <Link to={"/contact"} onClick={() => {
                        setactive("contact");
                        settoggle(!toggle);
                    }} className={`${active === "contact" ? "text-cyan-400" : "text-black"}`}>CONTACT</Link>

                </div>
            </div>
        </div>
    );
}

export default Navbar;