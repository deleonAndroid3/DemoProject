/* eslint-disable prettier/prettier */
import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: 'C:/Users/Carlo/Documents/1.Projects/React Native/DemoProject/android/app/build/outputs/apk/debug/app-debug.apk',
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(3000);
  }); // Sometime for the app to load

test('Correct Input', async () => {
    let element = await driver.elementByAccessibilityId('nameInput');
    await element.type('Carlo');
    await driver.elementByAccessibilityId('saveName').click();
  });

test('Wrong Input', async () => {
    let element = await driver.elementByAccessibilityId('nameInput');
    await element.type('Carlo123');
    await driver.elementByAccessibilityId('saveName1').click();
  });

test('Empty Input', async () => {
    let element = await driver.elementByAccessibilityId('nameInput');
    await element.type('');
    await driver.elementByAccessibilityId('saveName2').click();
  });
