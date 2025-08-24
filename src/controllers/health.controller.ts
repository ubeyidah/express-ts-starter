import { Request, Response } from "express";

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server is running smoothly!",
    status: "ok",
    timestamp: new Date().toISOString(),
  });
};
