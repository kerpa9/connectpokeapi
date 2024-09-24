import express, { Request, Response, Router } from "express";
import cors from "cors";

interface Options {
  port: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  public readonly port: number;
  public readonly routes: Router;

  constructor(options: Options) {
    this.port = options.port;
    this.routes = options.routes;
  }

  async start() {
    this.app.use(express.json());

    this.app.use(express.urlencoded({ extended: true }));

    this.app.use("/api/v1", this.routes);

    this.app.get("/", (req: Request, res: Response) => {
      return res.send("Welcome to my API, which connects to PokeAPI!");
    });

    this.app.listen(this.port, () => {
      console.log(
        `Server is running on port http://localhost:${this.port} 😁😁`
      );
    });

    this.app.use(cors());
  }
}
