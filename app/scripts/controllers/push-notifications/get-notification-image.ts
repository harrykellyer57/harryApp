import browser from 'webextension-polyfill';

export function getNotificationImage() {
  return browser.runtime.getURL('../../images/icon-64.png');
}
