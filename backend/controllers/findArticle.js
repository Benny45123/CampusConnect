const {Article} = require('../models/articleSchema');


const findArticle = async (req, res) => {
    try{
        const page=parseInt(req.query.page)-1 || 0;
        const limit=parseInt(req.query.limit) || 5;
        const keyword=req.query.q || '';
        const tagFilter=req.query.tag || '';
        const sortType = req.query.sort || 'newest';
        let sortOptions={};
        if (sortType==='newest'){
            sortOptions={createdAt:-1};
        } 
        else if(sortType==='oldest'){
            sortOptions={createdAt:1};
        }
        else{
            sortOptions={claps:-1,createdAt:-1};
        }
        if(keyword.trim()==='' && tagFilter.trim()===''){
            return res.status(400).json({message:"Please provide a search keyword or tag filter"});
        }
        let query={status:'published',
            $or:[
                {title: {$regex: keyword, $options: 'i'}},
                {tags: {$regex: keyword, $options: 'i'}},
                {slug: {$regex: keyword, $options: 'i'}},
                {content: {text:{$elemMatch: {type:'paragraph', 'data.text': {$regex: keyword, $options: 'i'}}}}}]
        };
        if(tagFilter){
            query.tags=tagFilter.toLowerCase();
        }
        const articles = await Article.find(query).select('title coverImageUrl tags readTime claps createdAt author').sort(sortOptions).skip(page * limit).limit(limit).populate('author','username bio profilePictureUrl').lean();
        const totalArticles=await Article.countDocuments(query);
        res.status(200).json({
            page:page+1,
            limit,
            totalArticles,
            totalPages:Math.ceil(totalArticles/limit),
            articles
        })

    }
    catch (error) {
        console.error("Error finding article:", error);
        res.status(500).json({ message: "Error finding article" });
    }
}
module.exports = { findArticle };