import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import { Contact_api } from '../services/apis';
import { apiConnector } from '../services/apiconnector';
import { Mail, MapPin, Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button } from './Button2';
function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();
    const { ref: setRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [loading, setloading] = useState(false);

    const formHandler = async (data) => {
        setloading(true);
        try {
            // console.log("url",Contact_api.CONTACT_US);
            await apiConnector(
                "POST",
                Contact_api.CONTACT_US,
                data
            );
            setloading(false);
            toast.success("Message sent successfully ")
        }
        catch (err) {
            console.log(err.message);
            setloading(false);
            toast.error("Something went wrong");
        }
    }
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                name: "",
                message: "",
                subject: "",
            })
        }
    }, [reset, isSubmitSuccessful])
    return (
        <main className="container mx-auto px-10 py-10">
            <motion.div
                ref={setRef}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className=" flex flex-col justify-center items-center gap-4">
                    <div className=' font-bold text-4xl mb-4'>Let's talk</div>
                    <div className="flex gap-10 md:flex-row flex-col justify-center w-full items-start ">
                        <div className="rounded-lg border w-full p-6 bg-background/80">
                            <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5" />
                                    <span><Link to="mailto:2021kucp1137@iiitkota.ac.in" target="_blank">Email</Link></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Linkedin className="h-5 w-5" />
                                    <span><Link to="https://www.linkedin.com/in/shashank-kumar-62a2b1260/" target="_blank">Linkedin</Link></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5" />
                                    <span>IIIT Kota, Rajasthan, India</span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border w-full p-6 bg-background/80">
                            <form onSubmit={handleSubmit((data) => formHandler(data))} className="space-y-4">
                                <div>
                                    <label htmlFor='name' className='text-xl' > Name<sup>*</sup></label>
                                    <input type='text' name='name' id='name' className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' placeholder='Enter your name'  {...register("name", { required: true })} />
                                    {
                                        errors.name && (
                                            <span className='form-error'>
                                                Please enter your Name.
                                            </span>
                                        )
                                    }
                                </div>
                                <div >
                                    <label htmlFor='email' className='text-xl'> Email address<sup>*</sup></label>
                                    <input type='email' name='email' id='email' className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' placeholder='Enter your email'  {...register("email", { required: true })} />
                                    {
                                        errors.email && (
                                            <span className='form-error'>
                                                Please enter your email address.
                                            </span>
                                        )
                                    }
                                </div>

                                <div>
                                    <label htmlFor='subject' className='text-xl'> Subject<sup>*</sup></label>
                                    <input type='text' name='subject' id='subject' className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' placeholder='Enter Subject' {...register("subject", { required: true })} />
                                    {
                                        errors.subject && (
                                            <span className='form-error'>
                                                Please enter subject.
                                            </span>
                                        )
                                    }
                                </div>
                                <div >
                                    <label htmlFor='message' className='text-xl'> Message<sup>*</sup></label>
                                    <textarea name='message' id='message' className='flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' placeholder='Enter your message here' {...register("message", { required: true })} />
                                    {
                                        errors.message && (
                                            <span className='form-error'>
                                                Please enter your message.
                                            </span>
                                        )
                                    }
                                </div>
                                <Button
                                    aschild
                                    disabled={loading}
                                    type='submit'
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div >
            </motion.div>
        </main>
    );
}
export default Contact;