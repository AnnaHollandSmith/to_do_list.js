var chai = require('chai');
var expect = require('chai').expect;
var chaiHtml = require('chai-html');
var sinon = require('sinon');

var List = require('../lib/models/list.js').List;
var Task = require('../lib/models/task.js').Task;

chai.use(chaiHtml);

describe('List', function() {
  var list;

  beforeEach(function() {
    list = new List(Task);
  });

  it('stores a new task', function() {
    list.addItem('call grandma');
    expect(list.items().pop()._task).to.eq('call grandma');
  });

  it('provides an unordered list of all the tasks added', function() {
    list.addItem('call grandma');
    var template = '<ul><li id=\'list_0\'>call grandma<input id="submit" type="submit" onclick="complete(0)" value="&#9989" name="completed"></li></ul>';
    expect(list.toHtml()).to.eq(template);
  });
});
