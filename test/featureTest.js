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
    this.browser.assert.text('#tasks-to-do', 'Get milkDo cleaning');
  });

  it('should stay on current page after submit is triggered', function(){
    this.browser.pressButton('#submit');
    this.browser.visit('/');
  });
});
