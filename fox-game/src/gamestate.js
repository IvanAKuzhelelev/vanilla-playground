const gameState = {
  current: "init",
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++;
    console.log(this.clock);
    return this.clock;
  },
  changeWeather() {},
  cleanUpPoop() {},
  feed() {},
  startGame() {
    console.log("HATCHING");
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
