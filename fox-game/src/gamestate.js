const gameState = {
  current: "init",
  clock: 1,
  tick() {
    this.clock++;
    console.log(this.clock);
    return this.clock;
  },
};
export default gameState;
