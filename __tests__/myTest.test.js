/* eslint-disable prettier/prettier */
var app = process.env.BROWSERSTACK_APP_ID;

var wd = require('wd');
var assert = require('assert');
var asserters = wd.asserters;
var capabilities = {
  'device' : 'Google Pixel 3',
  'os_version' : '9.0',
};

Object.assign(capabilities, {
  'browserstack.user' : 'johncarlodeleon1',
  'browserstack.key' : 'EPnWvRvF8sxcKEC9xpat',
  'project': 'My First Project',
  'build' : 'My First Build',
  'name': 'Bstack-[Node] Sample Test',
  'app' : app,
});

const driver = wd.promiseRemote('https://johncarlodeleon1:EPnWvRvF8sxcKEC9xpat@hub-cloud.browserstack.com/wd/hub');

// driver
//   .init(capabilities)
//   //Write your code here
//   .fin(function() { return driver.quit(); })
//   .done();

beforeAll( () => {
  driver.init(capabilities);
  driver.sleep(3000);
}); // Sometime for the app to load

test('Correct Input',  () => {
  console.log(driver);
  let element =  driver.elementByAccessibilityId('nameInput');
  element.type('Carlo');
  driver.elementByAccessibilityId('saveName').click();
});

test('Wrong Input',  () => {
  let element =  driver.elementByAccessibilityId('nameInput');
  element.type('Carlo123');
  driver.elementByAccessibilityId('saveName').click();
});

test('Empty Input',  () => {
  let element =  driver.elementByAccessibilityId('nameInput');
  element.type('');
  driver.elementByAccessibilityId('saveName').click();
});

