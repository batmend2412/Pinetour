// const book = " Haluun salhi";
// console.log(book);
// const a = 7;
// const b = 5;
// const p = (a + b) * 2;
// const s = a * b;
// // console.log(a + b);
// // console.log(a - b);
// // console.log(a / b);
// // console.log(a * b);
// // console.log(a + (b * a) / b);
// console.log(p);
// console.log(s);
// const seconds = 73006;
// let hour = Math.floor(seconds / 3600);
// let min = Math.floor((seconds - hour * 3600) / 60);
// let sec = Math.floor(seconds - (hour * 3600 + min * 60));

// console.log(hour, min, sec);

// const a = 4;
// const b = -4;
// const c = -3;
// const z = b * b - 4 * a * c;
// const x1 = (-b + Math.sqrt(z)) / (2 * a);
// const x2 = (-b - Math.sqrt(z)) / (2 * a);
// console.log(`x1 ${x1}, x2 ${x2}`);
// let randomtext = 1000;
// let isNumber = 12;
// if (randomtext == isNumber) {
//   true;
// }
// console.log(true);

// const year = 2025;

// if(0==year%400){
//     if(0==year%4) { console.log()}
// }else if(0==year%100){ console.log()}
// const leapYear = 2025;
// if (leapYear % 400 === 0) {
//   console.log("this is leap year");
// } else {
//   if (leapYear % 100 !== 0) {
//     if (leapYear % 4 === 0) {
//       console.log("this is not leap year");
//     }
//   }
// }
// let a = 6;
// let b = 6;
// let c = 4;

// }
// let a = 7;
// let b = 8;
// let c = 8;
// if (b > a && a > c) {
//   console.log("b hamhiin ih" + "\n" + "b > a > c");
// } else if (b >= a && b >= c && c == a)
//   if (b > a) {
//     console.log("b hamgiin ih shvvde tenege" + "\n" + b);
//   } else if (b == a) {
//     console.log(
//       "bvgd tentsvshde sda minee" + "\n" + "a",
//       "-",
//       a,
//       "=",
//       "b",
//       "-",
//       b,
//       "=",
//       "c",
//       "-",
//       c
//     );
//   }
// if (a > b && b > c) {
//   console.log("a maximum ", a);
// } else if (b < c && b < a) {
//   console.log("c maximum", c);
// } else if (a >= b && b >= c && a > c) {
//   if (a > b) {
//     console.log("max is a");
//   } else if (a == b) {
//     console.log("max is a and b");
//   }
// } else {
//   console.log("busdiin shaahgvm bnaa");
// }
// const day = Number(prompt("odroo oruulna uu"));
// switch (day) {
//   case 1:
//     alert("monday");
//     break;
//   case 2:
//     alert("tuesday");
//     break;
//   case 3:
//     alert("wednesday");
//     break;
//   case 4:
//     alert("thursday");
//     break;
//   case 5:
//     alert("friday");
//     break;
//   case 6:
//     alert("saturday");
//     break;
//   case 7:
//     alert("sunday");
//     break;
//   default:
//     alert("oor utga bhgve");
//     break;
// }
// const name = prompt("What is your name?");
// let result = "";

// alert("Hello," + name + "!");
// result += `name: ${name} `;
// const color = prompt(
//   "what is your favourite color?"
//   //  +
//   //     "\n" +
//   //     "1) Blue" +
//   //     "\n" +
//   //     "2) Black" +
//   //     "\n" +
//   //     "3) white"
// );
// alert("your favorite color is" + color);
// result += "question-1+"

// // switch (color) {
// //   case "blue":
// //     alert("your favourite color is a blue.");
// //     result += "q-what is your favourtie color answer: blue ";
// //     break;
// //   case black:
// //     alert("Your favourite color is black.");
// //     break;
// //   case white:
// //     alert("Your favourite color is white.");
// //     break;
// //   default:
// //     alert("hutsaadaarai sdamin asuultaa haraach");
// //     break;
// // }

