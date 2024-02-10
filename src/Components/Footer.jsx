import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa6";

function Footer({setactive}) {
    return (
    <div className="w-screen bg-white h-fit p-16 flex items-center sm:flex-row flex-col justify-center relative ">
        <div className="flex gap-1 items-center justify-center absolute bottom-5 right-12">
            <div>Made with ❤️Shashank Kumar</div>
            <div className="flex items-center justify-center gap-1">
            <FaRegCopyright />2024
            </div>
        
        </div>
        <div className="flex gap-4 justify-center items-center w-full">

            <Link to={"/resume"}  onClick={
                        () => {
                            setactive("resume");
                        }
                    } className="text-black">RESUME</Link>
            <Link to={"/projects"}  onClick={
                        () => {
                            setactive("projects");
                        }
                    } className="text-black">PROJECTS</Link>
            <Link to={"/contact"}  onClick={
                        () => {
                            setactive("contact");
                        }
                    } className="text-black">CONTACT</Link>
        </div>
        <div className="bg-white w-[100%] p-5 flex justify-center items-center gap-4 text-2xl">
            <a href="https://www.instagram.com/shashank_prajapati7?igsh=MTJ2MXU1ZXY5Y25neQ=="  >
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/shashank-kumar-62a2b1260/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" >
                <FaLinkedin />
            </a>
        </div>
    </div>
    );
}
export default Footer;