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

async function marriage() {
  const response = await jaya("karthick");
  console.log("response recieved");
  const response1 = await karthick(response);
  console.log(response1);
}
marriage();
