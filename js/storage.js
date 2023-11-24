const { Storage } = require('@google-cloud/storage');

// Inisialisasi Cloud Storage
const storage = new Storage();

// Fungsi untuk mendapatkan URL gambar dari Cloud Storage
async function getImageUrl(req, res) {
  try {
    // Ganti 'nama-bucket' dan 'nama-file.jpg' dengan nama bucket dan nama file di Cloud Storage Anda
    const [url] = await storage.bucket('nama-bucket').file('nama-file.jpg').getSignedUrl({
      action: 'read',
      expires: Date.now() + 60 * 1000, // URL akan kadaluarsa dalam 1 menit
    });
    res.json({ imageUrl: url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil URL gambar.' });
  }
}

module.exports = { getImageUrl };
