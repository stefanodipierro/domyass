document.querySelectorAll(".review-carousel").forEach(carousel => {
  const items = carousel.querySelectorAll(".carousel-item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class ="carousel-button"></span>`
  });
  carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel-nav">
      ${buttonsHtml.join("")}
    </div>
  `);

  const buttons = carousel.querySelectorAll(".carousel-button");
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      //unselect all items
      items.forEach( item => item.classList.remove("carousel-item-selected"));
      buttons.forEach( button => button.classList.remove("carousel-button-selected"));
      // select items
      items[i].classList.add("carousel-item-selected");
      button.classList.add("carousel-button-selected");
    });
  });
  //select first item
  items[0].classList.add("carousel-item-selected");
  buttons[0].classList.add("carousel-button-selected");
});
