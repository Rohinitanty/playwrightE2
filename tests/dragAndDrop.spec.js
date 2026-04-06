import {test , expect} from '@playwright/test' ;
test.skip ("drag and drop 1" , async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.dragAndDrop("#draggable" , "#droppable");

})

test.skip("drag and drop 2" , async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const item = await page.locator("#draggable");
    const container = await page.locator("#droppable");
    await item.dragTo(container);
    await page.waitForTimeout(5000);
})

test ("drag and drop 3" , async ({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/");
      await page.locator("#draggable").hover();
      await page.mouse.down();
      await page.locator("#droppable").hover();
      await page.mouse.up();
})
