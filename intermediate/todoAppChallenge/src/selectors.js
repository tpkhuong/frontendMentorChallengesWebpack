export default function sayHi(name) {
  console.log(`My name is ${name}`);
  const heading1 = document.querySelector("h1");
  const heading2 = document.querySelector("h2");
  const stuffBtn = document.querySelector("button");

  return {
    heading1,
    heading2,
    stuffBtn,
  };
}
