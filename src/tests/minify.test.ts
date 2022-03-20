import request from "supertest";
import Link from "../models/link";
import App from "../app";

test("Should return a created shortlink", async () => {
  const response = await request(App)
    .post("/create")
    .send({
      url: "www.google.com",
      hours: "400",
    })
    .expect(201);

  const link = Link.findBySlug(response.body.slug);
  expect(link).not.toBeNull();
});

test("Should update time to live of link endtry", async () => {
  let timeToLive = 
  let hoursToAdd = 40

  await request(App).put('/create').send({
      slug: testLink.slug,
      secret: testLInk.secret
  }).expect(200)
  
});
