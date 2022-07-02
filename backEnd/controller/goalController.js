const asyncHandler = require('express-async-handler');

const getGoals=asyncHandler( async (req,res)=>{
    res.status(200).json({message:'get Goal'})
})

const setGoals =asyncHandler(async (req , res)=>{
    if (!req.body.text){
        res.status(400)
    throw new console.error('please inter some text');
    }
    res.status(200).json({message:'set goal'})

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