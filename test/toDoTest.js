'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;
var ToDo = require('../src/toDo.js')

describe('create a to-do', function(){
  it('can show a to-do',function(){
      var toDo = new ToDo();
      expect(toDo).to.be.an.instanceof(ToDo);
    })
})
