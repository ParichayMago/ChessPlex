import { Router } from "express";
import { validate } from "../middleware/validation/validation";
import { tournamentSchema } from "../../zod/Schema";
import { getTournamnet, newTournament } from "../controllers/tourny.controller";

const tourney = Router()


tourney.get("/:tournemntId", getTournamnet);
tourney.post("/", validate(tournamentSchema), newTournament)

export default tourney;