import express from "express";
import multer from "multer";
import {
  homepageController,
  updateController,
  redirectController,
  createController,
} from "../controllers/link";

const router = express.Router();
const upload = multer();

router.get("/", homepageController);
router.get("/:slug", redirectController);
router.put("/create", updateController);
router.post("/create", upload.none(), createController);

export default router;
