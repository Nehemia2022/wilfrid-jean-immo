document.addEventListener("DOMContentLoaded", function() {
  // Menu responsive
  const menuToggle = document.createElement("button");
  menuToggle.innerText = "☰ Menu";
  menuToggle.classList.add("menu-toggle");
  document.querySelector("header").prepend(menuToggle);
  
  const nav = document.querySelector("nav ul");
  menuToggle.addEventListener("click", function() {
      nav.classList.toggle("active");
  });

  // Formulaire de contact - validation simple
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const nom = document.getElementById("nom").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (nom === "" || email === "" || message === "") {
          alert("Veuillez remplir tous les champs.");
          return;
      }
      
      alert("Merci pour votre message ! Nous vous contacterons bientôt.");
      form.reset();
  });
});
