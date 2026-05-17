import express from "express";
import {
  createPayment,
  createMockPayment,
  completeMockPayment,
  vnpayReturn,
  getPaymentByBooking,
} from "../controllers/paymentController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const paymentRouter = express.Router();

paymentRouter.post("/create", authMiddleware, createPayment);
paymentRouter.post("/mock/create", authMiddleware, createMockPayment);
paymentRouter.patch("/mock/:paymentId/complete", authMiddleware, completeMockPayment);
paymentRouter.get("/vnpay-return", vnpayReturn);
paymentRouter.get("/booking/:bookingId", authMiddleware, getPaymentByBooking);

export default paymentRouter;