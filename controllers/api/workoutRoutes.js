const router = require('express').Router();
const { Workout } = require('../../models');


// 1 parameter
router.get('/muscle/:exerciseMuscle', async (req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${req.params.exerciseMuscle}`, {
            method: "GET",
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });

        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

router.get('/difficulty/:difficultyLevel', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?difficulty=${req.params.difficultyLevel}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

router.get('/type/:exerciseType', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?type=${req.params.exerciseType}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

router.get('/name/:exerciseName', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?name=${req.params.exerciseName}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

// 2 parameters
router.get('/name/:exerciseName/type/:exerciseType', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?name=${req.params.exerciseName}&type=${req.params.exerciseType}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

router.get('/name/:exerciseName/muscle/:exerciseMuscle', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?name=${req.params.exerciseName}&muscle=${req.params.exerciseMuscle}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

router.get('/name/:exerciseName/difficulty/:exerciseDifficulty', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?name=${req.params.exerciseName}&difficulty=${req.params.exerciseDifficulty}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

router.get('/type/:exerciseType/muscle/:exerciseMuscle', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?type=${req.params.exerciseType}&muscle=${req.params.exerciseMuscle}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

router.get('/type/:exerciseType/difficulty/:exerciseDifficulty', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?type=${req.params.exerciseType}&difficulty=${req.params.exerciseDifficulty}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

router.get('/muscle/:exerciseMuscle/difficulty/:exerciseDifficulty', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${req.params.exerciseMuscle}&difficulty=${req.params.exerciseDifficulty}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

// 3 parameters 
router.get('/name/:exerciseName/type/:exerciseType/muscle/:exerciseMuscle', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?name=${req.params.exerciseName}&type=${req.params.exerciseType}&muscle=${req.params.exerciseMuscle}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

router.get('/name/:exerciseName/type/:exerciseType/difficulty/:exerciseDifficulty', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?name=${req.params.exerciseName}&type=${req.params.exerciseType}&difficulty=${req.params.exerciseDifficulty}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

router.get('/name/:exerciseName/muscle/:exerciseMuscle/difficulty/:exerciseDifficulty', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?name=${req.params.exerciseName}&muscle=${req.params.exerciseMuscle}&difficulty=${req.params.exerciseDifficulty}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

router.get('/type/:exerciseType/muscle/:exerciseMuscle/difficulty/:exerciseDifficulty', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?type=${req.params.exerciseType}&muscle=${req.params.exerciseMuscle}&difficulty=${req.params.exerciseDifficulty}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

// all 4 params
router.get('/name/:exerciseName/type/:exerciseType/muscle/:exerciseMuscle/difficulty/:exerciseDifficulty', async(req, res) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?name=${req.params.exerciseName}&type=${req.params.exerciseType}&muscle=${req.params.exerciseMuscle}&difficulty=${req.params.exerciseDifficulty}` , {
            method: 'GET',
            headers: {
                'X-Api-Key': process.env.API_KEY
            }
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.log('Error:', error);
    }
})

module.exports = router