// alert(result);
// const name = prompt(
//   "За Засагт Хан аймгийн Дархан бэйлийн хошууны Ард Аюуш гэж олонд алдаршсан Алдаржавын Аюуш та Манж Чин улсаас Монголчууд даган шийтгүүлж байсан мөрдөн байцаах ажиллагааны тогтолцоо нэгэн хэсэг болох Есөн эрүү шүүлтэд орох гэж байна. Та Есөн эрүүг давж чадваас ял хэлтэрэх болно."
// );
// alert(
//   "За Засагт Хан аймгийн Дархан бэйлийн хошууны Ард Аюуш гэж олонд алдаршсан " +
//     name +
//     " та Батмэндийн хаант улсийн хүмүүсийг даган шийтгүүлж байсан мөрдөн байцаах ажиллагааны тогтолцоо нэгэн хэсэг болох Есөн эрүү шүүлтэд орох гэж байна. Та Есөн эрүүг давж чадваас ял хэлтэрэх болно"
// );
// const question1 = Number(
//   prompt(
//     "Есөн эрүү шүүлтийн нэг дэх шүүлт буюу нарийн торлог модоор жанчих шүүлтийг юу гэж нэрлэдэг вэ?" +
//       "\n" +
//       "1) Шавхаадай " +
//       "\n" +
//       "2) Цавчирга" +
//       "\n" +
//       "3) Туйван" +
//       "\n" +
//       "4) Зүгээр намайг алаад өг"
//   )
// );
// switch (question1) {
//   case 3:
//     alert("Аан зөв хариулчихлаа шүү дараагийн нь бүр хэцүү л байх болнодоо");
//     break;
//   case 2:
//     alert("Буруу л байна даа хө");
//     break;
//   case 1:
//     alert("Буруу л байна даа хө");
//     break;
//   case 4:
//     alert("Буруу л байна даа хө");
//     break;
// }
// const question2 = Number(
//   prompt(
//     "Чи Монгол гутал өмссөн байх юм наад гутал чинь хэдэн онд үүссэн юм бэ?" +
//       "\n" +
//       "1) Хүннүгийн үеэс үүсэлтэй " +
//       "\n" +
//       "2) Хиданы үеэс үүсэлтэй" +
//       "\n" +
//       "3) Их Монгол улсын үеэс үүсэлтэй"
//   )
// );
// switch (question2) {
//   case 2:
//     alert("Aан зөв хариулчихлаа шүү дараагийн нь бүр хэцүү л байх болнодоо");
//     break;
//   default:
//     alert("Буруу л байна даа хө");
//     break;
// }
// const question3 = Number(
//   prompt(
//     "Чи Монгол гутал өмссөн байх юм наад гутал чинь хэдэн онд үүссэн юм бэ?" +
//       "\n" +
//       "1) Хүннүгийн үеэс үүсэлтэй " +
//       "\n" +
//       "2) Хиданы үеэс үүсэлтэй" +
//       "\n" +
//       "3) Их Монгол улсын үеэс үүсэлтэй"
//   )
// );
// switch (question3) {
//   case 1:
//     alert("Aан зөв хариулчихлаа шүү дараагийн нь бүр хэцүү л байх болнодоо");
//     break;
//   default:
//     alert("Буруу л байна даа хө");
//     break;
// }
// for (let i = 1; i < 10; i += 2) {
//   console.log(i);
// }
// let str = "Ullamco";
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }
// console.log(str);
// let str = "hello";
// let reverseStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
//   reverseStr = reverseStr + str[i];
// }
// console.log(reverseStr);
// for (let i = 0; i <= str.length - 1; i += 1) {
//   console.log(str[i]);
// }
// let num = 8;
// for (let i = 1; i <= 10; i++) {
//   console.log(i, "*", num, "=", i * num);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(` ${i}-n hurd`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(j, "*", i, "=", i * j);
//   }
// }
// for (let i = 0; i < 6; i++) {
//   let stars = "";

