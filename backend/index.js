const express = require("express");
const db = require("./db.js");
const cors = require("cors");

const app = express();

const PORT = 4000;
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

// Route to get all grades from all students
app.get("/grades", async (req,res) => {
    try {
        const query = "SELECT * FROM grades";
        const [result] = await db.query(query); // Execute the query and wait for the result
        console.log("Success in Reading MySQL");
        res.status(200).send(result); // Send the results as the response
    } catch (err) {
        console.error("Error in Reading MySQL: ", err);
        res.status(500).send({ error: 'An error occurred while fetching items.' });
    }
});