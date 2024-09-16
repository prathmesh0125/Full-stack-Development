var varible = 10;
(() => {
  {
    console.log(varible);
    varible = 20;
    console.log(varible);
  }
})();
console.log(varible);
var varible = 30;
