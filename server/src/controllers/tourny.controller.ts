import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Ttournament } from "../../types/types";


const prisma = new PrismaClient();
function badRed( res:Response, message:any) {
  return res.status(400).json({status: false, message});
}

function goodReq( res:Response, data:any) {
  return res.status(400).json({status: true, data});
}

export const getTournamnet = async (req:Request<{tournamentId: number}, {}, {}>, res:Response):Promise<void> => {
  try {
    const data = await prisma.tournament.findUnique({where: {id: req.params.tournamentId}});
    if(!data) {
      badRed(res, "Invalid tournament Id");
      return;
    }
    goodReq(res, data);
    return;

  } catch(e) {
    console.log(e)
    badRed(res, "Internel Server Error");
    return;
  }
}

export const newTournament = async (req:Request<{}, {}, Ttournament>, res:Response):Promise<void> => {
  try {
    const data = req.body
    const createTourney = await prisma.tournament.create({data});
    goodReq(res, createTourney);
    return;
  } catch(e) {
    badRed(res, e);
    return;
  }
}





