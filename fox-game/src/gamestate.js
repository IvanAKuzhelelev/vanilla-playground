import { modFox, modScene } from "./ui";
import { RAIN_CHANCE, SCENES } from "./constants";

const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++;
    console.log(this.clock);
    if (this.wakeTime === this.clock) {
      this.wake();
    }
    return this.clock;
  },
  changeWeather() {
    console.log("weather");
  },
  cleanUpPoop() {
    console.log("poop");
  },
  feed() {
    console.log("feed");
  },
  wake() {
    this.current = "IDLING";
    this.wakeTime = -1;
    this.scene = SCENES[Math.random() > RAIN_CHANCE ? 0 : 1];
    modScene(this.scene);
  },
  startGame() {
    modFox("egg");
    modScene("day");
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  handleUserAction(icon) {
    if (["SLEEPING", "FEEDING", "POOPING", "HATCHING"].includes(this.current)) {
      return;
    }
    if (this.current === "INIT" || this.current === "DEAD") {
      console.log("pass");
      this.startGame();
      return;
    }
    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "fish":
        this.feed();
        break;
      case "poop":
        this.cleanUpPoop;
        break;
    }
  },
};
export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;
