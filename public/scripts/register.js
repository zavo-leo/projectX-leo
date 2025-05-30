function showForm(type) {
  document
    .getElementById("login-form")
    .classList.toggle("hidden", type !== "login");
  document
    .getElementById("register-form")
    .classList.toggle("hidden", type !== "register");

  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  document.querySelector(`.tab[onclick*="${type}"]`).classList.add("active");
}
