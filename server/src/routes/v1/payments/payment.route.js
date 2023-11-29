import { Router } from "express";

import { PaymentController } from "../../../controllers/payments/payment.controller.js";

const paymentRoutes = Router();
const paymentController = new PaymentController();

paymentRoutes.get("/payment/momo", paymentController.createPaymentWithMomo);

paymentRoutes.get(
    "/payment/momo/return_url",
    paymentController.paymentWithMomoReturn
);

export default paymentRoutes;
