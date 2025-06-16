const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON payloads
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
    console.log('Webhook received!', req.body);

    // Example: Process incoming events
    if (req.body.sys?.type === 'Entry') {
        console.log(`Entry ID: ${req.body.sys.id}, Type: ${req.body.sys.type}`);
    }

    res.status(200).send('Webhook received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Webhook endpoint is running on port ${PORT}`);
});