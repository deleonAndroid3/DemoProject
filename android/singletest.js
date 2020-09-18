/* eslint-disable prettier/prettier */
var wd = require('wd');
var assert = require('assert');
var asserters = wd.asserters;

var app = process.env.BROWSERSTACK_APP_ID;

var desiredCaps = {
  'browserstack.user': 'johncarlodeleon1',
  'browserstack.key': 'EPnWvRvF8sxcKEC9xpat',
  'automationName': 'Appium',
  build: 'Node Android',
  name: 'single_test',
  device: 'Google Pixel 3',
  app: app,
  'browserstack.debug': true,
//   'browserstack.local': true,
};
var driver = wd.promiseRemote('http://hub-cloud.browserstack.com/wd/hub');
let contexts =  driver.contexts();

driver
  .init(desiredCaps)
  .contexts(contexts[1])
  .then(function () {
    return driver.waitForElementByAccessibilityId(
      'saveName',
      asserters.isDisplayed && asserters.isEnabled,
      30000,
    );
  })
  .then(function (saveInput) {
    return saveInput.click();
  })
  .then(function () {
    return driver.waitForElementByAccessibilityId(
      'nameInput',
      asserters.isDisplayed && asserters.isEnabled,
      30000,
    );
  })
  .then(function (Input) {
    return Input.sendKeys('BrowserStack');
  })
  .then(function () {
    return driver.waitForElementByAccessibilityId(
      'nameInput',
      asserters.isDisplayed && asserters.isEnabled,
      30000,
    );
  })
  .fin(function () {
    return driver.quit();
  })
  .done();
