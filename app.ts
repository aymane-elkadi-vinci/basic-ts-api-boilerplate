import express from "express";

import usersRouter from "./routes/users";
import filmRouter from "./routes/films";

const app = express();

/* Middleware pour compter le nombre de GET requests et les afficher 1.2*/
let requestNumber = 0;
app.use((req, _res, next) => {
  if (req.method === "GET") {
    requestNumber++;
    console.log(`GET counter : ${requestNumber}`);
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/films", filmRouter);



export default app;

