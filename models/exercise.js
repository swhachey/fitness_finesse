const mongoose = require("mongoose"
);
const Schema = mongoose.Schema;

const exerciseSchema = new Schema 
({
name: {
    type: String,
    trim: true,
    required: true
    },
type: {
    type: String,
    trim: true,
    required: true
    },
weight: {
    type: Number,
    },
sets: {
    type: Number
    },
reps: {
    type: Number
    },
duration: {
    type: Number,
    required: true
    },
distance: {
    type: Number
    },
});

const Exercise = mongoose.model.apply("Exercise", exerciseSchema);

module.expores = Exercise;