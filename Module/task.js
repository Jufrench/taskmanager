let Task = function(data) {
  this.name = data.name;
  this.completed = false;
}

Task.prototype.complete = function () {
  console.log('Completing task: ' + this.name);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log('Saving Task: ' + this.name);
};

let task1 = new Task('Study');

module.exports = Task;
