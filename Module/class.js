// Class structure - just syntactical sugar

'use strict'

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  complete() {
    console.log('Completing task: ' + this.name);
    this.completed = true;
  };

  save() {
    console.log('Saving Task: ' + this.name);
  };

}

let task1 = new Task('Read \'Eloquent JavaScript\'');
let task2 = new Task('Study php');
let task3 = new Task('Listen to Chopin piano concerto');
let task4 = new Task('Save money for Italy');

task1.complete();
task2.save();
task3.save();
task4.save();
