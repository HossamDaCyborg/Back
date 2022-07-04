const asyncHandler = require('express-async-handler');

const Goal = require('../model/goalModel');
const Post = require('../model/postModel');

const getGoals=asyncHandler(async(req , res)=>{
if(req.body.goal){
    const goal = await Goal.find();
    res.status(200).json({goal})
}
else if(req.body.post){
    const post =await Post.find();
    res.status(200).json({post})
}
else throw console.error('Bad request')
    
})

const setGoals =asyncHandler(async (req , res)=>{
    if (req.body.text){
        const goal =await Goal.create({
            text : req.body.text
        })
        res.status(200).json(goal)

    }
    else if(req.body.post){
        const post = await Post.create({
            text:'i dont really know'
            ,
            pic:req.body.post
        })
        console.log(JSON.stringify(post))
        res.status(200).json({post})

    }
    else{
        throw console.error('bad req')
    }
})
const updateGoal=asyncHandler( async (req , res)=>{
    res.status(200).json({message:`update goal ${req.params.id}`})
}) 
const deleteGoal=asyncHandler( async (req , res)=>{
    res.status(200).json({message:`delete goal ${req.params.id}`})
} 
)
module.exports ={
    getGoals ,
    setGoals ,
    updateGoal ,
    deleteGoal ,
}