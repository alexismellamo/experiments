const rewire = require("rewire")
const index = rewire("./index")
const htmlToPdf = index.__get__("htmlToPdf")
// @ponicode
describe("htmlToPdf", () => {
    test("0", async () => {
        await htmlToPdf("https://api.telegram.org/")
    })

    test("1", async () => {
        await htmlToPdf("https://croplands.org/app/a/confirm?t=")
    })

    test("2", async () => {
        await htmlToPdf("http://base.com")
    })

    test("3", async () => {
        await htmlToPdf("https://twitter.com/path?abc")
    })

    test("4", async () => {
        await htmlToPdf("Www.GooGle.com")
    })

    test("5", async () => {
        await htmlToPdf(undefined)
    })
})
