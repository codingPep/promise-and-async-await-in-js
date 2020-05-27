function jaya(name) {
  return new Promise((resolve, reject) => {
    console.log(`welcome ${name}`);
    if (name === "karthick") {
      resolve("karthick says hi");
    } else {
      reject("she can only talk to karthick");
    }
  });
}

function karthick(response) {
  return new Promise((resolve, reject) => {
    console.log("welcome jaya");
    resolve(`information ${response}`);
  });
}

jaya("karthick")
  .then((response) => {
    console.log("response recieved ");
    return karthick(response);
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
