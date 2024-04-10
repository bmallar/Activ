const router = require('express').Router();
const { Workout } = require('../../models');

router.get('/:exerciseType', async (req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${req.params.exerciseType}`, {
            method: "GET",
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

module.exports = router