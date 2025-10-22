// server.js (English only)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // or app.use(express.json());

function validateCard(data) {
    const { name, number, expiry, cvv } = data || {};
    if (!name || !number || !expiry || !cvv) return false;
    const num = String(number).replace(/\s/g,'');
    if (!/^\d{16}$/.test(num)) return false; // 16-digit card number
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return false; // MM/YY
    if (!/^\d{3,4}$/.test(String(cvv))) return false; // CVV 3-4 digits
    return true;
}

app.post('/api/pay', (req, res) => {
    const payment = req.body;
    if (!validateCard(payment)) {
        return res.status(400).json({ status: 'error', message: 'Invalid payment data' });
    }

    // Simulate payment processing
    setTimeout(() => {
        res.json({ status: 'success', message: 'Payment simulation successful' });
    }, 1000);
});

// Simple health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server running on http://localhost:3000' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
