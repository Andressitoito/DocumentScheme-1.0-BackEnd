const express = require("express");
const user = require("../models/user");
const userSchema = require("../models/user");
const data = require('../models/data')
const dataSchema = require('../models/data')

const router = express.Router();

// CREATE USER

router.post("/users", (req, res) => {
 const user = userSchema(req.body);
 user
  .save()
  .then((data) => res.json(data))
  .catch((error) => {
   console.log(error);
   res.json({ message: error });
  });
});

router.post("/data", (req, res) => {
 const data = dataSchema(req.body);
 data
  .save()
  .then((data) => res.json(data))
  .catch((error) => {
   console.log(error);
   res.json({ message: error });
  });
});



// GET ALL USERS

router.get("/users", (req, res) => {
 userSchema
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// GET AN USER

router.get("/users/:id", (req, res) => {
 const { id } = req.params;

 userSchema
  .findById(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// UPDATE AN USER

router.put("/users/:id", (req, res) => {
 const { id } = req.params;
 const { name, age, email } = req.body;

 userSchema
  .updateOne({ _id: id }, { $set: { name, age, email } })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// DELTE AN USER

router.delete('/users/:id', (req, res) => {
 const { id } = req.params
 userSchema
  .removeOne({ _id: id })
  .then(data => res.json(data))
  .catch(error => res.json({ message: error }))
})

module.exports = router;

