import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  res.json({ message: "Hello!" })
});

app.listen(8000, () => console.log("Server running on localhost:8000"));