for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
} ///ans will be 10 10 10 10 for 10 time becuse var is global scope
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
} ///ans will be 0 ,1 2,3,4,5,6,,7,8,9 becuse let create global  scope
