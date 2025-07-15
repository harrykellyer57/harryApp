import { Driver } from '../../../webdriver/driver';

class SettingsPage {
  constructor(private readonly driver: Driver) {}

  async checkPageIsLoaded(): Promise<void> {
    await this.driver.waitForSelector('h3.settings-page__header__title', 'Settings page');
  }

  async clickAdvancedTab(): Promise<void> {
    await this.driver.clickElement('.tab-bar__tab__content__title', 'Advanced');
  }

  async fillSearchSettingsInput(text: string): Promise<void> {
    await this.driver.fill('#search-settings', text);
  }

  // ... (other methods remain the same)
}

export default SettingsPage;
