import { Router } from "express";

import { PaymentController } from "../../../controllers/payments/payment.controller.js";

const paymentRoutes = Router();
const paymentController = new PaymentController();

paymentRoutes.get("/payment/momo", paymentController.createPaymentWithMomo);

export default paymentRoutes;
