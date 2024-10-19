import { Router } from "express";
import { getMatches, newMatch } from "../controllers/match.controller";
import { matchSchema } from "../../zod/Schema";
import { validate } from "../middleware/validation/validation";

const match = Router()

match.get("/matches", getMatches);

match.post("/new-match", validate(matchSchema), newMatch)


export default match;