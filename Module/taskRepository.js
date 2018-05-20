let repo = function () {

// Goes to db, pulled out a task, returns task to calling function
// Consider this an API repo
  return {
    get: function (id) {
      console.log('Getting task ' + id);
      return {
        name: 'new task from db';
      }
    }
  }
}

module.exports = repo();
