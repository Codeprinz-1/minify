import express from "express";
import {
  homepageController,
  updateController,
  redirectController,
  createController,
} from "../controllers/link";

const router = express.Router();

router.get("/", homepageController);
router.get("/:slug", redirectController);
router.put("/create", updateController);
router.post("/create", createController);

export default router;
