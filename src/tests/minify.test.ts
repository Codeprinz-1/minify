import request from "supertest";
import Link from "../models/link";
import App from "../app";
import { id2, id1, secret2 } from "./fixtures/db";
import { databaseJob } from "../cron/cron";

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
  await databaseJob();
  const link: LinkType = await Link.findById(id1);
  expect(link).toBeNull();
});

test("Should  not allow a user to update an entry when trying with the wrong secret", async () => {
  await request(App)
    .put("/create")
    .send({
      slug: id2,
      secret: "tyhgi",
      daysToAdd: 7,
    } as LinkType)
    .expect(400);
});

test("Should redirect user to the assigned url if the slug is valid", async () => {
  await request(App).get(`localhost:3003/${secret2}`).expect(302);
});
