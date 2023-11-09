import { Router } from "express";
import { TestController } from "../../../controllers/tests/test.controller.js";

const testRoutes = Router();
const testController = new TestController();

// get all question personality test
testRoutes.get(
    "/test/personality_mbi/question",
    testController.getPersonalTest
);

// get answer personality
testRoutes.post(
    "/test/personality_mbi/answer",
    testController.getPersonalityAnswer
);

export default testRoutes;
