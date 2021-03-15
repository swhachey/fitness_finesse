const Workout = require("../models/workout");

module.exports = (app) => {
app.get("/api/workouts", (req, res)=> {
Workout.find({})
.then(dbWorkout => {
    res.json(dbWorkout);
})
.catch(err => {
        res.status(400).json(err);
      });
    });

app.get("/api/workouts/range", ({}, res) => {
Workout.find({})
.then(dbWorkout => {
    res.json(dbWorkout);
})
});

app.post("/api/workouts/", (req, res) => {
db.Workout.create(req.body).then(   (dbWorkout) => {
    res.json(dbWorkout);
    })
.catch(err => {
    res.status(400).json(err);
    });
});

app.put("/api/workouts/:id", (req, res) => {
Workout.findByIdAndUpdate(
    {_id: req.params.id}, {exercise: req.body}
)
.then((dbWorkout) => {
    res.json(dbWorkout);
    })
.catch(err => {
    res.status(400).json(err);
    });
});

};
