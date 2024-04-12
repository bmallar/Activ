const router = require('express').Router();
const Workout = require('../models/Workout')

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

router.get("/exercisepicker", (req, res)=>{
    res.render("ExercisePicker", {
        logged_in: req.session.logged_in
    })
});

router.get("/timeline", (req, res)=>{
    res.render("CommunityFeed", {
        logged_in: req.session.logged_in
    })
});

router.get("/friends", (req, res)=>{
    res.render("FriendsList", {
        logged_in: req.session.logged_in
    })
});

router.get("/history", async (req, res)=>{
    const workoutData = await Workout.findAll().catch((err) =>  {
        res.json(err);
    });
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));
    res.render("History", {
        workouts,
        logged_in: req.session.logged_in
    })
});

module.exports = router;