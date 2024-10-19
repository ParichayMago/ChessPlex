import {Router} from "express"
import { validate } from "../middleware/validation/validation";
import { registerController } from "../controllers/auth.controller";

const auth = Router();


