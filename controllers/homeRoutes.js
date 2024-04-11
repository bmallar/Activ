const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("LandingPage", {
        logged_in: req.session.logged_in
    })
});

router.get('/profile', (req, res) => {
    res.render('Profile', {
        logged_in: req.session.logged_in
    })
});

router.get("/workoutpicker", (req, res)=>{
    res.render("WorkoutPicker", {
        logged_in: req.session.logged_in
    })
})

module.exports = router;