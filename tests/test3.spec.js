import {test , expect} from '@playwright/test' ;

test("Orange demo" , async ({page})=>{

    page.setDefaultTimeout(90000);

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login" , { waitUntil: 'commit' });
    
    await page.waitForSelector('input[name="username"]', { timeout: 60000 });

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123");

    await page.getByRole("button" , {name: "Login"}).click();

    await page.waitForLoadState("networkidle");

    await page.getByRole("link" , {name: "Admin"}).click();

    await page.waitForTimeout(8000);

    await page.getByRole("button" , {name: " Add "}).click();

    await page.waitForLoadState("networkidle");

    await page.locator(".oxd-select-text-input").first().click();

    await page.getByRole("option" , {name:"Admin"}).click();

    await page.locator(".oxd-select-wrapper").last().click();

    await page.getByRole("option" , {name:"Enabled"}).click();

    //await page.getByPlaceholder("Type for hints...").pressSequentially("john");
    //await page.getByText("joker john selvam").click();

    await page.getByPlaceholder("Type for hints...").fill("joker john selvam");

    await page.locator('input[type="text"]').fill('Rohini');

    await page.locator('input[type="password"]').fill('test@123');

    await page.getByLabel('Confirm Password').fill('test@123');

    await page.getByRole("button" , {name: " Save "}).click();
    
})