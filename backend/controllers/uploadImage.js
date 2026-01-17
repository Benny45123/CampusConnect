const cloudinary = require('cloudinary').v2;
require('dotenv').config();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    secure:true,
});
const uploadImage=async(req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({message:"No file uploaded"});
        }
        const filePath=req.file.path;
        const result=await cloudinary.uploader.upload(filePath,{
            folder:'article_images',
            resource_type:'image'
        });
        res.status(200).json({imageUrl:result.secure_url});
    }
    catch(error){
        console.error("Error uploading image to Cloudinary:",error);
        res.status(500).json({message:"Image upload failed"});
    }
}
module.exports={uploadImage};