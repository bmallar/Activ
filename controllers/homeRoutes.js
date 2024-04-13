const router = require('express').Router();
const { Workout, User } = require('../models')

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

router.get("/profile/:id", async (req, res)=>{
    const userData = await User.findByPk(req.params.id).catch((err) => {
        res.json(err);
    });
    const user = userData.get({ plain: true })
    res.render("Profile", {
        user,
        logged_in: req.session.logged_in
    })
});

router.get("/exercisepicker", (req, res)=>{
    res.render("ExercisePicker", {
        logged_in: req.session.logged_in
    })
});

router.get("/timeline", async (req, res)=>{
    const workoutData = await Workout.findAll().catch((err) =>  {
        res.json(err);
    });
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));
    res.render("CommunityFeed", {
        workouts,
        logged_in: req.session.logged_in
    })
});

router.get("/userlist", async (req, res)=>{
    const userData = await User.findAll().catch((err) => {
        res.json(err);
    });
    const users = userData.map((user) => user.get({ plain: true }));
    res.render("UserList", {
        users,
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

router.get("/premadeworkouts", (req, res)=>{
    res.render("PremadeWorkout", {
        logged_in: req.session.logged_in
    })
});

module.exports = router;