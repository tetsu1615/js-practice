//function ask(question, yes, no) {
//  if (confirm(question)) yes()
//  else no();
//}

//let ask = (question, yes, no) => {
//  if (confirm(question)) yes()
//  else no();
//}

//ask(
//  "Do you agree?",
//  function () { alert("You agreed."); },
//  function () { alert("You canceled the execution."); }
//);

let user = {
  name: "John",
  age: 30
};

let clone = { ...user, sex: "female" }


alert(clone.sex);