const sections = document.querySelectorAll(".section");

// Only change background when user scrolls manually
let lastSectionIndex = -1;
window.addEventListener("scroll", () => {
  let found = false;
  sections.forEach((section, idx) => {
    const rect = section.getBoundingClientRect();
    if (
      !found &&
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      if (lastSectionIndex !== idx) {
        // Beautiful transition: fade out, then fade in new gradient
        document.body.style.transition =
          "background 1.2s cubic-bezier(.77,0,.175,1)";
        document.body.style.background = section.getAttribute("data-bg");
        lastSectionIndex = idx;
      }
      found = true;
    }
  });
});

// Set initial background only once, no auto-scroll
window.addEventListener("DOMContentLoaded", () => {
  const firstSection = document.querySelector(".section");
  if (firstSection) {
    document.body.style.background = firstSection.getAttribute("data-bg");
    document.body.style.transition = "background 1.2s cubic-bezier(.77,0,.175,1)";
  }
});
