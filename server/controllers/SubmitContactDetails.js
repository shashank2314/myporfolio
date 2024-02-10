const Contact= require("../models/Contact");

exports.SubmitContactDetails = async(req,res) => {
    try{
        const {
            email,name,subject,message
        } = req.body;
        console.log("Yah1")
        if(!email || !name || !subject || !message){
            res.status(404).json({
                success:false,
                message:"Please fill all fields",
            })
        }
        console.log("Yah2")
        const data = await Contact.create({email,name,subject,message});
        console.log("Yah3")
        res.status(200).json({
            success:true,
            message:"Message Submit successfully",
        })

    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}