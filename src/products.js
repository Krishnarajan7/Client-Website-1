const categoryButtons = document.querySelectorAll(".category-button");
const productCards = document.querySelectorAll(".product-card");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelector(".category-button.active")
      .classList.remove("active");
    button.classList.add("active");

    const category = button.textContent.toLowerCase();
    productCards.forEach((card) => {
      if (
        category === "all" ||
        card.querySelector("h3").textContent.toLowerCase().includes(category)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
