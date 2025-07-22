  // ✅ Fixed Typewriter (line-by-line, clean & correct)
  const lines = [
    "I am Priyam Tiwari.",
    "A Django Developer.",
    "A Python Enthusiast.",
    "Welcome to my world of code!"
  ];

  const container = document.getElementById("typewriter-container");

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
