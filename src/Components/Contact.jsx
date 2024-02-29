import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Contact_api } from '../services/apis';
import { apiConnector } from '../services/apiconnector';
import toast from 'react-hot-toast';
function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors , isSubmitSuccessful },
    } = useForm();

    const [loading,setloading] = useState(false);

    const formHandler = async(data) => {
        setloading(true);
        try{
            // console.log("url",Contact_api.CONTACT_US);
            await apiConnector(
                "POST",
                Contact_api.CONTACT_US,
                data
            );
            setloading(false);
            toast.success("Message sent successfully ")
        }
        catch(err){
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
        <div className='flex justify-between flex-col items-center w-11/12 lg:w-9/12 gap-5'>
            <div className=' font-bold text-3xl'>Let's talk</div>

            <form onSubmit={handleSubmit((data) => formHandler(data))} className='flex flex-col justify-center items-center gap-8 w-full shadow-[-35px_-35px_60px_-15px_rgba(0,0,0,0.3)] mb-10 bg-gray-100 rounded-lg py-10 px-12'>
                <div className='form-div-style'>
                    <label htmlFor='name' className='lable-style' > Name<sup>*</sup></label>
                    <input type='text' name='name' id='name' placeholder='Enter your name' className='form-style' {...register("name", { required: true })} />
                    {
                        errors.name && (
                            <span className='form-error'>
                                Please enter your Name.
                            </span>
                        )
                    }
                </div>
                <div className='form-div-style'>
                    <label htmlFor='email' className='lable-style' > Email address<sup>*</sup></label>
                    <input type='email' name='email' id='email' placeholder='Enter your email' className='form-style' {...register("email", { required: true })} />
                    {
                        errors.email && (
                            <span className='form-error'>
                                Please enter your email address.
                            </span>
                        )
                    }
                </div>

                <div className='form-div-style'>
                    <label htmlFor='subject' className='lable-style' > Subject<sup>*</sup></label>
                    <input type='text' name='subject' id='subject' placeholder='Enter Subject' className='form-style' {...register("subject", { required: true })} />
                    {
                        errors.subject && (
                            <span className='form-error'>
                                Please enter subject.
                            </span>
                        )
                    }
                </div>
                <div className='form-div-style'>
                    <label htmlFor='message' className='lable-style' > Message<sup>*</sup></label>
                    <textarea name='subject' id='subject' placeholder='Enter your message here' className='form-style' {...register("message", { required: true })} />
                    {
                        errors.message && (
                            <span className='form-error'>
                                Please enter your message.
                            </span>
                        )
                    }
                </div>
                <button
                    disabled={loading}
                    type='submit'
                    className={`rounded-md bg-blue-700 px-6 py-3 text-center text-[18px] font-semibold text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
                        
           ${!loading &&
                        "transition-all duration-200 hover:scale-95 hover:shadow-none"
                        }  disabled:bg-blue-400 sm:text-[16px]`
                    }
                >
                    Send Message
                </button>
            </form>

        </div >
    );
}
export default Contact;