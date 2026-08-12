// Año dinámico
document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());

const form = document.getElementById("auditForm");
const errorBox = document.getElementById("formError");
const resultCard = document.getElementById("resultCard");

// Tu número de WhatsApp (formato internacional sin +)
const WA_NUMBER = "573155576332";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorBox.textContent = "";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const url = form.url.value.trim();

  if (!name) { errorBox.textContent = "Escribí tu nombre."; return; }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { errorBox.textContent = "Email no válido."; return; }

  // Corregir la URL automáticamente: si no trae protocolo, le ponemos https://
  let cleanUrl = url.trim();
  if (!/^https?:\/\//i.test(cleanUrl)) {
    cleanUrl = "https://" + cleanUrl.replace(/^\/+/, "");
  }

  const msg =
    "Hola Holfkings 👋\n" +
    "Quiero mi auditoría web gratuita.\n" +
    "Nombre: " + name + "\n" +
    "Email: " + email + "\n" +
    "Web a auditar: " + cleanUrl;

  const waUrl = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  window.open(waUrl, "_blank", "noopener");

  resultCard.hidden = false;
  resultCard.scrollIntoView({ behavior: "smooth", block: "center" });
  form.reset();
});
