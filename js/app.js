function toggleDetails() {
    var details = document.getElementById("additional-info");
    if (details.style.display === "none") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }
  
document.addEventListener("DOMContentLoaded", function () {
  // Ambil URL gambar dari server dan pasang ke elemen gambar
  fetch('/get-image-url')
    .then(response => response.json())
    .then(data => {
      // Perbarui src gambar dengan URL dari Cloud Storage
      document.getElementById('profile-image').src = data.imageUrl;
    })
    .catch(error => console.error('Error:', error));
});
