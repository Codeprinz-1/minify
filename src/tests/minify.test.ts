import request from "supertest";
import Link from "../models/link";
import App from "../app";

test("Should return a created shortlink", async () => {
  const response = await request(App)
    .post("/create")
    .send({
      url: "www.google.com",
      daysToLive: 4,
      secret: 'titietieowiou'
    } as LinkType)
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

test('Should return a 404 when trying to acces a resource that doesnt exist')

test('Should  not allow a user to update an entry when trying with the wrong secret')

test('Should return the home page')

test('Should redirect user to the assigned url if the slug is valid')