import { matchSchema, signUpBodySchema, tournamentSchema } from "../zod/Schema"
import {z} from "zod"

type tournamentRoundStatus = 'Group-Stage' | 'Quater-Finals' | 'Semi-Finals' | 'Finals'
type Tcurrency = 'Rupees' | 'Dollars' | 'Eruos' 
type Ttier = 1 | 2 | 3 
type Tstatus = 1 | 2 | 3 //goingon, upcoming, completed


export interface SignUpBody{
  name:string,
  username: string
  email : string,
  college: string,
  bio?: string,
  password : string,
  pfp?: string
}


// export interface UserUpdateModel {
//   name: string,
//   email:string,
//   password: string,
//   dob: Date,
//   bio: string
// }

export interface loginBody{
  email : string ,
  password : string 
}

// export interface IMatch {
//   name: string,
//   date: Date, 
  
// }

// export interface Iuser {
//   id: number,
//   name: string,
//   username: string,
//   email: string,
// }

// export interface Iplayer extends Iuser {
//   chessId: string,
//   raiting: number,
//   pfpUrl: string
// }

// export interface IMatch {
//   playerOneId: string,
//   playerTwoId: string,
//   tournamnetId: string,
//   time: Date,
//   tournamentRound: tournamentRoundStatus,
//   vods: string[]
// }

// export interface Itournament {
//   name: string,
//   prizepool: number,
//   currency: Tcurrency,
//   totalPlayers: number,
//   startingDate: Date,
//   tier: Ttier,
//   status: Tstatus,
  
// }

export type Tsignup = z.infer<typeof signUpBodySchema>

export type Tmatch  = z.infer<typeof matchSchema>;
export type Ttournament = z.infer<typeof tournamentSchema>









