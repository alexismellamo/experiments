const co = require('co');

function* test() {
  console.log('antes')
  const something = yield waitForMe(); // this is the response in waitForMe Promise
  console.log('before')
}

function waitForMe() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('something');
    }, 2000)
  });
}

function* anotherAsync() {
  console.log('antes testt');
  yield test();
  console.log('before tes');
}

const anotherAsyncFetcher = co(anotherAsync)
anotherAsyncFetcher.then(() => {});
