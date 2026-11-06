
document.addEventListener("DOMContentLoaded", () => {

  // 1. Animated background particles
  const background = document.getElementById("background-effects");

  if (background) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    background.appendChild(canvas);

    let particles = [];
    let width = 0;
    let height = 0;
    let animationFrame;

    function resizeCanvas() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.min(75, Math.floor(width / 17));

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.4,
        speed: Math.random() * 0.25 + 0.08,
        alpha: Math.random() * 0.5 + 0.2
      }));
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y -= p.speed;

        if (p.y < -5) {
          p.y = height + 5;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(110, 210, 255, ${p.alpha})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    animateParticles();

    window.addEventListener("resize", resizeCanvas);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrame);
      } else {
        animateParticles();
      }
    });
  }

  // 2. WhatsApp enquiry form
  const enquiryForm = document.getElementById("enquiry-form");

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", event => {
      event.preventDefault();

      const name = document.getElementById("client-name").value.trim();
      const business = document.getElementById("business-name").value.trim();
      const phone = document.getElementById("client-phone").value.trim();
      const websiteType = document.getElementById("website-type").value;
      const details = document.getElementById("project-details").value.trim();

      if (!name || !phone || !websiteType || !details) {
        alert("Please complete all required fields.");
        return;
      }

      // THE_DEV WhatsApp contact number
      const yourWhatsAppNumber = "919265003748";

      if (!/^91\d{10}$/.test(yourWhatsAppNumber)) {
        alert("Please check the WhatsApp number in script.js.");
        return;
      }

      const message = [
        "Hello THE_DEV!",
        "",
        "I would like to enquire about a website.",
        "",
        "Name: " + name,
        "Business: " + (business || "Not provided"),
        "Contact Number: " + phone,
        "Website Type: " + websiteType,
        "Project Details: " + details
      ].join("\n");

      const whatsappURL =
        "https://wa.me/" +
        yourWhatsAppNumber +
        "?text=" +
        encodeURIComponent(message);

      window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
  }

  // 3. Update footer year automatically
  document.querySelectorAll(
    ".footer small, .sidebar-bottom > small"
  ).forEach(element => {
    element.textContent = element.textContent.replace(
      /©\s*\d{4}/,
      "© " + new Date().getFullYear()
    );
  });

});
