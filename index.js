// console.log("hello world...");

// const h1 = document.createElement("h1");
// const body = document.querySelector("body");
// h1.innerText = "Hello world, this is h1";
// h1.style = "background-color: blue; color: red;";
// console.log(body, "body");
// console.log(h1, "h1");
// body.appendChild(h1);

// const button = document.createElement("button");
const body = document.querySelector("body");
// button.innerText = "7";
// button.className = "doloo";
console.log(body, "body");
// console.log(button, "button");
// body.appendChild(button);
// const section = document.createElement("section");
// section.className = "display";
// body.appendChild(section);

const div = document.createElement("div");
div.className = "grid";
body.appendChild(div);
container.className = "conatiner";
createElement("input", body, "input", "");
body.appendChild(container);
const arr = [
  "(",
  ")",
  "&",
  "CE",
  1,
  2,
  3,
  "+",
  4,
  5,
  6,
  "-",
  7,
  8,
  9,
  "*",
  0,
  ".",
  "/",
  "=",
];
for (let i = 0; i <= arr.length - 1; i++) {
  const button = document.createElement("button");
  button.innerText = arr[i];
  button.className = "button";
  div.appendChild(button);
  function createElement(elementName, appendElement, className, innerText) {
    const element = document.createElement(elementName);

    element.innerText = innerText;

    element.className = className;
    appendElement.appendChild(element);
  }
}
