
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Skill } from "../Data/Skill";

export default function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <main className="container px-10 py-10">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            ><div className=" flex flex-col justify-center items-center gap-4 p-6 ">
                    <h1 className="mb-8 text-4xl font-bold">Skills</h1>
                    <div className="grid gap-6 md:grid-cols-2">
                        {Skill.map((skillGroup) => (
                            <div key={skillGroup.category} className="rounded-lg border p-6 bg-background/80">
                                <h2 className="mb-4 text-xl font-semibold">{skillGroup.category}</h2>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full bg-secondary px-3 py-1 text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </main>
    );
}