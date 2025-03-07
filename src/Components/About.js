import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import myimage from "../assets/image.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./Button2";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";


function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <main className="container mx-auto px-10 py-10">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="mb-16 text-4xl font-bold">About Me</h1>
                <div className="flex flex-col md:flex-row gap-10 justify-center items-center">

                    <div className="flex item-center w-[270px] h-[270px] aspect-square justify-center">
                        <img src={myimage} alt="myimage" className="w-[270px] h-[270px] aspect-square" />
                    </div>

                    <div className="flex flex-col gap-4 justify-between items-center text-xl prose prose-lg dark:prose-invert py-5 md:pr-5">
                        <p>
                            Hi, I&apos;m Shashank Kumar, a passionate Software Developer and currently pursuing Bachelor&apos;s of Technology majoring in Computer Science and Engineering at IIIT Kota.
                            You can learn more about my Software Journey as a Software Engineer.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <Button variant="ghost" size="icon" asChild>
                                <Link to="https://github.com/shashank2314" target="_blank">
                                    <Github className="h-6 w-6" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link to="https://www.linkedin.com/in/shashank-kumar-62a2b1260/" target="_blank">
                                    <FaLinkedin className="h-6 w-6" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link to="https://leetcode.com/u/s7351hashank/" target="_blank">
                                    <SiLeetcode className="h-6 w-6" />
                                    <span className="sr-only">LeetCode</span>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link to="mailto:2021kucp1137@iiitkota.ac.in" target="_blank">
                                    <Mail className="h-6 w-6" />
                                    <span className="sr-only">Gmail</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}

export default About;