import { test, expect } from "@playwright/test";

const BASE = 'https://jsonplaceholder.typicode.com';

test("GET", async ({ request }) => {
    const res = await request.get(`${BASE}/posts/1`);

    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('application/json');

    const body = await res.json();
    expect(body).toMatchObject({ id: 1, userId: 1 });
    expect(typeof body.title).toBe('string');
    console.log(body);
})