import { PythonShell } from "python-shell";
import cors from "cors";
import express from "express";

const app = express();
const router = express.Router();
const port = process.env.PORT || 1500;

router.post("/compiler", function (req, res) {
  PythonShell.runString(req.body.program, null, function (err, response) {
    if (err) throw err;
    res.send(response);
  });
});

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, function () {
  console.log("Server started");
});
