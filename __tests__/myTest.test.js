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

driver.init(capabilities)
.then(async function(){
  return driver.elementByAccessibilityId('nameInput').type('Carlo');
})
.then(async function(){
  return driver.elementByAccessibilityId('saveName').click( );
})
.fin(function(){return driver.quit(); })
.done();

