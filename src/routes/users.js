const express = require("express");
const user = require("../models/user");
const userSchema = require("../models/user");

const router = express.Router();

// CREATE USER

router.post("/users", (req, res) => {
 const user = userSchema(req.body);
 user
  .save()
  .then((data) => res.json(data))
  .catch((error) => {
   console.log(error)
   res.json({ message: error })
  });
});

// GET ALL USERS

router.get('/users', (req, res) => {
 userSchema
  .find()
  .then(data => res.json(data))
  .catch(error => res.json({ message: error }))
})

// GET AN USER

router.get('/users/:id', (req, res) => {
 const { id } = req.params
 userSchema
  .findById(id)
  .then(data => res.json(data))
  .catch(error => res.json({ message: error }))
})

// UPDATE AN USER

router.put('/users/:id', (req, res) => {
 const { id } = req.params

 userSchema
  .findById(id)
  .then(data => res.json(data))
  .catch(error => res.json({ message: error }))

})

module.exports = router;
