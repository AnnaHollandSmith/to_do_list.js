var expect = require('chai').expect;
var Task = require('../lib/models/task.js').Task;

describe('Task', function() {
  var task;

  beforeEach(function() {
    task = new Task('phone grandma');
  });

  it('should store a task when constructed', function() {
    expect(task.get()).to.equal('phone grandma');
  });

  it('should return a boolean', function() {
    expect(task.status()).to.be.a('boolean');
  });

  it('should be able to mark complete', function() {
    task.finish();
    expect(task.status()).to.equal(true);
  });

});
