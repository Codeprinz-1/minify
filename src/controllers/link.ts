import express from "express";
import Link from "../models/link";
import { generateSlug } from "../utils";

export const homepageController = (
  req: express.Request,
  res: express.Response
) => {
  res.render("index");
};

export const updateController = (
  req: express.Request,
  res: express.Response
) => {};

export const redirectController = (
  req: express.Request,
  res: express.Response
) => {};

export const createController = async (
  req: express.Request,
  res: express.Response
) => {
  let slug;
  if (req.body.slug) {
    const link: LinkType | null = await Link.findById(req.body.slug);
    if (link) {
      res.status(400).send("slug is already taken, please choose another one");
    } else {
      slug = req.body.slug;
    }
  } else {
    slug = generateSlug();
    while (await Link.findById(slug)) {
      slug = generateSlug();
    }
  }

  const link = new Link({
    url: req.body.url,
    slug,
    createdAt: new Date(),
    secret: req.body.secret,
  });
  await link.save();
  res.status(201).send({ slug });
};
