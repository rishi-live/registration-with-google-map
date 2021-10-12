const express = require("express");
const cors = require("cors");
const createConnection = require("./database/connection");
const { User } = require("./database/models/userModel2");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
createConnection();
const port = 3000;
app.use(cors());
// localhost:3000
app.get("/", (req, res) => {
    res.json({
        message: "Home 🏠",
    });
});

app.get("/api", (req, res) => {
    res.json({
        message: "API is Working ✅",
    });
});

app.listen(port, () => {
    console.log(`Example app listening at port: ${port}`);
});

const userRouter = express.Router();
app.use("/user", userRouter);
// app.use("/api/map", require('./Routes/mapRoute'));

userRouter.get("/", (req, res) => {
    User.find().then((users) => {
        res.json({
            users: users,
        });
    });
});

userRouter.post("/", (req, res) => {
    const user = req.body;
    if (Object.keys(user).length == 0) {
        return res.status(400).json({ error: "Request Body Required" });
    }

    User.create(user).then((user) => {
        res.status(201).json({ user: user });
    });
});