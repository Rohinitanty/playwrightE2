import {test} from '@playwright/test';

test.describe("group 1" , ()=>{

    test ("test1" , async({page})=>{
        console.log("hi");
    })
    test ("test 2" , async({page})=>{
        console.log("bye");
    })
})