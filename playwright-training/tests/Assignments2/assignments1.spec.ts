import { test, expect } from '@playwright/test';

test('Assignment 1.1', async ({ page }) => {

//Launch the application
await page.goto('https://parabank.parasoft.com/parabank/index.htm');

// 2. Verify logo is displayed
const logo = page.locator('img[title="ParaBank"]');
await expect(logo).toBeVisible();

// 3. Verify caption text
let caption = page.locator('p.caption');
  await expect(caption).toHaveText('Experience the difference');

  // 4 & 5. Enter invalid username and empty password
  await page.fill('input[name="username"]', 'validUser');
  await page.fill('input[name="password"]', '');

  // 6. Click login button
  await page.click('input[value="Log In"]');

  // 7. Verify error message
  const errorMsg = page.locator('.error');
  await expect(errorMsg).toContainText('Please enter a username and password.');


  // 8. Click Admin Page link
  const adminPageLink = await page.locator('ul.leftmenu > li >a[href="admin.htm"]');
    await adminPageLink.click();
    console.log("Click on the admin page link successfully.")
    
  // 9. Select SOAP radio button
  await page.check('input[value="soap"]');

  // 10 & 11. Scroll and select "Web Service" from dropdown
  const dropdown = page.locator('#loanProvider');
  await dropdown.scrollIntoViewIfNeeded();
  await dropdown.selectOption('ws');

  // 12. Click Submit
  await page.click('input[value="Submit"]');

  // 13. Validate success message
  const successMsg = page.locator('#rightPanel');
  await expect(successMsg).toContainText('Settings saved');

  // 14. Click Services link
  await page.click('a[href*="services.htm"]');

  // 15. Wait for services page
  await page.waitForLoadState('networkidle');

  // 16. Scroll to Bookstore services table
  const table = page.locator('table');
  await table.scrollIntoViewIfNeeded();

  // 17. Get total rows
  const rows = table.locator('tr');
  const rowCount = await rows.count();
  console.log('Total Rows:', rowCount);

  // 18. Get total columns (from first row)
  const columns = rows.first().locator('th, td');
  const colCount = await columns.count();
  console.log('Total Columns:', colCount);

  // 19. Print table data
  for (let i = 0; i < rowCount; i++) {
    const cells = rows.nth(i).locator('th, td');
    const cellCount = await cells.count();

    let rowData: string[] = [];
    for (let j = 0; j < cellCount; j++) {
      rowData.push(await cells.nth(j).innerText());
    }

    console.log(`Row ${i + 1}:`, rowData);
  }

});
