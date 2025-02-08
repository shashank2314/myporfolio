import React from "react";
import { myprojects } from "../Data/ProjectData"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./Button2";

const Project = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <main className="mx-auto px-4 md:px-10 lg:px-20 py-10">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className=" flex flex-col justify-center items-center gap-4 p-6 ">
                    <h1 className="mb-8 text-4xl font-bold">Projects</h1>
                    {
                        myprojects.map((project) =>
                        (
                            <div key={project?.id} className="flex w-full gap-4 rounded-lg border p-6 bg-background/80">
                                <div className="w-full flex flex-col justify-start items-center gap-5">
                                    <div className="w-full pl-2 py-1 flex items-center gap-2">
                                        <div className="font-bold text-xl ">{project.id}</div>
                                        <h1 className=" font-bold text-xl">{project.name}</h1>

                                    </div>
                                    <ul className="mt-4 list-disc pl-6">
                                        {
                                            project.description.map((task, index) => (
                                                <li key={index}>{task}</li>
                                            ))
                                        }
                                    </ul>
                                    <div className="flex flex-wrap justify-start items-start w-full gap-2 mx-6 my-2">
                                        {project.usedTech.map((skill, index) => (<span
                                            key={index}
                                            className="rounded-full bg-secondary px-3 py-1 text-sm"
                                        >
                                            {skill}
                                        </span>))}
                                    </div>
                                    <div className="w-full flex flex-col gap-2">
                                    <Button asChild className="flex ">
                                        <Link to={project.link} target="_blank" >Go to Website</Link>
                                    </Button>
                                    <Button asChild className="flex ">
                                        <Link to={project.codelink} target="_blank" >Visit to Code</Link>
                                    </Button>
                                    </div>

                                </div>
                                <div className=" hidden md:flex">
                                    <img src={`${project.image}`} alt="projectimage" width={800} className="aspect-[4/3] rounded-lg my-5" />
                                </div>

                            </div>
                        )
                        )
                    }
                    <Button asChild className="flex mt-4">
                        <Link to="https://github.com/shashank2314" target='_blank' >Go to my Github</Link>
                    </Button>
                </div>
            </motion.div>
        </main>
    )

}

export default Project;