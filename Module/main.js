let Task = require('./task');
let repo = require('./taskRepository');

let task1 = new Task(Repo.get(1));

let task2 = new Task('Study php');
let task3 = new Task('Listen to Chopin piano concerto');
let task4 = new Task('Save money for Italy');

task1.complete();
task2.save();
task3.save();
task4.save();
