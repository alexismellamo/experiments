async function test() {
  console.log('antes')
  await waitForMe();
  console.log('before') 
}

function waitForMe() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('something');
    }, 2000)
  });
}

async function anotherAsync() {
  console.log('antes testt');
  await test();
  console.log('before tes');
}

anotherAsync();