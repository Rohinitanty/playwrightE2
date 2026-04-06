import {test,expect} from '@playwright/test';

// test("Date Picker" , async ({page})=>{

//     await page.goto("https://demoqa.com/date-picker");
//     await page.fill("#datePickerMonthYearInput" , "04/04/2026");
//     await page.waitForTimeout(5000);


// test("mouse Hover" , async({page})=>{
//     await page.goto("https://demoqa.com/menu");
//     const frame2 = await page.locator("//a[normalize-space()='Main Item 2']");
//     const sublist = await page.locator("//a[normalize-space()='SUB SUB LIST »']");

//     await frame2.hover();
//     await sublist.hover();

//     await page.waitForTimeout(5000);
// })

// test("mouse right click" , async({page})=>{
//     await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
//     const mouseclick = await page.locator("//span[@class='context-menu-one btn btn-neutral']");
//     await mouseclick.click({button:"right"});
//     await page.waitForTimeout(5000);
// })

// test("mouse double click" , async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.getByRole("button" , {name:"Copy Text"}).dblclick();
//     const msg = page.locator("#field2");
//     await expect(msg).toHaveValue("Hello World!");
//     await page.waitForTimeout(5000);
// })

// test("drag and drop" , async({page})=>{
//     await page.goto("https://www.learnaqa.info/drag-and-drop/?utm_source=chatgpt.com");
//     const source1 = page.getByText("Draggable Item 1");
//     const container1 = page.getByText("Drop items here");

//     await source1.dragTo(container1);

//     await page.waitForTimeout(5000);
// })

// test("keyboard actions" , async({page})=>{
//     await page.goto("https://gotranscript.com/text-compare");
//     await page.getByPlaceholder("Paste one version of the text here.").fill("my name is Rohini");
//     await page.keyboard.press('Control+A');
//     await page.keyboard.press('Control+C');
//     await page.keyboard.press('Tab');
//     await page.keyboard.press('Control+V');
//     await page.waitForTimeout(5000);

// })

test("upload file" , async({page})=>{
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/?utm_source=chatgpt.com");
    await page.waitForSelector("input[name='files[]']");
    await page.locator("input[name='files[]']").click();
    await page.locator("input[name='files[]']").setInputFiles('tests/uploadfile/sample_test_file.txt');
    await page.waitForTimeout(5000);

})