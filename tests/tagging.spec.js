import {test,expect} from '@playwright/test';

//npx playwright test test_name --grep "@tagname"

test("test 1 @sanity" , async ({page})=>{
    console.log("its a sanity test 1");
})

test ("test 2 @reg" , async({page})=>{
    console.log("its a reg test 2");
})

test ("test 3 @sanity" , async({page})=>{
    console.log("its a reg test 2");
})

test ("test 4 @sanity @reg" , async({page})=>{
    console.log("its a reg test 2");
})