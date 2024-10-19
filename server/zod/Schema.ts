// Import necessary dependencies
import { z } from 'zod';
// Define Zod schemas based on the provided TypeScript interfaces

// Enum-like schemas
export const tournamentRoundStatusSchema = z.enum(['Group-Stage', 'Quater-Finals', 'Semi-Finals', 'Finals']);
const currencySchema = z.enum(['Rupees', 'Dollars', 'Eruos']);
const tierSchema = z.enum(['1', '2', '3']);
const statusSchema = z.enum(['1', '2', '3']);

// User-related schemas
export const signUpBodySchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  pfp: z.string().optional(),
});

export const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  dob: z.date(),
  bio: z.string(),
});

export const loginBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Match-related schemas
export const matchSchema = z.object({
  playerOneId: z.number(),
  playerTwoId: z.number(),
  time: z.date(),
  tournamentId: z.number(),
  tournamentRound: tournamentRoundStatusSchema,
  vods: z.array(z.string()),
});

export const tournamentSchema = z.object({
  name: z.string(),
  prizepool: z.number(),
  currency: currencySchema,
  totalPlayers: z.number(),
  startingDate: z.date(),
  tier: tierSchema,
  status: statusSchema,
});
