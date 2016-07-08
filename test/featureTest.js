<<<<<<< HEAD
var app = require('http-server').createServer();
var Browser = require('zombie');
var assert = require('assert');

describe('homepage', function() {
  before(function() {
    this.server = app.listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });
  it('should show a title', function() {
    this.browser.assert.text('title', 'To Do List');
  });

  it('should show a list', function() {
    this.browser.assert.text('#tasks-to-do');
  });

  it('should stay on current page after submit is triggered', function(){
    this.browser.pressButton('#submit');
    this.browser.visit('/');
=======
var app = require("http-server").createServer();
var assert = require('assert').assert;
var Browser = require('zombie');
var List = require('../lib/models/list.js').List;
var Task = require('../lib/models/task.js').Task;

describe('title page', function() {
  before(function() {
    server = app.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' });
  });
  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('is findable', function() {
    browser.assert.status(200);
  });

  it('displays a title', function() {
    browser.assert.text('h1', 'To Do List');
  });

  it('adds some todos', function() {
    browser.assert.status(200);
    browser.fill('new_task', 'call grandma');
    browser.pressButton('submit');
    browser.assert.text('li', 'call grandma');
  });

  it('should mark tasks as complete', function() {
    browser.fill('new_task', 'call grandma');
    browser.pressButton('submit');
    browser.pressButton('completed');
    browser.assert.hasClass('li', 'completed');
>>>>>>> 039356faedc8f7bb34040fbfac8c00bd90338ad3
  });
});
