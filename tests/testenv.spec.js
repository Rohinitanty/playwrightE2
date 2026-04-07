import {test,expect} from "@playwright/test";

require('dotenv').config();

test("env",async({page})=>{
    console.log(process.env.BASE_URL);
    console.log(process.env.USEREMAIL);
    console.log(process.env.USERPASSWORD);

    await page.goto(process.env.BASE_URL);
    

})