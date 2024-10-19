import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const validate = (schema: z.AnyZodObject | z.ZodOptional<z.AnyZodObject>) =>
  async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {
      await schema.parseAsync(req.body);
      next();  // Proceed to the next middleware/controller
    } catch (error) {
      let err = error;
      if (err instanceof z.ZodError) {
        err = err.issues.map((e) => ({ path: e.path[0], message: e.message }));
      }
      // Use return to ensure the response is properly terminated
      res.status(409).json({
        status: 'failed',
        error: err,
      });
      return;
    }
  };