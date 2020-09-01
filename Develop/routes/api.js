const db = require('../models'); 

module.exports = function(app){
    app.get('/api/workouts', function(req,res){
        db.Workout.find({}).then(function workout(){
            res.json(workout)
        });
    });

    app.put('/api/workouts/:id', function({ body, params }, res){
        db.Workout.findOneAndUpdate(
            { _id: params.id }, 
            { $push: { exercises:body }}).then(function workout(){
                res.json(workout);
            }).catch(function(err){
                res.json(err)
            })
    }); 

    app.post('api/workouts', function(req, res){
        db.Workout.create({}).then(function newWorkout(){
            res.json(newWorkout)
        });
    });
}