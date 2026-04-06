// handling alerts not related to app

import {test , expect} from '@playwright/test';

test ("simple alert" , async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog" , dialog =>{

        dialog.accept();
    })

    await page.getByRole("button" , {name: "Simple Alert"}).click();
    await page.waitForTimeout(5000);
})

test("Confirmation Alert" , async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog" , dialog =>{
        dialog.dismiss();
    })

    await page.getByRole("button" , {name: "Confirmation Alert"}).click();
    await page.waitForTimeout(5000);
})

    test("Prompt Alert" , async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog" , dialog =>{
        dialog.dismiss();
    })

    await page.getByRole("button" , {name: "Prompt Alert"}).click();
    await page.waitForTimeout(5000);
})

//*window dialog handler

 test("window handler" , async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

page.on("dialog" , (dialog)=>{
    const message = dialog.message();


    if(message.includes("I am an alert box!")){
        dialog.accept();
    }

    if (message.includes("Press a button!")){
        dialog.dismiss();
    }

    if(message.includes("Please enter your name:")){
        dialog.accept("Rohini");
    }

})

await page.getByRole("button" , { name: "Simple Alert"}).click();
await page.getByRole("button" , {name: "Confirmation Alert"}).click();
await page.getByRole("button" , {name: "Prompt Alert"}).click();

 })