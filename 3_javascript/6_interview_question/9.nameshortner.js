function nameshortner(str) {
  let res = str.length > 10 ? str.slice(0, 10) + "..." : str;
  return res;
}

console.log(nameshortner("prathmesh"));
