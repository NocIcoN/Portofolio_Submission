const { getImageUrl } = require('./storage');
const path = require('path');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Endpoint untuk menampilkan halaman profil
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '../public/index.html');
    res.sendFile(indexPath);
});

// Endpoint untuk mendapatkan URL gambar dari Cloud Storage
app.get('/get-image-url', getImageUrl);

// Mulai server
app.listen(port, () => {
    console.log(`Aplikasi berjalan di http://localhost:${port}`);
});