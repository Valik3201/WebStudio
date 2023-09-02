document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".project-card-item");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = button.classList[1];

      cards.forEach((card) => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
