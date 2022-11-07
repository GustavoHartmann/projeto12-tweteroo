import express from "express";
import cors from "cors";

const app = express();

let user = {};

app.post("/sign-up", (req, res) => {
  user = req.body;
  res.send("Ok");
});

app.listen(5000, () => console.log("ta funcionando"));
