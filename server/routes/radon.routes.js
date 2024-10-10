import { Router } from "express";
import * as reviewController from "../controllers/review.controller.js";
import * as contactController from "../controllers/contact.controller.js";
const router = Router();
router.route('/review')
  .get(reviewController.getAll)
  .post(reviewController.create);
router.route('/contact')
  .get(contactController.getAll)
  .post(contactController.create);
router.route('/review/:id')
  .get(reviewController.getOne)
  .delete(reviewController.deleteOne)
  .put(reviewController.updateOne);
router.route('/contact/:id')
  .get(contactController.getOne)
  .delete(contactController.deleteOne)
  .put(contactController.updateOne);
export default router;
