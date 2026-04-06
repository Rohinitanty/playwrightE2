import {test,expect} from '@playwright/test';

test("table" , async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator("#productTable");

    //*total number of rows and columns

    const columns = await table.locator("thead tr th");
    console.log("Number of columns:" , await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator("tbody tr");
    console.log("Number of columns:" , await rows.count());
    expect(await rows.count()).toBe(5);

    //*select checkbox for product 4

    // const matchedrow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Product 4'
    // })

    // await matchedrow.locator('input').check();

    //* select multiple products by reusable  function

    await selectProduct(rows,page, 'Product 1')
    await selectProduct(rows,page, 'Product 3')
    await selectProduct(rows,page, 'Product 5')

    function selectProduct(rows, page , name){
       const matchedrow = rows.filter({
       has: page.locator('td'),
      hasText: 'Product 4'
    })

    // await matchedrow.locator('input').check()
    }


    //* print all product details using loop

    // for(let i = 0 ; i < await rows.count();i++)

    //     {

    //     const row = rows.nth(i);
    //     const tds = row.locator('td')
    //     for(let j = 0 ; j < await tds.count ()-1;j++)
    //     {
    //     console.log(await tds.nth(j).textContent());
    //     }
    // }


    //*read data from all the pages in the table
     const pages = await page.locator('.pagination li a')
     console.log("Number of pages in the table:" , await page.count());

     for(let p=0 ; p< await page.count(); p++)
     {
        if(p>0)
        {
            await pages.nth(p).click()
        }

        for(let i = 0 ; i < await rows.count();i++)

        {

       const row = rows.nth(i);
        const tds = row.locator('td')
        for(let j = 0 ; j < await tds.count ()-1;j++)
        {
        console.log(await tds.nth(j).textContent());
         }
     }
      
     await page.waitForTimeout(5000);

     }

     

    await page.waitForTimeout(5000);
})