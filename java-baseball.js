const randomArr = [];

pushZeroToNine = () => {
  for (let i = 0; i < 10; i++) {
    randomArr.push(i);
  }
  shuffle(randomArr);
};
pushZeroToNine();

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//--

const computerArr = [];

pushArr = () => {
  for (let i = 0; i < 3; i++) {
    computerArr.push(randomArr[i]);
    if (computerArr[0] === 0) {
      computerArr[0] = randomArr[i + 1];
      randomArr.splice(i + 1, 1);
    }
  }
};
pushArr();

console.log(computerArr);
console.log(randomArr);
