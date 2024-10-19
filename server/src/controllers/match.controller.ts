import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Tmatch } from "../../types/types";


const prisma = new PrismaClient();

export const getMatches = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await prisma.match.findMany({ where: { tournament: { tier: "1" } } });
    if (!data || data.length === 0) {
      res.status(404).json({ status: false, message: "No matches found" });
      return;
    }
    res.status(200).json({ status: true, data });
  } catch (e) {
    console.error(e); // Log the error for debugging
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};


export const newMatch = async(req: Request<{}, {}, Tmatch>, res:Response):Promise<void> => {
  try {
    const data = req.body;
    const newMatch = await prisma.match.create({data});
    res.status(200).json({status: true, newMatch});
    return;

  } catch(e) {
    res.status(400).json({ status: false, message: "internal server error" })
    return 
  }
}
