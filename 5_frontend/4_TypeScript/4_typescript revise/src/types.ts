type Name = {
  firstname: string;
  lastname: string;
};

type info = {
  age: number;
};

type deatail = Name & info;

let student: deatail = {
  firstname: "nagato",
  lastname: "uzumaki",
  age: 25,
};
