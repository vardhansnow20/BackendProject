const express = require('express')
const {
    createWorkout,
    getWorkout,
    singleWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutscontroller')


const router = express.Router()


router.get('/',getWorkout)

router.get('/:id',singleWorkout)

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports = router
