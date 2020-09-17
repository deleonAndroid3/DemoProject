/* eslint-disable prettier/prettier */

import wd from 'wd';

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

beforeAll(async () => {
  await driver.init(capabilities);
  await driver.sleep(3000);
}); // Sometime for the app to load

test('Correct Input', async () => {
  // let element = await driver.elementByAccessibilityId('nameInput');
  // await element.type('Carlo');
  await driver.elementByAccessibilityId('saveName').click();
});

test('Wrong Input', async () => {
  // let element = await driver.elementByAccessibilityId('nameInput');
  // await element.type('Carlo123');
  await driver.elementByAccessibilityId('saveName1').click();
});

test('Empty Input', async () => {
  // let element = await driver.elementByAccessibilityId('nameInput');
  // await element.type('');
  await driver.elementByAccessibilityId('saveName2').click();
});

