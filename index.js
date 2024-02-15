const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 9000;
const app = express();
app.use(
    cors({
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    })
);
app.use(
    cors({
        origin: [
            "*",
        ],
    })
);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
let todos = [
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Walk the dog' }
];
app.get("/", async (req, res) => {
    res.send("Welcome to  Backend App");
});
// Get all todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});