'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;
var ToDo = require('../src/toDo.js').ToDo;


describe('create a to-do', function(){
  var toDo = new ToDo();

  it('can create a to-do list',function(){
    expect(toDo.tasks).to.be.empty;
  });

  it('can add a task to the to-do list', function() {
    toDo.add('Clean Room');
    expect(toDo.tasks).to.include('Clean Room');
    toDo.tasks = [];
  });

  it('returns an HTML unordered list', function() {
    toDo.add('Clean Room');
    toDo.add('Buy Milk');
    expect(toDo.returnList()).to.eql("<li>Clean Room</li><li>Buy Milk</li>");
  });


});
