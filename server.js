const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.json());

class Numbers {
  constructor(firstt, secondd) {
    this.firstt = firstt;
    this.secondd = secondd;
  }
}

app.get("/calculator/greeting", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/calculator/add", (req, res) => {
  const numbers = new Numbers(req.body.firstt, req.body.secondd);
  if (!isNaN(numbers.firstt) && !isNaN(numbers.secondd)) {
    const result = numbers.firstt + numbers.secondd;
    res.status(200).json({ result });
  } else {
    res.status(400).json({ error: "Invalid input" });
  }
});

app.post("/calculator/subtract", (req, res) => {
  const numbers = new Numbers(req.body.firstt, req.body.secondd);
  if (!isNaN(numbers.firstt) && !isNaN(numbers.secondd)) {
    const result = numbers.firstt - numbers.secondd;
    res.status(200).json({ result });
  } else {
    res.status(400).json({ error: "Invalid input" });
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is listening on port ${port}`);
});

// const express = require("express");
// const app = express();

// const PORT = process.env.PORT || 8080;

// const baseUrl = "/calculator";

// app.use(express.json());

// const baseRouter = express.Router();

// baseRouter.get("/greeting", (req, res) => {
//   res.status(200).send("Hello World!");
// });

// baseRouter.post("/add", (req, res) => {
//   const numbers = req.body;

//   if (!numbers || isNaN(numbers.first) || isNaN(numbers.second)) {
//     return res.status(400).json({ error: "Invalid input" });
//   }

//   res.status(200).json({ result: numbers.first - numbers.second });
// });

// baseRouter.post("/subtract", (req, res) => {
//   const numbers = req.body;

//   if (!numbers || isNaN(numbers.first) || isNaN(numbers.second)) {
//     return res.status(400).json({ error: "Invalid input" });
//   }

//   res.status(200).json({ result: numbers.first - numbers.second });
// });

// app.use(baseUrl, baseRouter);
// app.listen(PORT, () => {
//   console.log("Server running at PORT", PORT);
// });

// -----------------------------------------------------------------------------------------------
// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 8080;

// const baseUrl = '/calculator'

// app.use(express.json());

// const baseRouter = express.Router();

// baseRouter.get('/greeting', (req, res) => {
//     return res.send('');
// });

// baseRouter.post('/add', (req, res) => {
//     res.json({ "": null });
// });

// baseRouter.post('/subtract', (req, res) => {
//     res.json({ "": null });
// });

// app.use(baseUrl, baseRouter);
// app.listen(PORT, () => {
//     console.log("Server running at PORT", PORT);
// });
