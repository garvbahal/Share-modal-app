const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const showModal = () => {
  modal.classList.add("modal-active");
  overlay.classList.add("overlay-active");
};

const removeModal = () => {
  modal.classList.remove("modal-active");
  overlay.classList.remove("overlay-active");
};
