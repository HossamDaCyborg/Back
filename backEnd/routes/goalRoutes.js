const express = require('express')
const router = express.Router();
const Fun = require('../controller/goalController')

// router.get('/', Fun.getGoals);

// router.post('/', Fun.setGoals);

// router.put('/:id', Fun.updateGoal);

// router.delete('/:id', Fun.deleteGoal);

router.route('/').get(Fun.getGoals).post(Fun.setGoals);
router.route('/:id').put(Fun.updateGoal).delete(Fun.deleteGoal);

module.exports = router ;