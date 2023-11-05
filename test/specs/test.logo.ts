import { expect } from '@wdio/globals'
import allureReporter from '@wdio/allure-reporter'
import GooglePage from '../pages/google.page.js'
import HomePage from '../pages/home.page.js'

describe('Elfie Application', () => {
    it('should display elfie logo on home page', async () => {
        allureReporter.addStep('Open the Google page')
        await GooglePage.open()

        allureReporter.addStep('Search for "Elfie"')
        await GooglePage.search('Elfie')

        allureReporter.addStep('Click on the first search result')
        await GooglePage.clickFirstResult()

        allureReporter.addStep('Expect the elfie logo to be displayed on the home page')
        await expect(HomePage.logo).toBeDisplayed()
    })
})

