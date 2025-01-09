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
const name = prompt("ner cin hen be  ");
alert(
  "За Засагт Хан аймгийн Дархан бэйлийн хошууны Ард Аюуш гэж олонд алдаршсан " +
    name +
    " та Батмэндийн хаант улсийн хүмүүсийг даган шийтгүүлж байсан мөрдөн байцаах ажиллагааны тогтолцоо нэгэн хэсэг болох Есөн эрүү шүүлтэд орох гэж байна. Та Есөн эрүүг давж чадваас ял хэлтэрэх болно"
);
const question1 = Number(
  prompt(
    "Есөн эрүү шүүлтийн нэг дэх шүүлт буюу нарийн торлог модоор жанчих шүүлтийг юу гэж нэрлэдэг вэ?" +
      "\n" +
      "1) Шавхаадай " +
      "\n" +
      "2) Цавчирга" +
      "\n" +
      "3) Туйван" +
      "\n" +
      "4) Зүгээр намайг алаад өг"
  )
);
switch (question1) {
  case 3:
    alert("Аан зөв хариулчихлаа шүү дараагийн нь бүр хэцүү л байх болнодоо");
  case 2:
    alert("Буруу л байна даа хө");
    break;
  case 1:
    alert("Буруу л байна даа хө");
    break;
  case 4:
    alert("Буруу л байна даа хө");
    break;
}
const question2 = Number(
  prompt(
    "Чи Монгол гутал өмссөн байх юм наад гутал чинь хэдэн онд үүссэн юм бэ?" +
      "\n" +
      "1) Хүннүгийн үеэс үүсэлтэй " +
      "\n" +
      "2) Хиданы үеэс үүсэлтэй" +
      "\n" +
      "3) Их Монгол улсын үеэс үүсэлтэй"
  )
);
switch (question2) {
  case 2:
    alert("Aан зөв хариулчихлаа шүү дараагийн нь бүр хэцүү л байх болнодоо");
    break;
  default:
    alert("Буруу л байна даа хө");
    break;
}
const question3 = Number(
  prompt(
    "Чи Монгол гутал өмссөн байх юм наад гутал чинь хэдэн онд үүссэн юм бэ?" +
      "\n" +
      "1) Хүннүгийн үеэс үүсэлтэй " +
      "\n" +
      "2) Хиданы үеэс үүсэлтэй" +
      "\n" +
      "3) Их Монгол улсын үеэс үүсэлтэй"
  )
);
switch (question3) {
  case 1:
    alert("Aан зөв хариулчихлаа шүү дараагийн нь бүр хэцүү л байх болнодоо");
    break;
  default:
    alert("Буруу л байна даа хө");
    break;
}
