import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Experiences } from "../Data/Experience";
import { Button } from "./Button2";
import { Link } from "react-router-dom";

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <main className="container mx-auto px-4 py-10">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className=" flex flex-col justify-center items-center gap-4 p-6 ">
                    <h1 className="mb-8 text-4xl font-bold">Experience</h1>
                    {
                        Experiences.map((experience, index) => (
                            <div key={index} className="rounded-lg border p-6 bg-background/80">
                                <div className="flex w-full justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                                        <p className="text-muted-foreground">{experience.company}</p>
                                    </div>
                                    <p className="flex items-center text-lg">{experience.duration}</p>
                                </div>

                                <ul className="mt-4 list-disc pl-6">
                                    {
                                        experience.description.map((task, index) => (
                                            <li key={index}>{task}</li>
                                        ))
                                    }
                                </ul>
                                <div className="flex flex-wrap gap-2 my-4">
                                    {experience.TechStack.map((skill, index) => (<span
                                        key={skill}
                                        className="rounded-full bg-secondary px-3 py-1 text-sm"
                                    >
                                        {skill}
                                    </span>))}
                                </div>
                                <Button asChild className="flex mt-4">
                                    <Link to={experience.Certificate} target="_blank">Certificate</Link>
                                </Button>

                            </div>
                        ))

                    }
                </div>
            </motion.div>
        </main>
    );
}

export default Experience;