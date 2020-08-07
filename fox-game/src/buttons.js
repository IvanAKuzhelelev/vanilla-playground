import { ICONS } from "./constants";
const toggleHighlited = (icon, show) => {
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList.toggle(`highlighted`, show);
};
export default function initButtons(handleUserAction) {
  let selectedIcon = 0;
  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlited(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      toggleHighlited(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlited(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
      toggleHighlited(selectedIcon, true);
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }
  document.querySelector(`.buttons`).addEventListener("click", buttonClick);
}
