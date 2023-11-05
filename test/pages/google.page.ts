import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GooglePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get searchBox() {
        return $('textarea[name="q"]');
    }

    public get firstResult() {
        return $('(//div[@class="v7jaNc ynAwRc MBeuO q8U8x oewGkc LeUQr htnRc"])[1]');
    }

    /**
     * Perform a search using the specified keyword.
     * 
     * @param {string} keyword - The keyword to search for.
     */
    public async search(keyword: string) {
        // Set the value of the search box to the specified keyword
        await this.searchBox.setValue(keyword);

        // Simulate pressing the Enter key on the keyboard
        await browser.keys('Enter');
    }

    /**
     * Clicks on the first search result.
     */
    public async clickFirstResult() {
        await this.firstResult.click();
    }

    /**
     * Opens the Google homepage.
     */
    public open() {
        return browser.url('https://www.google.com/');
    }
}

export default new GooglePage();
