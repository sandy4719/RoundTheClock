import express, { type Express, type RequestHandler } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import type { IncomingMessage, ServerResponse } from "node:http";
import router from "./routes";
import { logger } from "./lib/logger";

// pino-http uses CJS `export =` pattern; cast to callable for ESM/bundler TS compat
type PinoHttpFactory = (options: {
  logger: typeof logger;
  serializers: {
    req: (req: IncomingMessage & { id?: string }) => object;
    res: (res: ServerResponse) => object;
  };
}) => RequestHandler;
const pinoHttpMiddleware = pinoHttp as unknown as PinoHttpFactory;

const app: Express = express();

app.use(
  pinoHttpMiddleware({
    logger,
    serializers: {
      req(req: IncomingMessage & { id?: string }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: ServerResponse) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
