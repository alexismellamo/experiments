var phantom = require('phantom');   

// phantom.create().then(function(ph) {
//     ph.createPage().then(function(page) {
//         page.open("http://www.facebook.com").then(function(status) {
//             page.render('klj.pdf').then(function() {
//                 console.log('Page Rendered');
//                 ph.exit();
//             });
//         });
//     });
// });

async function htmlToPdf(url) {
  const ph = await phantom.create();
  const page = await ph.createPage();
  const status = await page.open(url);
  await page.render('file.pdf');
  ph.exit();
};

htmlToPdf('http://www.google.com');