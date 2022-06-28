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

export const redirectController = async (
  req: express.Request,
  res: express.Response
) => {
  const link: LinkType | null = await Link.findById(req.params.slug);
  if (!link) {
    res.render("index", {
      status: "error",
      message: "URL slug does not exist",
    });
    return;
  }
  res.redirect(("//" + link?.url) as string);
};

export const createController = async (
  req: express.Request,
  res: express.Response
) => {
  let slug;
  if (req.body.slug) {
    const link: LinkType | null = await Link.findById(req.body.slug);
    if (link) {
      res.status(409).send({
        status: "error",
        field: "slug",
        message: "slug is already taken, please choose another one",
      });
      return;
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
    _id: slug,
    url: req.body.url.replace(/^https?:\/\//, ""),
    createdAt: new Date(),
    expiryDate: req.body.date,
    secret: req.body.secret,
  });
  await link.save();
  res.status(200).send({ status: "success", slug, date: req.body.date });
};
