export const rotArrayObj = [
  { rot: "ROT1", value: 1 },
  { rot: "ROT2", value: 2 },
  { rot: "ROT3", value: 3 },
  { rot: "ROT4", value: 4 },
  { rot: "ROT5", value: 5 },
  { rot: "ROT6", value: 6 },
  { rot: "ROT7", value: 7 },
  { rot: "ROT8", value: 8 },
  { rot: "ROT9", value: 9 },
  { rot: "ROT10", value: 10 },
  { rot: "ROT11", value: 11 },
  { rot: "ROT12", value: 12 },
  { rot: "ROT13", value: 13 },
  { rot: "ROT14", value: 14 },
  { rot: "ROT15", value: 15 },
  { rot: "ROT16", value: 16 },
  { rot: "ROT17", value: 17 },
  { rot: "ROT18", value: 18 },
  { rot: "ROT19", value: 19 },
  { rot: "ROT20", value: 20 },
  { rot: "ROT21", value: 21 },
  { rot: "ROT22", value: 22 },
  { rot: "ROT23", value: 23 },
  { rot: "ROT24", value: 24 },
  { rot: "ROT25", value: 25 },
];

export const rot13 = (str, rot) => {
  const rotNum = 26 - rot;
  const originalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newOGArray = originalAlphabet.split("");
  let LettersBeforeIndexArray = [];

  for (let i = 0; i < newOGArray.length; i++) {
    const lettersBeforeIndex = (i - rotNum + 26) % 26;
    LettersBeforeIndexArray.push(newOGArray[lettersBeforeIndex]);
  }

  const rot13Object = {};
  newOGArray.forEach((key, index) => {
    rot13Object[key] = LettersBeforeIndexArray[index];
  });

  const translatedString = str
    .toUpperCase()
    .split("")
    .map((value) => (value ? rot13Object[value] || value : value))
    .join("");

  return translatedString;
};
