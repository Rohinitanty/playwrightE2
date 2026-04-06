import {test,expect} from '@playwright/test';

test('iframe' , async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");
    //*total frames
    //*approach1
    // const allFrames = await page.frames();
    // console.log("Number of frames:",allFrames.length);

    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    // await frame1.fill("[name='mytext1']" , 'Hello');

    //*approach2

    //  const frame2 = page.frameLocator("frame[src='frame_2.html']");
    //  await frame2.locator("[name='mytext2']").fill("Hello2");


    const frame3 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    frame3.fill("input[name='mytext3']" , 'Hello3');
     

     const childFrame = await frame3.childFrame();
     await childFrame[0].locator("//*[@id='i6']/div[3]/div").check();
     await page.waitForTimeout(5000);

     
})