import { chromium, test, expect } from '@playwright/test';

test('Assignment 2.1', async ({ page }) => {

//Launch the application
await page.goto('https://demoqa.com/automation-practice-form');

//page load
await page.waitForLoadState('load');

// Enter First name and Last name
await page.fill('input[placeholder="First Name"]', 'Mounika');
await page.fill('input[placeholder="Last Name"]', 'Mannava');

//Enter email
await page.fill('input[id="userEmail"]','mannavamounika7@gmail.com');

//select Gender
await page.locator('label[for="gender-radio-1"]').click({ force: true });


// Enter mobile number
await page.fill('input[placeholder="Mobile Number"]', '8165348297');

//Select DOB (1-Feb-1991)
await page.fill('input[Id="dateOfBirthInput"]', '01 Feb 1991');

//Search and Select Computer Science and English
await page.fill('#subjectsInput', 'Computer Science');
await page.keyboard.press('Enter');

await page.fill('#subjectsInput', 'English');
await page.keyboard.press('Enter');

//Select Hobbies as Sports and Reading
await page.locator('label[for="hobbies-checkbox-1"]').click({ force: true });
await page.locator('label[for="hobbies-checkbox-2"]').click({ force: true });

//Upload photo
await page.setInputFiles('#uploadPicture', 'files/download.jpg');

//Submit Details
await page.click('#submit', { force: true });

});

