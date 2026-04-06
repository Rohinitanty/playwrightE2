import {test, expect} from "@playwright/test" ;

test("let's shop" , async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill("bharat007@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Bharat@007");
    await page.getByRole("button" , {name: "Login"}).click();
    await page.waitForLoadState("networkidle");
    const products = await page.locator(".card-body");
    await products.filter({hasText: "iphone 13 pro"}).getByRole("button" , {name : " Add To Cart"}).click() ;
    await page.waitForLoadState("networkidle");

   await page.locator("button[routerlink='/dashboard/cart']").click();

   await page.getByText("checkout").click();

   await page.waitForTimeout(5000);

   await page.locator(".ddl").first().selectOption("03");

   await page.locator(".ddl").last().selectOption("24");

   await page.getByPlaceholder("Select Country").pressSequentially("Ind");

   await page.waitForLoadState("networkidle");

   await page.getByRole('button',{name: ' India' }).click();

   await page.getByText("Place Order ").click();

   const orderMessage = await page.locator(".hero-primary");

   await expect(orderMessage).toContainText("Thankyou for the order. ");
   
   const orderID = await page.locator("td label.ng-star-inserted");
   
   await page.waitForTimeout(5000);

   let orderID1 = await page.locator("label.ng-star-inserted").textContent();
   orderID1 = orderID1.replace(/\|/g,'').trim();

   await page.getByRole("button",{name:" ORDERS"}).click();

   await page.waitForLoadState("networkidle");

   const orderIDLocators = page.locator('tr th[scope="row"]');

   const text = orderIDLocators.filter({hasText:'${orderID}'});

   await expect(text).toContainText(orderID1);

})