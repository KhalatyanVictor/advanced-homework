function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walked = true;
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

async function doAllTasks() {
  try {
    const dogRes = await walkTheDog();
    console.log(dogRes);

    const cleanRes = await cleanTheKitchen();
    console.log(cleanRes);

    const takeOutTrashRes = await trashOut();
    console.log(takeOutTrashRes);
  } catch (error) {
    throw new Error(error);
  }
}

console.log(doAllTasks());
