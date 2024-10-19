import express, {Express, Response, Request} from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import matchRouter from "./routes/match.router";


const app:Express = express();
const port = 4000;

app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("api/match", matchRouter)

app.get("/", (req : Request, res : Response) => {
  res.json({"message" : "Ready to change the world?"});
});

app.listen(port, async()=> {
  console.log(`Server is running on http://localhost:${port}`);
})