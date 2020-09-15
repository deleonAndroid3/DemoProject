/* eslint-disable prettier/prettier */

var wd = require('wd');
var assert = require('assert');
var asserters = wd.asserters;

var userName = process.env.BROWSERSTACK_USERNAME;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
var app = process.env.BROWSERSTACK_APP_ID;

var capabilities = {
  'browserstack.user' : userName,
  'browserstack.key' : accessKey,
  'app' : app,
  'project': 'Demo Project',
  'device' : 'Google Pixel 3',
  'build' : 'React Native Demo',
  'browserstack.debug' : true,
  'name': 'Unit Test',
};

const driver = wd.promiseRemote('https://johncarlodeleon1:EPnWvRvF8sxcKEC9xpat@hub-cloud.browserstack.com/wd/hub');

// driver.init(capabilities)
// .then(function(){
//   return driver.elementByAccessibilityId('nameInput');
// })
// .then(function(){
//   return driver.elementByAccessibilityId('saveName');
// })
// .fin(function(){return driver.quit(); })
// .done();

// beforeAll(async () => {
//     await driver.init(capabilities);
//     await driver.sleep(3000);
//   }); // Sometime for the app to load

// test('Correct Input', async () => {
//     const element = await driver.elementByAccessibilityId('nameInput');
//     await element.sendKeys('Carlo');
//     await driver.elementByAccessibilityId('saveName').click();
//   });

// test('Wrong Input', async () => {
//     const element = await driver.elementByAccessibilityId('nameInput');
//     await element.sendKeys('Carlo123');
//     await driver.elementByAccessibilityId('saveName').click();
//   });

// test('Empty Input', async () => {
//     const element = await driver.elementByAccessibilityId('nameInput');
//     await element.sendKeys('');
//     await driver.elementByAccessibilityId('saveName').click();
//   });

  describe('Demo Test', function() {

    beforeEach(async function() {await driver.init(capabilities);});

    it('should input correct value',async function() {
      const element = await driver.elementByAccessibilityId('nameInput');
      await element.sendKeys('Carlo');
      await driver.elementByAccessibilityId('saveName').click();
    });

    it('should input wrong value',async function() {
      const element = await driver.elementByAccessibilityId('nameInput');
      await element.sendKeys('Carlo123');
      await driver.elementByAccessibilityId('saveName').click();
    });
  });
