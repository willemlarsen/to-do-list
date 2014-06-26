describe('toDoList', function() {
  describe('addHomeTask', function() {
    it('adds a task to a list of home to-dos', function(){
      addHomeTask('sweep floor').should.equal('sweep floor');
    });
    
  });
});