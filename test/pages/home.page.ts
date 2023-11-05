import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get menu() {
        return $('div.split-content.header-left > div');
    }

    public get logo() {
        return $('div.app-icon-holder > img');
    }

    public get contentFooter() {
        return $('//div[@class="text-block"]');
    }

    public get consentCookie() {
        return $('#eapps-cookie-consent-34a40912-3430-4a57-a839-1fa7883f30fc > div');
    }

    public get allowCookieBtn() {
        return $('div.jsx-2066041988.eapp-cookie-consent-actions-accept.eapp-cookie-consent-actions-button');
    }

    public get buttonIconTop() {
        return $('div.split-content.header-left > div > div > div > div.header-menu-button-icon-top');
    }

    public get buttonIconBottom() {
        return $('div.split-content.header-left > div > div > div > div.header-menu-button-icon-bottom');
    }

    /**
     * Open the menu.
     */
    public async openMenu() {
        await this.menu.click();
    }

    /**
     * Close the menu.
     */
    public async closeMenu() {
        // Click on the menu to close it
        await this.menu.click();
    }

    /**
     * Clicks on the allow cookie button.
     */
    public async allowCookie() {
        await this.allowCookieBtn.click();
    }

    /**
     * Scrolls the page to the footer element.
     */
    public async scrollToFooter() {
        await this.contentFooter.scrollIntoView();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('');
    }
}

export default new HomePage();
