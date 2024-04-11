const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("LandingPage")
});

router.get("/workoutpicker", (req, res)=>{
    
    res.render("WorkoutPicker")
})

module.exports = router;