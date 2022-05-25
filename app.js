const img = document.querySelectorAll(".img");
const mobile__item = document.querySelectorAll(".mobile__item");
const mobile__link = document.querySelectorAll(".mobile__link");

mobile__item.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    removeImgActive();
    img[index].classList.add("active");
    mobile__link[index].classList.add("active");
  });
});

function removeImgActive() {
  img.forEach((item) => {
    item.classList.remove("active");
  });
  mobile__link.forEach((item) => {
    item.classList.remove("active");
  });
}
