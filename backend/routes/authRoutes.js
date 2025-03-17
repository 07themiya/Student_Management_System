const express = require ("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const passport = require("../models/user");
require("dotenv").config();

const router = express.Router();

//Register
router.post("/register", async (req, res) => {
    const {username, password} = req.body;

    try {
        const hashedPasswoed = await bcrypt.hash(password, 10);
        const user = new user({username, password: hashedPasswoed});
        await user.save();

        res.status(201).json({message: "User Registered Successfully"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

//Login
router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    try{
        const user = await user.findOne({username});
        if (!user) return res.status(404).json({message: "User not found"});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({message: "Incorrect Credentials"});

        const token = jwt.sign({id: user_id}, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.json({token, username: user.username});
    }catch (error) {
        res.status(500).json({error: error.message});
    }
});

//Google Authentication
router.get("/google", passport.authenticate("google", {scope: ["profile", "email"]}));

router.get(
    "/google/callback",
    passport.authenticate("google", {failurRedirect: "/login"}),
    (req, res) => {
        res.redirect("/dashboard");
    }
);

module.exports = router;