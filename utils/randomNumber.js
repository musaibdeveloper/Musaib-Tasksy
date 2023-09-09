import readline from "readline-sync";

export default function randomNumber(count) {
  let num = 0;
  for (let i = 1; i <= count; i++) {
    num = num * 10 + Math.floor(Math.random() * 10);
  }
  console.log(num);
  return num;
}
randomNumber(5);

