function sayHi() {
  const lan = document.querySelector("#myInput").value.substring(0, 3);
  fetch(`/greetings/${lan}`).then((res) =>
    res.text().then((text) => alert(text))
  );
}

function getName() {
  const name = document.querySelector("#myNameInput").value;
  fetch(`/names/${name}`).then((res) => res.text().then((text) => alert(text)));
}
