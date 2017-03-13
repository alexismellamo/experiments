const co = require('co');

function* test() {
  console.log('antes')
  yield waitForMe();
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
