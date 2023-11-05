# Mobile Automation with WebdriverIO

This repository contains the code base for mobile automation using WebdriverIO. The project follows the Page Object Model (POM) structure, Test-Driven Development (TDD) coding style, supports data-driven testing, and implements Allure reporting.

## Prerequisites

Before you begin, make sure you have the following prerequisites in place:

1. Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).

2. Appium: Install Appium by following the instructions on the [official Appium website](http://appium.io/).

3. Android Emulator: Ensure you have an Android emulator connected to your development environment.

4. WebdriverIO: Install WebdriverIO globally using npm:

   ```bash
   npm init wdio .
   ```

5. Config

    ```typescript
    capabilities: [{
        platformName: 'Android',
        browserName: 'chrome',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2'
    }]
    ```

    ```typescript
    services: [
        ['appium', {
            args: {
                address: '127.0.0.1',
                allowCors: true,
                basePath: '/wd/hub',
                allowInsecure: 'chromedriver_autodownload',
                port: 4723
            }
        }]
    ]
    ```

## Project Structure

The project structure is organized as follows:

- `test/`: Contains test scripts organized using the Page Object Model (POM) structure.
- `data/`: Contains data files for data-driven testing.
- `allure-report/`: Allure report files will be generated in this directory.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/namnh663/elfie-webdriverio.git
   cd elfie-webdriverio
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

## Test Execution

You can run the mobile automation tests with the following command:

```bash
npm run app:e2e
npm run app:logo
npm run app:menu
```

Run command `npm run app:e2e` will execute the e2e script and take a screenshot of the step 8

Run command `npm run app:logo` will take a screenshot of the step 6

Run command `npm run app:menu` will take a screenshot of the step 7

## End-to-End Flow

The automation tests will perform the following end-to-end flow:

1. Use the available Chrome browser for emulator.

2. Open the Chrome app.

3. Navigate to "https://www.google.com/".

4. Search for the keyword "Elfie"

5. Click on the first search result.

6. Verify that the logo is displayed.

7. Click on the hamburger menu and verify that it changes to the "X" button.

8. Scroll to the bottom and verify the text "Copyright 2023 Elfie Pte. Ltd.".

## Allure Reporting

After running the tests, Allure results will be generated in the `allure-results/` directory.

Then run:

```bash
allure generate allure-results && allure open
```

You can open the reports in your web browser to view the test execution results.

![](/data/img/report.png)
