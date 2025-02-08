import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button2";
import { ArrowRight, Github, Linkedin, Code2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <main className="flex flex-col items-center justify-center px-24 pb-24 pt-10">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <div className="flex flex-row gap-20 justify-between align-start">
                    <div className="hidden md:flex flex-col justify-start items-center ">
                        <div
                            className="bg-violet-500 w-5 h-5 rounded-full"
                        ></div>
                        <div className="w-1 h-60 sm:h-80  bg-gradient-to-b from-violet-600 to-transparent"></div>
                    </div>
                    <div className="w-full">
                        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                            Hi, I&apos;m{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Shashank Kumar
                            </span>
                        </h1>
                        <p className="md:mb-8 mb-4 text-xl text-muted-foreground">
                            Computer Science Student at IIIT Kota
                        </p>
                        <TypeAnimation
                            sequence={["I am a Skilled Developer.", 2000, "I am a Passionate Competitive Programmer.", 1000, ""]}
                            className="font-bold h-fit md:h-[80px] text-xl md:text-3xl text-[#9e8e69]"
                            cursor={false}
                            repeat={Infinity}
                            style={{
                                whiteSpace: "pre-line",
                                display: "block",
                            }}
                            omitDeletionAnimation={false}
                        />
                        <div className="mb-8 mt-4 flex justify-center space-x-4">
                            <Button asChild>
                                <Link to="/projects">
                                    View My Work
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link to="/contact">Contact Me</Link>
                            </Button>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <Button variant="ghost" size="icon" asChild>
                                <Link to="https://github.com/shashank2314" target="_blank">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link to="https://www.linkedin.com/in/shashank-kumar-62a2b1260/" target="_blank">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link to="https://leetcode.com/u/s7351hashank/" target="_blank">
                                    <Code2 className="h-5 w-5" />
                                    <span className="sr-only">LeetCode</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </main>
    );
};

export default Home;
