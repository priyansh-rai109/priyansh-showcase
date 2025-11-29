/* ============================================================
   🌙 Priyansh Rai Portfolio JavaScript
   Handles:
   - Dark/Light Mode Toggle
   - Navbar Active Link Highlight
   - Auto Year Update in Footer
   - Scroll-to-top Button
   - Skills Animation
   - Certificate Popups
   - Contact Form
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeBtn = document.getElementById("theme-toggle");
  const yearSpan = document.getElementById("year");
  const navLinks = document.querySelectorAll(".navbar a");
  const scrollBtn = document.createElement("button");
  scrollBtn.classList.add("scroll-top-btn");
  scrollBtn.innerHTML = "⬆️";
  document.body.appendChild(scrollBtn);

  // ===== Theme Toggle =====
  if(localStorage.getItem("theme") === "light"){
      body.classList.add("light");
      if(themeBtn) themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
      if(themeBtn) themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }

  if(themeBtn){
      themeBtn.addEventListener("click", () => {
          body.classList.toggle("light");
          if(body.classList.contains("light")){
              localStorage.setItem("theme","light");
              themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
          } else {
              localStorage.setItem("theme","dark");
              themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
          }
      });
  }

  // ===== Footer Year Auto Update =====
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  // ===== Navbar Active Link =====
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
      if(link.getAttribute("href") === currentPage) link.classList.add("active");
  });

  // ===== Scroll-to-top Button =====
  scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  // ===== Skill Bar Animation =====
  const bars = document.querySelectorAll('.bar');
  function animateSkills() {
      const triggerPoint = window.innerHeight * 0.8;
      bars.forEach(bar => {
          const barTop = bar.getBoundingClientRect().top;
          if(barTop < triggerPoint){
              const width = bar.getAttribute('data-width');
              bar.style.width = width;
          }
      });
  }
  window.addEventListener('scroll', animateSkills);
  animateSkills(); // trigger on page load

  // ===== Certificate Popups =====
  function setupCertificate(btnId, popupId, closeId){
      const openBtn = document.getElementById(btnId);
      const popup = document.getElementById(popupId);
      const closeBtn = document.getElementById(closeId);

      if(openBtn && popup && closeBtn){
          openBtn.addEventListener("click", ()=>{ popup.style.display = "flex"; });
          closeBtn.addEventListener("click", ()=>{ popup.style.display = "none"; });
          window.addEventListener("click", (e) => { if(e.target === popup) popup.style.display = "none"; });
      }
  }
  setupCertificate("openCert1","certPopup1","closeCert1");
  setupCertificate("openCert2","certPopup2","closeCert2");
  setupCertificate("openCert3","certPopup3","closeCert3");
  setupCertificate("openCert4","certPopup4","closeCert4");
  setupCertificate("openCert5","certPopup5","closeCert5");

  // ===== Contact Form =====
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
      contactForm.addEventListener('submit', function(e){
          e.preventDefault();
          alert('✅ Thank you! Your message has been sent.');
          contactForm.reset();
      });
  }

  // ===== Greeting on Load =====
  console.log("✅ Portfolio loaded successfully!");
});
