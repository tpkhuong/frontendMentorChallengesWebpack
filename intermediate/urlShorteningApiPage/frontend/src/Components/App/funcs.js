function bindTest(first, second) {
  console.log(first);
  console.log(second);
}

export const bindToClick = bindTest.bind({});
