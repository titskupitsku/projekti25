document.addEventListener("DOMContentLoaded", function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-item');

  navLinks.forEach(link => {
    if (currentPath.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
});
function openDialog() {
    let form = document.querySelector("#signinDialog form"); 
    form.reset();
    
    document.getElementById("signinDialog").showModal(); 
}
document.addEventListener("DOMContentLoaded", () => {
  const registerLink = document.getElementById("link1");
  const registerDialog = document.getElementById("registerDialog");
  const signinDialog = document.getElementById("signinDialog");

  registerLink.addEventListener("click", () => {
    if (signinDialog.open) signinDialog.close();
    registerDialog.showModal();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const registerLink = document.getElementById("link2");
  const registerDialog = document.getElementById("registerDialog");
  const signinDialog = document.getElementById("signinDialog");

  registerLink.addEventListener("click", () => {
    if (registerDialog.open)registerDialog.close();

    signinDialog.showModal();
  });
});

document.querySelectorAll(".toggle-password").forEach((toggle) => {
    toggle.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    toggle.addEventListener("click", () => {
      const targetId = toggle.getAttribute("data-target");
      const input = document.getElementById(targetId);
      const icon = toggle.querySelector("i");

      if (input) {
        const isVisible = input.type === "text";
        input.type = isVisible ? "password" : "text";

        
        if (isVisible) {
          icon.classList.remove("fa-eye");
          icon.classList.add("fa-eye-slash");
        } else {
          icon.classList.remove("fa-eye-slash");
          icon.classList.add("fa-eye");
        }
      }
    });
  });
document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const dialog = document.getElementById(targetId);
    if (dialog && dialog.open) dialog.close();
  });
});