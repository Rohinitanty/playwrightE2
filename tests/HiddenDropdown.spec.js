import{test,expect} from '@playwright/test';
test ("Hidden Dropdown" , async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole(" Login ").click();
    await page.getByRole("PIM").click();
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]").click();
    await page.waitForTimeout(5000);
    const options = await page.$$('//div[@role="listbox"]//span');
    for(let option of options)
    {
        const jobTitle = await page.textContent();
        console.log(jobTitle);
        if(jobTitle.includes('QA Engineer'))
        {
            await option.click();
            break;
        }
    }

})