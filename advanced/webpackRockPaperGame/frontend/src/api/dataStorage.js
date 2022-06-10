export const cachedData = {
  playerPicked: null,
  removeEvent: null,
  arrayOfRandomSigns: [],
  battleSelectorObj: {
    paper: {
      rock: "player",
      scissor: "house",
    },
    rock: {
      paper: "house",
      scissor: "player",
    },
    scissor: {
      paper: "player",
      rock: "house",
    },
  },
};

// export const selectors = {};
const arrayOfSigns = [
  "paper",
  "rock",
  "scissor",
  "rock",
  "paper",
  "scissor",
  "paper",
  "scissor",
  "rock",
  "paper",
  "paper",
  "rock",
  "scissor",
  "rock",
  "paper",
  "scissor",
  "paper",
  "scissor",
  "rock",
  "paper",
  "paper",
  "rock",
  "scissor",
  "rock",
  "paper",
  "scissor",
  "paper",
  "scissor",
  "rock",
  "paper",
  "paper",
  "rock",
  "scissor",
  "rock",
  "paper",
  "scissor",
  "paper",
  "scissor",
  "rock",
  "paper",
  "paper",
  "rock",
  "scissor",
  "rock",
  "paper",
  "scissor",
  "paper",
  "scissor",
  "rock",
  "paper",
];

for (let index = 0; index < 100; index++) {
  const randomIndex = Math.floor(Math.random() * 50);
  const randomSign = arrayOfSigns[randomIndex];
  cachedData.arrayOfRandomSigns.push(randomSign);
}
