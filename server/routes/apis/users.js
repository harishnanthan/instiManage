import express from "express";
import bcrypt from "bcryptjs";

import User from "../../models/User.js";

const router = express.Router();

// const validateRegisterInput = true;
// const validateLoginInput = true;

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ email: "Email already exists" });
    else {
      const newUser = new User({
        name,
        email,
        password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.error(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then((user) => {
    if (!user)
      return res.status(404).json({ emailNotFound: "Email not found!" });
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json({ message: "Password not matching" });
      else return res.status(200).json({ message: "Success" });
    });
  });
});

export default router;
