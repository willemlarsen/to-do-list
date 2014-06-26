var TaskDomain = {};

var Home = Object.create(TaskDomain);
Home.name = 'Home';
Home.taskList = [];



addHomeTask = function(task) {
    Home.taskList.push(task);
    var listLength = Home.taskList.length;
    return Home.taskList[listLength - 1];
};

var titleToDoListSelection = function() {
    var listName = Home.name;
    $('#domain').text(listName);
};

$(document).ready(function() {
  event.preventDefault();


  titleToDoListSelection();
  
  // listName.forEach(task) {
  //   $('ul#tasks').append('<li>' + task + '</li>' );
  // }

  $('form#new-task').submit(function(event) {
    inputtedTask = $('input#new-task').val();
    Home.taskList.push(inputtedTask);

    $('ul#tasks').append('<li>' + inputtedTask + '</li>');
  });
});