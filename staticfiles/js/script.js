console.log("✔ script.js loaded from Render");
document.addEventListener('DOMContentLoaded', () => {
  // ✅ Fade out success messages after 3 seconds
  const alert = document.getElementById("success-alert");
  if (alert) {
    setTimeout(() => {
      alert.classList.add("fade-out");
      setTimeout(() => alert.remove(), 500);
    }, 3000);
  }

  // ✅ Slide-in animation for elements with .slide-in
  document.querySelectorAll('.slide-in').forEach((el) => {
    el.classList.add('visible');
  });

  // ✅ Typewriter animation (runs only on pages with #typewriter-container)
  const container = document.getElementById("typewriter-container");
  if (!container) return;  // 🛑 Skip if not on home page

  const lines = [
    "I am Priyam Tiwari.",
    "A Django Developer.",
    "A Python Enthusiast.",
    "Welcome to my world of code!"
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let currentLineEl = document.createElement("div");
  container.appendChild(currentLineEl);

  function typeNextChar() {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    currentLineEl.textContent += currentLine[charIndex];
    charIndex++;

    if (charIndex < currentLine.length) {
      setTimeout(typeNextChar, 50);
    } else {
      lineIndex++;
      charIndex = 0;
      if (lineIndex < lines.length) {
        currentLineEl = document.createElement("div");
        container.appendChild(currentLineEl);
        setTimeout(typeNextChar, 500);
      }
    }
  }

  typeNextChar();
});
