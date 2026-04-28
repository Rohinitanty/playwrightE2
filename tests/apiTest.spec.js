import { test, expect, request } from '@playwright/test';

test('Validate Users API - real time scenario', async () => {

  // Create API context (best practice)
  const apiContext = await request.newContext({
    extraHTTPHeaders: {
      'Accept': 'application/json'
    }
  });

  // Send request
  const response = await apiContext.get(
    'https://reqres.in/api/users?page=1'
  );

  // 🔍 Debug (very important in real projects)
  console.log('Status:', response.status());
  const responseText = await response.text();
  console.log('Response:', responseText);

  // Validate status
  expect(response.status()).toBe(200);

  // Parse JSON safely
  const body = JSON.parse(responseText);

  // Validate structure
  expect(body.data).toBeDefined();
  expect(Array.isArray(body.data)).toBe(true);

  // Validate count
  expect(body.data.length).toBeGreaterThan(0);

  // Validate all users
  body.data.forEach(user => {
    expect(user.id).toBeTruthy();
    expect(user.email).toContain('@');
    expect(user.first_name).toBeTruthy();
    expect(user.last_name).toBeTruthy();
  });

  // Validate specific user
  const user = body.data.find(u => u.id === 1);
  expect(user).toBeDefined();
  expect(user.email).toBe('george.bluth@reqres.in');
});