/* eslint-disable prettier/prettier */
var wd = require('wd');
var assert = require('assert');
var asserters = wd.asserters;
var capabilities = {
  device: 'Google Pixel 3',
  os_version: '9.0',
};

Object.assign(capabilities, {
  'browserstack.user': 'johncarlodeleon1',
  'browserstack.key': 'EPnWvRvF8sxcKEC9xpat',
  project: 'My First Project',
  build: 'My First Build',
  name: 'Bstack-[Node] Sample Test',
  app: 'bs://c700ce60cf13ae8ed97705a55b8e022f13c5827c',
});

var driver = wd.promiseRemote('http://hub-cloud.browserstack.com/wd/hub');

driver
  .init(capabilities)
  .then(function () {
    return driver.waitForElementById(
      'Search Wikipedia',
      asserters.isDisplayed && asserters.isEnabled,
      30000,
    );
  })
  .then(function (searchElement) {
    return searchElement.click();
  })
  .then(function () {
    return driver.waitForElementById(
      'org.wikipedia.alpha:id/search_src_text',
      asserters.isDisplayed && asserters.isEnabled,
      30000,
    );
  })
  .then(function (searchInput) {
    return searchInput.sendKeys('BrowserStack');
  })
  .then(function () {
    return driver.elementsByClassName('android.widget.TextView');
  })
  .then(function (search_results) {
    assert(search_results.length > 0);
  })
  .fin(function () {
    return driver.quit();
  })
  .done();
