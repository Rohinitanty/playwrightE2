import {test,expect} from '@playwright/test';

test.beforeAll(async()=>{
    console.log("this is beforeall hook....")
})

test.afterAll(async()=>{
    console.log("this is afterall hook....")
})

test.beforeEach(async()=>{
    console.log("this is beforeEach hook....")
})

test.afterEach(async()=>{
    console.log("this is afterEach hook....")
})

test.describe("Group 1" , ()=>{
  test("Test1" , async({page})=>{
    console.log("this is my Test1");
})

test("Test2" , async({page})=>{
    console.log("this is my Test2");
})
})

test.describe("Group 2" , ()=>{
   test("Test3" , async({page})=>{
    console.log("this is my Test3");
})

test("Test4" , async({page})=>{
    console.log("this is my Test4");
})
})
