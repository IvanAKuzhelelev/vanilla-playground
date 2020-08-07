import { TICK_RATE } from "./constants";
import gameState, { handleUserAction } from "./gamestate";
import initButtons from "./buttons";

function init() {
  initButtons(handleUserAction);
  console.log("starting game");
  console.log();
  let nextTimeToTick = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}
init();
