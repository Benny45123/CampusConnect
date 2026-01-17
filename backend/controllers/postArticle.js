const Article=require('../models/articleSchema');
const slugify=require('slugify');
const postArticle=async (req,res)=>{
    try{
        const {title,content,coverImageUrl,tags,status}=req.body;
        const slug=slugify(title,{lower:true,strict:true});
        const readTime=Math.ceil(content.reduce((acc,block)=>{
            if(block.type==='paragraph'){
                const words=block.data.text.split(' ').length;
                return acc+words;
            }
            return acc;
        },0)/200);
        const article=await Article.create({
            title,
            slug,
            author:req.user.userId,
            content,
            coverImageUrl,
            tags,
            status,
            readTime
        });
        res.status(201).json({message:"Article posted successfully",article});
    }
    catch(error){
        console.error("Error posting article:",error);
        res.status(500).json({message:"Error posting article"});
    }
}
module.exports={postArticle};