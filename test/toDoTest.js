'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;
var ToDo = require('../src/toDo.js')



describe('create a to-do', function(){
  var toDo = new ToDo();

  it('can instantiate a to-do object',function(){
      expect(toDo).to.be.an.instanceof(ToDo);
    })
    
  it('can create a to-do list',function(){
    expect(toDo.tasks).to.be.empty;

  })

})
