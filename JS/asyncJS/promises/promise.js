function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walked = false;
      if (walked) {
        resolve("You walked with DOG!");
      } else {
        reject("You didn't walk with DOG!");
      }
    }, 500);
  });
}

function cleanTheKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleaned = true;
      if (cleaned) {
        resolve("You cleaned The Kitchen");
      } else {
        reject("You didn't clean The Kitchen");
      }
    }, 500);
  });
}

function trashOut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tookOut = false;
      if (tookOut) {
        resolve("You took out the trash");
      } else {
        reject("You didn't take out the trash!");
      }
    }, 500);
  });
}

console.log(
  walkTheDog()
    .then((value) => {
      console.log(value);
      return cleanTheKitchen();
    })
    .then((value) => {
      console.log(value);
      return trashOut();
    })
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      throw new Error(error);
    })
);
