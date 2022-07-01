const express = require('express')
const router = express.Router();
const { getGoals } = require('../controller/goalController')

router.get('/', getGoals)
router.post('/', (req , res)=>{
    res.json({message:'set goal'})
})
router.put('/:id', (req , res)=>{
    res.json({message:`ipdate goal ${req.params.id}`})
})
router.delete('/:id', (req , res)=>{
    res.json({message:`delet goal ${req.params.id}`})
})

module.exports = router ;