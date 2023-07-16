import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

import { createServer } from 'https';
import { readFileSync } from 'fs';
import { join } from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Set up HTTPS server with SSL certificate
const sslKey = readFileSync(join(__dirname, 'ssl', 'key.pem'));
const sslCert = readFileSync(join(__dirname, 'ssl', 'cert.pem'));
const sslOptions = { key: sslKey, cert: sslCert };

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Start the server
createServer(sslOptions, app)
  .listen({ port: port }, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
