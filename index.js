const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// In-memory storage for the operation code
let operationCode = 1;

// POST endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        // Extract relevant data
        const user_id = "vivek_kumar_20112001";
        const email = "vk6593@srmist.edu.in";
        const roll_number = "RA2011003010070";

        // Separate numbers and alphabets
        const numbers = data.filter(item => typeof item === "number");
        const alphabets = data.filter(item => typeof item === "string");

        // Find the highest alphabet
        const highest_alphabet = alphabets.length > 0 ? [alphabets.sort()[alphabets.length - 1]] : [];

        const response = {
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet,
        };

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: operationCode });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
