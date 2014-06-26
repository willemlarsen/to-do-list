var TaskDomain = {};

var Home = Object.create(TaskDomain);
Home.name = 'Home';
Home.taskList = [];



addHomeTask = function(task) {
    Home.taskList.push(task);
    var listLength = Home.taskList.length;
    return Home.taskList[listLength - 1];
};

var listName;

var titleToDoListSelection = function() {
    listName = Home.name;
    $('#domain').text(listName);
};

$(document).ready(function() {
  event.preventDefault();

  titleToDoListSelection();
  
  addNewTaskToSelectedList();
  $('form#add-new-task').submit(function(event) {
    var inputtedTask = $('input.task-description').val();

    Home.taskList.push(inputtedTask);
    
    $('.tasks').append('<li>' + inputtedTask + '</li>');

    
  });
});
