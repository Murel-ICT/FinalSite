const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Received contact form:', { name, email, message });

    res.status(200).json({ message: 'Thank you! Your message was received.' });
});

app.get('/', (req, res) => {
    res.send('Murel Contact API is live!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
