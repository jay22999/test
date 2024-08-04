// create home : name, age, gender, location
// db : user
// view information in table
// endpoint param : name retrive user

const cors = require("cors");
const db_pool = require("./database/database");
const express = require("express");
const app = express();

const router = require("express").Router();
app.use(express.json());

router.get("/:name", (req, res) => {
  const data = req.params;
  db_pool.getConnection((err, connection) => {
    if (err) {
      res.send({ message: "db error" });
      console.log();
    } else {
      const result = connection.query(
        `SELECT * FROM test
            WHERE name = ?
        `,
        [data["name"]],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
            console.log(result, "result");
          }
        }
      );
    }
  });

  console.log(data);
});

router.post("/details/add", (req, res) => {
  const data = req.body;
  console.log(data);
  db_pool.getConnection((err, connection) => {
    if (err) {
      res.send({ message: "db error" });
      console.log();
    } else {
      const result = connection.query(
        `INSERT test(name, age, gender, location) VALUES(?,?,?,?)
        `,
        [data["name"], data["age"], data["gender"], data["location"]],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
            console.log(result, "result");
          }
        }
      );
    }
  });
});

app.use(router);

app.listen(3334, () => {
  console.log("3334 listen");
});
