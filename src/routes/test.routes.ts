import { Request, Response, Router } from "express";

const testRoutes = Router();

testRoutes.get("/", (request: Request, response: Response) => {
  response.status(200).json({ message: "Server is running!" });
});

export { testRoutes };
