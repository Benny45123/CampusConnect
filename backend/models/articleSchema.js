const mongoose=require('mongoose');

const blockSchema=new mongoose.Schema({
    type:{
        type:String,
        enum:['heading','paragraph','image','code','quote'],
        required:true
    },
    data: mongoose.Schema.Types.Mixed

},{_id:false});

const articleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:200
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    content:{
        type:[blockSchema],
        required:true
    },
    coverImageUrl:{
        type:String
    },
    tags:[{
        type : String,
        lowercase : true,
    }],
    status:{
        type:String,
        enum:['draft','published'],
        default:'draft',
    },
    readTime: Number,
    claps :{
        type: Number,
        default:0
    },

},{timestamps:true});
const Article=mongoose.model('Article',articleSchema);
module.exports={Article};