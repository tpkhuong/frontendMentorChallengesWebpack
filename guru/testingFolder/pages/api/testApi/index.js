/**
 * worked
 * **/

// const apiObj = {
//   GET: (response) => {
//     response.json({ message: "hello" });
//   },
//   POST: (response) => {
//     response.json({ message: "world" });
//   },
// console.log(apiObj[req.method](res));
// };

const apiObj = {
  GET: getResponse,
  POST: postResponse,
};

function getResponse(response) {
  response.json({ message: "Hello get response" });
}

function postResponse(response) {
  response.json({ message: "Hello post response" });
}

/**
 * worked
 * **/

export default async function testRoute(req, res) {
  console.log(apiObj[req.method](res));
}

const testObj = {
  first: {
    second: {
      innerFirst: {
        name: "Marvel",
      },
    },
  },
};
