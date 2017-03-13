async function test() {
  console.log('antes')
  const something = await waitForMe(); // this is the response in waitForMe Promise
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
