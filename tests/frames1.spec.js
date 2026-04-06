import { test, expect } from '@playwright/test';

test("frames",async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    await frame1.locator('input[name="mytext1"]').fill("narendra");

    const frame2 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2.html"});
    await frame2.locator('input[name="mytext2"]').fill("rohini")

    const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    await frame3.locator('input[name="mytext3"]').fill("rohini");


})