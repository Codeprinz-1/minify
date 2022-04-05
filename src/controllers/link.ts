import express from "express";

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

export const createController = (
  req: express.Request,
  res: express.Response
) => {};
