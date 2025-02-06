const body = document.querySelector("body");
const div = document.createElement("div");
const section1 = document.createElement("section1");
const section2 = document.createElement("section2");

body.appendChild(div);
div.appendChild(section1);
div.appendChild(section2);

div.className = "one";
section1.className = "two";
section2.className = "three";

// createElement("input", body, "input", "");
const input = document.createElement("input");

input.id = "input";

section1.appendChild(input);

const array = [
  "(",
  ")",
  "%",
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
array[3].className = "opbtn"
array[7].className = "opbtn"
array[11].className = "opbtn"
array[15].className = "opbtn"
array[19].className = "opbtn"

for (let i = 0; i < array.length; i++) {
  createElement("button", array[i], "btn", section2);
}

function createElement(elementName, innerText, className, appendChild) {
  const element = document.createElement(elementName);
  element.innerText = innerText;
  element.className = className;
  appendChild.appendChild(element);
  element.onclick = () => {
    if (innerText === "+") {
      input.value += " " + innerText + " ";
    } else if (innerText === "-") {
      input.value += " " + innerText + " ";
    } else if (innerText === "CE") {
      input.value = "";
    } else if (innerText === "%") {
      input.value += " " + innerText + " ";
    } else if (innerText === "*") {
      input.value += " " + innerText + " ";
    } else if (innerText === "=") {
    } else if (innerText === ")") {
      input.value += " " + innerText + " ";
    } else if (innerText === "(") {
      input.value += " " + innerText + " ";
    } else if (innerText === "/") {
      input.value += " " + innerText + " ";
    } else {
      input.value += innerText;
    }
    let arr = input.value.split(" ");
    console.log(arr);
    // if (innerText === "=") {
    //   // input.value = eval(input.value);
    //   if (arr[1]==="+") {
    //     input.value=parseInt(arr[0])+parseInt(arr[2])
        
    //   }
    //   if (arr[1]==="-") {
    //     input.value=parseInt(arr[0])-parseInt(arr[2])
        
    //   }
    //   if (arr[1]==="*") {
    //     input.value=parseInt(arr[0])*parseInt(arr[2])
        
    //   }
    //   if (arr[1]==="/") {
    //     input.value=parseInt(arr[0])/parseInt(arr[2])
        
    //   }
    //   if (arr[1]==="%") {
    //     input.value=parseInt(arr[0])%parseInt(arr[2])
        
    //   }
    // }
    
    if (innerText === "=") {
      let result=0
      for (let j = 0; j < arr.length; j++) {
        
        if(arr[j]= "*"){
          input.value= parseInt(arr[j-1])*parseInt(arr[j+1])
          result+=input.value
        }
      }
    }
   
      
    
  };

  return element;
}
