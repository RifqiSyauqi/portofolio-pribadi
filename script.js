// ===== 1. Dark Mode Toggle =====
const tombolTema = document.getElementById("theme-toggle");
 
const aturTema = (gelap) => {
  document.body.classList.toggle("dark-mode", gelap);
  tombolTema.textContent = gelap ? "Mode Terang" : "Mode Gelap";
};
 
// Ingat pilihan tema walau halaman dimuat ulang
let temaTersimpan = null;
try {
  temaTersimpan = localStorage.getItem("tema");
} catch (e) {
  // localStorage tidak tersedia, abaikan
}
aturTema(temaTersimpan === "gelap");
 
tombolTema.addEventListener("click", () => {
  const jadiGelap = !document.body.classList.contains("dark-mode");
  aturTema(jadiGelap);
  try {
    localStorage.setItem("tema", jadiGelap ? "gelap" : "terang");
  } catch (e) {
    // abaikan
  }
});
 
// ===== 2. Form Handling =====
const formKontak = document.querySelector(".contact-form");
const pesanKonfirmasi = document.getElementById("konfirmasi");
 
formKontak.addEventListener("submit", (event) => {
  event.preventDefault(); // cegah halaman reload
 
  const nama = document.getElementById("nama").value.trim();
  pesanKonfirmasi.textContent = `Halo ${nama}, pesan Anda berhasil terkirim!`;
 
  formKontak.reset();
});
 
// ===== 3. Smooth Scroll =====
const linkAnchor = document.querySelectorAll('a[href^="#"]');
 
linkAnchor.forEach((link) => {
  link.addEventListener("click", (event) => {
    const tujuan = document.querySelector(link.getAttribute("href"));
    if (tujuan) {
      event.preventDefault();
      tujuan.scrollIntoView({ behavior: "smooth" });
    }
  });
});
 