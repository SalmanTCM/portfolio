// public/cursor.js
document.addEventListener("mousemove", (e) => {
    const background = document.querySelector(".cursor-following-background");
    const xPos = e.clientX / window.innerWidth;
    const yPos = e.clientY / window.innerHeight;
    background.style.transform = `translate(-${xPos * 50}px, -${yPos * 50}px)`;
  });
  