# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APItest2.spec.js >> Create users
- Location: tests\APItest2.spec.js:11:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 401
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | var userid;
  4  | 
  5  | test("Get users" , async({request})=>{
  6  |     const response = await request.get('https://reqres.in/api/users?page=2');
  7  |     console.log(await response.json());
  8  |     expect (response.status()).toBe(200);
  9  | })
  10 | 
  11 | test.only("Create users" , async({request})=>{
  12 |     const response= await request.post('https://reqres.in/api/users',
  13 |         {
  14 |             data:{
  15 |                 "name":"kumar",
  16 |                 "job":"trainer"
  17 |             },
  18 |             headers:{
  19 |                 "Accept":"application/json"
  20 |             }
  21 |         }
  22 |     )
  23 |     console.log(await response.json())
> 24 |     expect (response.status()).toBe(201);
     |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  25 |     var res = await response.json()
  26 |     userid=res.id
  27 | })
  28 | 
  29 | test("Update users" , async({request})=>{
  30 |     
  31 | })
  32 | 
  33 | test("Delete users" , async({request})=>{
  34 |     
  35 | })
```