//   for (let j = 0; j <= i; j++) {
//     stars += " *";
//   }
//   console.log(stars);
// }
// for (let i = 1; i < 6; i++) {
//   let stars = "";

//   for (let j = 0; j < 6 - i; j++) {
//     stars += "  ";
//   }
//   for (let k = 1; k > i; k++) {
//     stars += " *";
//   }
//   console.log(stars);
// }
// for (let i = 1; i < 6; i++) {
//   let go = "+";
//   for (let k = 5 - i; k > 0; k--) {
//     go += "  ";
//   }
//   for (let j = 0; j < i; j++) {
//     go += " *";
//   }
//   console.log(go);
// }
// for (let i = 0; i < 6; i++) {
//   let stars = "";
//   for (let j = 0; j < i; j++) {
//     stars += "  ";
//   }
//   for (let k = 6 - i; k > 0; k--) {
//     stars += " *";
//   }
//   // for (let j = 0; j < i; j++) {
//   //   stars += " ";
//   // }
//   console.log(stars);
// }
// for (let i = 0; i < 8; i++) {
//   let stars = "";
//   for (let k = i - 4; k > 0; k *= 2) {
//     stars += "*";
//   }
//   console.log(stars);
// }
// const n = 6;
// for (let i = 0; i < n; i++) {
//   let stars = "";
//   for (let j = 0; j < 4; j++) {
//     if ((i == 0 && (j == 0 || j == 3)) || (i == n - 1 && (j == 0 || j == 3))) {
//       stars += "  ";
//     } else {
//       stars += "* ";
//     }
//   }
//   console.log(stars);
// }
// const l = 3;
// for (let i = 0; i <= l; i++) {
//   let stars = "";
//   for (j = 0; j < 4; j++) {
//     stars += " *";
//   }
//   console.log(stars);
// }
// const row = 6;
// const column = 6;
// for (let i = 1; i <= row; i++) {
//   let stars = "";
//   for (let j = 1; j <= column; j++) {
//     if ((i == 1 || i == row) && (j == 1 || j == column)) {
//       stars += "*";
//     } else {
//       stars += "  ";
//     }
//   }
//   console.log(stars);
// }
// 1-100 hvrtelh toonuddin sondgoi toodnuudiin niilber
// let n = 0;
// for (let i = 1; i <= 100; i += 2) {
//   n += i;
// }
// console.log(n);

// String
// Number
// boorean
// array

// let even = 0;
// let odd = 0;
// for (let j = 1; j <= 100; j++) {
//   if (j % 2 === 0) {
//     even += j;
//   } else {
//     odd += j;
//   }
// }
// console.log(odd, "sondgoi toonii niilber");

// console.log(even, "tegsh toonii niilber");
// 2. hello world! string-iin tegsh index deerh usgiig uppercase bolgoh
// const str = "hello world!";
// let result = "";
// for (let i = 0; i <= str.length - 1; i++) {
//   if (i % 2 === 0) {
//     result += str[i].toUpperCase();
//   } else {
//     result += str[i];
//   }
// }
// console.log(result);
// 3. n too palindrome too monu true/false

// for (let i = 0; i <=  ; i++) {
//   const element = array[i];

// }
// String(Number.split(``).reverse(.join(``).))
// let studentNames = ["bataa", "bayraa", "ebaa", "tumee", "javhaa", "tsogoo"];
// studentNames.push(`nymaa`);
// for (let i = 0; i < studentNames.length; i++) {
//   console.log(i);
// }
// studentNames[7] = `ochiroo`;

// studentNames.pop();
// console.log(studentNames, `array`);
// let score = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < score.length; i++) {
//   score[i] *= 2;
//   sum += score[i];
// }
// console.log(score, sum);

// let friuts = ["apple", "banana", "cherry", "date"];
// friuts.push(`elderberry`);
// friuts[1] = "blueberry";

// for (let i = 0; i < friuts.length; i++) {
//   console.log(friuts[i]);
// }
// console.log(`ehnii element - ${friuts[0]}, 3dahi element - ${friuts[2]}`);
// console.log(friuts);
