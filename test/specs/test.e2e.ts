import { expect } from '@wdio/globals'
import allureReporter from '@wdio/allure-reporter'
import GooglePage from '../pages/google.page.js'
import HomePage from '../pages/home.page.js'

describe('Elfie Application', () => {
    it('should end to end flow successfully', async () => {
        allureReporter.addStep('Open the Google page')
        await GooglePage.open()

        allureReporter.addStep('Search for "Elfie"')
        await GooglePage.search('Elfie')

        allureReporter.addStep('Click on the first search result')
        await GooglePage.clickFirstResult()

        allureReporter.addStep('Expect the elfie logo to be displayed on the home page')
        await expect(HomePage.logo).toBeDisplayed()

        allureReporter.addStep('Open the menu')
        await HomePage.openMenu()

        allureReporter.addStep('Expect the top button icon to be displayed')
        await expect(HomePage.buttonIconTop).toBeDisplayed()

        allureReporter.addStep('Expect the bottom button icon to be displayed')
        await expect(HomePage.buttonIconBottom).toBeDisplayed()

        allureReporter.addStep('Close the menu')
        await HomePage.closeMenu()

        allureReporter.addStep('Expect the consent cookie banner to be displayed')
        await expect(HomePage.consentCookie).toBeDisplayed()

        allureReporter.addStep('Allow the cookie')
        await HomePage.allowCookie()

        allureReporter.addStep('Scroll to the footer')
        await HomePage.scrollToFooter()

        allureReporter.addStep('Expect the footer content to be displayed')
        await expect(HomePage.contentFooter).toBeDisplayed()

        allureReporter.addStep('Expect the footer content to have the text \'Bản quyền © 2023 Elfie Pte. Ltd.\'')
        await expect(HomePage.contentFooter).toHaveText('Bản quyền © 2023 Elfie Pte. Ltd.')
    })
})

