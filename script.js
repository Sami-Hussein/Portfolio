function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function openPDF(pdfFileName) {
  const pdfPath = `./assets/${pdfFileName}`;

  window.open(pdfPath);
}
