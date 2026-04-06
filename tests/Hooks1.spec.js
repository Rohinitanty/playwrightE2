import {test,expect} from '@playwright/test';

  let page;

test.beforeEach(async  ({browser})=>{

   page= await browser.newPage();

    await page.goto("https://demoblaze.com/");

   //*Login

   await page.locator("#login2").click();
   await page.locator("#loginusername").fill("Rohini11");
   await page.locator("#loginpassword").fill("1234");
   await page.getByRole("button" , {name:"Log in"}).click();
})

test.afterEach(async()=>
{
  //*Logout

   await page.locator("#logout2").click()
})



test("Home Page Test" , async()=>{

   //*Homepage
    
   const products = await page.$$('.hrefch');
   await expect(products).toHaveLength(9);

   
})



test("Add Product To Cart Test" , async()=>{

    //*Add product to cart

    await page.getByRole('link', {name:"Samsung galaxy s6"}).click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on("dialog" , async dialog =>{
        expect(dialog.message()).toContain('Product added.');
        dialog.accept();
    })
})