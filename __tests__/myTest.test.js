/* eslint-disable prettier/prettier */

var wd = require('wd');


var app = process.env.BROWSERSTACK_APP_ID;

var capabilities = {
  'browserstack.user' : 'johncarlodeleon1',
  'browserstack.key' : 'EPnWvRvF8sxcKEC9xpat',
  'app' : app,
  'project': 'Demo Project',
  'device' : 'Google Pixel 3',
  'build' : 'React Native Demo',
  'browserstack.debug' : true,
  'name': 'Unit Test',
};

const driver = wd.promiseRemote('https://johncarlodeleon1:EPnWvRvF8sxcKEC9xpat@hub-cloud.browserstack.com/wd/hub');

beforeAll(() => {
   driver.init(capabilities);
   driver.sleep(3000);
}); // Sometime for the app to load

test('Correct Input',  () => {
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

