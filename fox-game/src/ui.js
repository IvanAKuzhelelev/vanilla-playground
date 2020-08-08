export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};
export const modScene = function modScene(state) {
  document.querySelector(".game").className = `game game-${state}`;
};
export const poopBag = function poopBag(show) {
  document.querySelector(".poopBag").classList.toggle("hidden", !show);
};
