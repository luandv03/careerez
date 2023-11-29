import https from "https";
import crypto from "crypto";
import { jobSimulationService } from "../../services/job_simulations/job_simulation.service.js";

export class PaymentController {
    // ############ MOMO ###########
    // ############ MOMO ###########
    async createPaymentWithMomo(request, response) {
        try {
            const accessKey = "F8BBA842ECF85";
            const secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
            const orderInfo = "pay with MoMo";
            const partnerCode = "MOMO";
            const service_pack_id = request.query.service_pack_id;

            // const redirectUrl =
            //     "https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b";
            const redirectUrl =
                process.env.DOMAIN_SERVER +
                `/payment/momo/return_url?service_pack_id=${service_pack_id}`;
            const ipnUrl =
                "https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b";
            const requestType = "payWithMethod";
            const amount = request.query.amount;
            const orderId = partnerCode + request.query.order_id;
            const requestId = orderId;
            const extraData = "";
            const paymentCode =
                "T8Qii53fAXyUftPV3m9ysyRhEanUs9KlOPfHgpMR0ON50U10Bh+vZdpJU7VY4z+Z2y77fJHkoDc69scwwzLuW5MzeUKTwPo3ZMaB29imm6YulqnWfTkgzqRaion+EuD7FN9wZ4aXE1+mRt0gHsU193y+yxtRgpmY7SDMU9hCKoQtYyHsfFR5FUAOAKMdw2fzQqpToei3rnaYvZuYaxolprm9+/+WIETnPUDlxCYOiw7vPeaaYQQH0BF0TxyU3zu36ODx980rJvPAgtJzH1gUrlxcSS1HQeQ9ZaVM1eOK/jl8KJm6ijOwErHGbgf/hVymUQG65rHU2MWz9U8QUjvDWA==";
            const orderGroupId = "";
            const autoCapture = true;
            const lang = "vi";

            //before sign HMAC SHA256 with format
            //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
            const rawSignature =
                "accessKey=" +
                accessKey +
                "&amount=" +
                amount +
                "&extraData=" +
                extraData +
                "&ipnUrl=" +
                ipnUrl +
                "&orderId=" +
                orderId +
                "&orderInfo=" +
                orderInfo +
                "&partnerCode=" +
                partnerCode +
                "&redirectUrl=" +
                redirectUrl +
                "&requestId=" +
                requestId +
                "&requestType=" +
                requestType;
            //puts raw signature

            var signature = crypto
                .createHmac("sha256", secretKey)
                .update(rawSignature)
                .digest("hex");

            //json object send to MoMo endpoint
            const requestBody = JSON.stringify({
                partnerCode: partnerCode,
                partnerName: "Test",
                storeId: "MomoTestStore",
                requestId: requestId,
                amount: amount,
                orderId: orderId,
                orderInfo: orderInfo,
                redirectUrl: redirectUrl,
                ipnUrl: ipnUrl,
                lang: lang,
                requestType: requestType,
                autoCapture: autoCapture,
                extraData: extraData,
                orderGroupId: orderGroupId,
                signature: signature,
            });

            const options = {
                hostname: "test-payment.momo.vn",
                port: 443,
                path: "/v2/gateway/api/create",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Content-Length": Buffer.byteLength(requestBody),
                },
            };
            //Send the request and get the response
            const req = https.request(options, (res) => {
                res.setEncoding("utf8");
                res.on("data", (body) => {
                    const da = JSON.parse(body);

                    response.redirect(da.payUrl);
                });
                res.on("end", () => {
                    console.log("No more data in response.");
                });
            });

            req.on("error", (e) => {
                console.log(`problem with request: ${e.message}`);
            });

            req.write(requestBody);
            req.end("Request end!");
        } catch (error) {
            response.status(500).json({
                statusCode: 500,
                message: "INTERNAL_ERROR_SERVER",
                error,
            });
        }
    }

    async paymentWithMomoReturn(req, res) {
        try {
            const {
                partnerCode,
                orderId,
                requestId,
                amount,
                orderType,
                transId,
                resultCode,
                message,
                payType,
                signature,
            } = req.query;
            // save into db

            const { service_pack_id } = req.query;
            const { user_id } = res.locals.data;

            const data = await jobSimulationService.registerPackService(
                Number(service_pack_id),
                Number(user_id)
            );

            res.render(
                process.env.DOMAIN_CLIENT +
                    `/member_register/${orderId}/success?user_buy_service_pack_id=${data.data.user_buy_service_pack.user_buy_service_pack_id}`
            );
        } catch (error) {
            res.status(500).json({
                statusCode: 500,
                message: "INTERNAL_ERROR_SERVER",
                error,
            });
        }
    }
}
