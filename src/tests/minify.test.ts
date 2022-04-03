import request from "supertest";
import Link from "../models/link";
import App from "../app";
import { id2, id1, secret2 } from "./fixtures/db";

test("Should return a created shortlink", async () => {
  const response = await request(App)
    .post("/create")
    .send({
      url: "www.google.com",
      daysToLive: 4,
      secret: "titietieowiou",
    } as LinkType)
    .expect(201);

  const link: LinkType = await Link.findById(response.body.slug);
  expect(link).not.toBeNull();
});

test("Should update days to live", async () => {
  let daysToLive = await Link.findById(id2);
  let daysToAdd = 40;

  await request(App)
    .put("/create")
    .send({
      slug: id2,
      secret: secret2,
      daysToAdd,
    } as LinkType)
    .expect(200);

  const link: LinkType = await Link.findById(id2);
  expect(link.daysToLive).toBe(daysToAdd + daysToLive);
});

test("Should delete resource when days to live is past", async () => {
  // cron code
  const link: LinkType = await Link.findById(id1);
  expect(link).toBeNull();
});

test("Should return a 404 when trying to acces a resource that doesnt exist");

test(
  "Should  not allow a user to update an entry when trying with the wrong secret"
);

test("Should return the home page");

test("Should redirect user to the assigned url if the slug is valid");
